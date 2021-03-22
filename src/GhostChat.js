import React, {useEffect, useState, useContext}from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { AttachFileTwoTone, EmojiEmotionsTwoTone, FreeBreakfastOutlined, Info } from '@material-ui/icons';
import { Button, Container, Input, Typography } from '@material-ui/core';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { connect } from 'react-redux'

import { FirebaseContext } from "./firebase/firebase";

import { Widget, addResponseMessage, toggleWidget, dropMessages, addUserMessage } from 'react-chat-widget';
import './Chat.css'; 

var stateData;
var chatID;
var m = "place";
var pointer = 0;
var triggerN = ""

var message = "";

var showing = false;


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

function loopThru(props){
  chatID = props.match.params.id;
  console.log("lebron", props, pointer);
  if(props.data[chatID] && pointer < props.data[chatID].length){
    if(props.data[chatID][pointer].sender == "user"){
      addUserMessage(props.data[chatID][pointer].data, pointer)
    } else{
      addResponseMessage(props.data[chatID][pointer].data, pointer)
    }
    pointer++
    loopThru(props)
    console.log("pointer: ", pointer)
  }
  return;
}



function GhostChat(props){

  if(!showing){
    toggleWidget();
    showing = true;
  }

  const { app, api } = useContext(FirebaseContext);

  const [userInput, setInput] = useState(0);

  const inputChange = (event) => {
    //setInput(event.target.value)
    message = event.target.value;
  };

  const handleSend = () => {
    if(message == ""){return} 
    addUserMessage(message);
    api.addMessage(pointer, chatID, message)
    message = "";
  };

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  stateData = props.data;
  dropMessages()
  pointer = 0;
  loopThru(props);

  toggleWidget()
    return(
      <ThemeProvider theme={theme} style={{width:'100%'}}>
          <div style={{width:'100%', overflowY:'scroll', height: 400,}}>
            <Widget
              handleNewUserMessage={handleNewUserMessage}
            />
          </div>
      </ThemeProvider>
  )
  
}

//Recieve data from state
const mapStateToProps = (state, ownProps) => {
  //let id = ownProps.match.params.post_id;
  
  return {
    data: state
  }
}

//To Send actions to state
const mapDispatchToProps = (dispatch) => {
  return {
    //deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GhostChat);
