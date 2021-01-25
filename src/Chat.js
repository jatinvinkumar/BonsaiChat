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
import ChatSection from './ChatSection';
import ChatContactInfo from './ChatContactInfo';


var isScrolling;

export default class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {height: 255, yDiff: 0};
  }
  
  componentDidMount() {
    //window.addEventListener("scroll", this.resizeHeaderOnScroll.bind(this));
    
  }

  componentWillReceiveProps(newProps){
    this.setState({i: newProps.match.params.id})
  }
  
  
  resizeHeaderOnScroll() {
    
    const distanceY = window.pageYOffset || document.documentElement.scrollTop

    console.log(distanceY);
     if (distanceY >= 85) {
        this.setState({height: 255-70, collapsed: true});
     } else {
        this.setState({height: 255 - distanceY, yDiff: distanceY, collapsed: false});
     }
  }

  render(){
      return(
        <div className="container1">
              <ChatBanner id="header" height={this.state.height} style={{backgroundColor:"black",}} />
              {/* <ChatContactInfo height={(window.innerHeight - this.state.height - 50) + this.state.yDiff}/> */}
              <ChatSection id={this.props.match.params.id} height={(window.innerHeight - this.state.height - 50) + this.state.yDiff}/>
        </div>
      )
  }

}