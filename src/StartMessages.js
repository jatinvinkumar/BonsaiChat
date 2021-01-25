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
import GhostChat from './GhostChat';
import ChatContactInfo from './ChatContactInfo';

var isScrolling;

export default class StartMessages extends React.Component{
  constructor(props) {
    super(props);
    this.state = {height: 255, yDiff: 0};
  }
  

  render(){
      return(
        <div style={{height: 600, display:'flex', flexDirection:'column-reverse'}}>
                <GhostChat height={(600)}/>
        </div>
      )
  }

}