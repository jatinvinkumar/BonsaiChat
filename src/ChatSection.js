import React, {useEffect, useState, useContext}from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { ArrowForwardIos, AttachFileTwoTone, EmojiEmotionsTwoTone, FreeBreakfastOutlined, Info } from '@material-ui/icons';
import { Button, Container, IconButton, Input, InputBase, Paper, Typography } from '@material-ui/core';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { connect, useDispatch } from 'react-redux'

import { FirebaseContext } from "./firebase/firebase";

import { Widget, addResponseMessage, toggleWidget, dropMessages, addUserMessage, renderCustomComponent } from 'react-chat-widget';
import './Chat.css'; 
import Utility from './Utility';

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
  chatID = props.id;
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

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//return 0 for ok email
function validate(email) {

  if (validateEmail(email)) {
    return true
  } else {
    return false
  }
  return false;
}

var email = "";
var name = "";

function ChatSection(props){

  if(!showing){
    toggleWidget();
    showing = true;
  }

  const { app, api } = useContext(FirebaseContext);
  const dispatch = useDispatch();

  const [email2, setEmail] = useState("");

  const [name2, setName] = useState("");

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

  const handleChangeEmail = (event) => {
    console.log("EVENTLOG: ", event.target.value)
    email = event.target.value;
  }

  const handleEmailSubmit = () => {
    console.log("submit pressed");
    if(validate(email)){
      console.log("email validated");
      api.setMetaData(props.id, {email: email});
      setEmail(email)
    }
  }

  const handleChangeName = (event) => {
    //console.log("EVENTLOG: ", event.target.value)
    name = event.target.value;
  }

  const handleNameSubmit = () => {
      api.setMetaData(props.id, {name: name});
      setName(name);
      message = "Howdy ";
      handleSend();
      addResponseMessage("Howdy " + name)
      renderCustomComponent(Button2)
  }



  const Button2 = ({ }) => 
    <div style={{width:'80%',}}>
      <Utility color={props.data.themeColor} style={{backgroundColor: props.data.themeColor}} >
      {/* <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Stay in touch</b></Typography> */}
                <div style={{display:'flex'}}>
                  <Paper component="form" style={{ boxShadow: "0px 0px 1px #9999", width:'100%', borderTopRightRadius:0, borderBottomRightRadius:0}}>
                    <Input
                      placeholder="Enter Email"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      disableUnderline={true}
                      onChange={handleChangeEmail}
                      style={{paddingLeft:10, width:'100%', textAnchor:'middle', alignItems:'center', textAlign:'center', paddingTop:5}}
                    />
                  </Paper>

                  <IconButton onClick={handleEmailSubmit} style={{height:'100%', backgroundColor:props.data.themeColor, height:40, width:40, borderRadius:0, borderTopRightRadius:5, borderBottomRightRadius:5}} type="submit" aria-label="search">
                      <ArrowForwardIos style={{color:'white', margin:'auto'}}/>
                  </IconButton>
                </div>
      </Utility>
    </div>

const Name = ({ }) =>
  <div style={{width:'80%'}}>
  <Utility color={props.data.themeColor} style={{backgroundColor: props.data.themeColor}} >
  {/* <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Stay in touch</b></Typography> */}
            <div style={{display:'flex'}}>
              <Paper component="form" style={{ boxShadow: "0px 0px 1px #9999", width:'100%', borderTopRightRadius:0, borderBottomRightRadius:0}}>
                <Input
                  placeholder="Full Name"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  disableUnderline={true}
                  onChange={handleChangeName}
                  style={{paddingLeft:10, width:'100%', textAnchor:'middle', alignItems:'center', textAlign:'center', paddingTop:5}}
                />
              </Paper>

              <IconButton onClick={handleNameSubmit} style={{height:'100%', backgroundColor:props.data.themeColor, height:40, width:40, borderRadius:0, borderTopRightRadius:5, borderBottomRightRadius:5}} type="submit" aria-label="search">
                  <ArrowForwardIos style={{color:'white', margin:'auto'}}/>
              </IconButton>
            </div>
  </Utility>
</div>


  stateData = props.data;
  dropMessages()
  pointer = 0;
  console.log("PropsCC: ", props)
  if(!props.data.sessionMeta.name && !props.data.sessionMeta.email){
    addResponseMessage("Hi! What's your name?")
    renderCustomComponent(Name)
  } else if(props.data.sessionMeta.name && !props.data.sessionMeta.email){
    addResponseMessage("Howdy " + props.data.sessionMeta.name + "! What's your email?")
    renderCustomComponent(Button2)
  } else {
    loopThru(props);
  }
  
  

  toggleWidget()
    return(
      <ThemeProvider theme={theme} style={{width:'100%'}}>
          <div style={{width:'100%', overflowY:'scroll', height: 400}}>
            <Widget
              handleNewUserMessage={handleNewUserMessage}
            />
          </div>
          <Container style={{  bottom:0, width:"100%", padding:10}}>
              <Container className="shadow" style={{backgroundColor: 'white', borderRadius: 8, padding: 20, boxShadow: '0 0 0 1px rgba(0,0,0,0.01)'}}>
                <div style={{display:'flex', alignItems:'center', marginTop: 20, }}>
                <Input id={"userInput"} onChange={inputChange} placeholder="Enter a description to help people find what they need" disableUnderline='true' style={{fontSize: 12, textAlign: "left",}} fullWidth="true" inputProps={{ 'aria-label': 'description', disableUnderline: true }} />
                  {/* <MenuBookTwoTone style={{color: "#3599FF", marginRight: 10}}/> */}
                  {/* <PostAddTwoTone style={{color: "#3599FF",  marginRight: 10}}/> */}
                  <EmojiEmotionsTwoTone style={{color: "#3599FF",  marginRight: 10}}/>
                  {/* <Gif style={{color: "#3599FF",  marginRight: 10}}/> */}
                  {/* <InsertPhotoTwoTone style={{color: "#3599FF",  marginRight: 10}}/> */}
                  <AttachFileTwoTone style={{color: "#3599FF"}}/>
                  <Button variant="primary" onSubmit={handleSend} onClick={handleSend} style={{}}>Send</Button>
                </div>
              </Container>
          </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatSection);
