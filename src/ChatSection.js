import React, {useEffect, useState}from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { FreeBreakfastOutlined, Info } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { connect } from 'react-redux'

import { Widget, addResponseMessage, toggleWidget, dropMessages } from 'react-chat-widget';
import './Chat.css'; 

var stateData;
var chatID;
var m = "place";
var pointer = 0;
var triggerN = ""


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
    addResponseMessage(props.data[chatID][pointer].data, pointer)
    pointer++
    loopThru(props)
    console.log("pointer: ", pointer)
  }
  return;
}

function ChatSection(props){

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  console.log("OMG FUCKING RERENDER");

  stateData = props.data;
  dropMessages()
  pointer = 0;
  loopThru(props);

  toggleWidget()
    return(
      <ThemeProvider theme={theme}>
          <Widget
            handleNewUserMessage={handleNewUserMessage}
          />
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
