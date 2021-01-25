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

var message = "hello cunt"

const IncomingMessage = props => (
    <button onClick={() => props.triggerNextStep({trigger: 'dynamicallyReachedStep'})}>
      Click me to go to the next step
    </button>
);

const steps = [
  {
    id: 'staticMessage',
    component: <IncomingMessage/>,
    waitAction: true
  },
  {
    id: 'staticMessage',
    message: message,
    waitAction: true
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

export default class GhostChat extends React.Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <ChatBot hideHeader={true} steps={steps} customStyle={{backgroundColor:'transparent', 'boxShadow': 'none'}} contentStyle={{height: this.props.height, backgroundColor:'transparent', display:'flex', flexDirection:'column', justifyContent:'flex-end' }} bubbleStyle={{maxWidth:'100%'}} style={{backgroundColor:'transparent'}} />
            </ThemeProvider>
        )
    }
}