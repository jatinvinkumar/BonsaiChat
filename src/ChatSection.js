import React, {useEffect, useState}from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { FreeBreakfastOutlined, Info } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import styles from './Chat.css'; 
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import firebase from 'firebase'

const COMPANY_NAME = "Branch";

var userName = "";

var agentID;

var agentMessage = 'placeholder';

var db;

function MessageHandler (props) {
  useEffect (() => {
    db = firebase.firestore();
    const {steps} = props;
    const message = steps.message.value;
    //Upload this message to the backend
    db.collection('companies').doc(COMPANY_NAME).collection('agents').doc(agentID).collection(userName).add({
      message: message,
      from: 'user',
      created: firebase.firestore.Timestamp.fromDate(new Date())
    }).then(() => {
      props.triggerNextStep({trigger: 'message'});
    })
  }, [])
  return (<div></div>);
}

function Connecting (props) {

  const [working, setWorking] = useState(false);

  const [assignedAgentID, setAssignedAgentID] = useState('');

  useEffect(() => {
    db = firebase.firestore();
    const { steps } = props;
    const chatter = steps.name.value;
    //Assign a random agent to this person
    console.log(chatter)
    userName = chatter;
    db.collection('companies').doc(COMPANY_NAME).collection('agents').get()
    .then(function(querySnapshot) {
        var agentIDs = [];
        var agents = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            agentIDs.push(doc.id);
            agents.push(doc.data());
        });
        
        //Loop through agents and find the first online
        for (var i = 0; i < agents.length; i++) {
          console.log(agents[i]["online"])
          console.log(agentIDs[i])
          if (agents[i]["online"]) {
            //Select this agent and assign them to this person
            setAssignedAgentID(agentIDs[i]);
            agentID = agentIDs[i];
            break;
          }
        }

        props.triggerNextStep({trigger: '7'});

        db.collection('companies').doc(COMPANY_NAME).collection('agents').doc(agentID).collection(userName).where("from", "==", "agent")
        .onSnapshot(function(querySnapshot) {
            var messages = [];
            querySnapshot.docChanges().forEach(function(change) {
              console.log(change.doc.data()["message"]);
              agentMessage = change.doc.data()["message"];
              setTimeout(function() {
                console.log(agentMessage)
                props.triggerNextStep({trigger: 'handleAgentMessage'})
              }, 2000)
            });
        });
        //console.log("FOUND AGENT: " + assignedAgentID)

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    //setInterval(function () {console.log("checking...")},2000)
    
  }, []); 

  setTimeout(function () {
    console.log(agentID)
  }, 3000)

  return (
    <div></div>
  );
}


const steps = [
  {
    id: '1',
    message: "Welcome to " + COMPANY_NAME + "!",
    trigger: '2',
  },
  {
    id: '2',
    message: 'Would you like to look at our support articles or speak with an agent?',
    trigger: '3'
  },
  {
    id: '3',
    options: [
      { value: 'Articles', label: 'Articles', trigger: '4' },
      { value: 'Agent', label: 'Agent', trigger: '4' },
    ],
  },
  {
    id: '4',
    message: 'Please enter your full name.',
    trigger: 'name'
  },
  {
    id: 'name',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    component: <Connecting />,
    waitAction: true,
  },
  {
    id: '7',
    message: 'You are now connected with an agent.',
    trigger: 'message'
  },
  {
    id: 'message',
    user: true,
    trigger: 'messageHandler'
  },
  {
    id: 'messageHandler',
    component: <MessageHandler/>,
    waitAction: true
  },
  {
    id: 'handleAgentMessage',
    component: (
    <div>{agentMessage}</div>
    ),
    asMessage: true,
    end: true
  }
]

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#000000',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

export default class ChatSection extends React.Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <ChatBot hideHeader={true} steps={steps} customStyle={{backgroundColor:'transparent', 'boxShadow': 'none'}} contentStyle={{height: this.props.height}} />
            </ThemeProvider>
        )
    }
}