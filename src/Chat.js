import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { Info } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import styles from './Chat.css'; 
import {RemoveScrollBar} from 'react-remove-scroll-bar';

const steps = [
  {
    id: '0',
    component: (
      <div style={{display:'flex', direction:'row', verticalAlign:'middle', alignItems: 'center'}}>
        <InfoIcon style={{fontSize: 30, opacity: 0.6}}/>
        <Typography variant={"caption"} style={{ opacity:0.8, paddingLeft: 10}}>Live support is available Monday - Friday, 9 am-6 pm CST.</Typography>
      </div>
    ),
    trigger: '1'
  },
  {
    id: '1',
    message: 'Welcome to Bonsai!',
    trigger: '2',
  },
  {
    id: '2',
    message: 'What service what !',
    trigger: '3'
  },
  {
    id: '3',
    options: [
      { value: 1, label: 'Number 1', trigger: '1' },
      { value: 2, label: 'Number 2', trigger: '1' },
      { value: 3, label: 'Number 3', trigger: '1' },
    ],
  },
];

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

var isScrolling;

export default class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {height: 225, yDiff: 0};
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll.bind(this));
  }
  
  resizeHeaderOnScroll() {
    
    const distanceY = window.pageYOffset || document.documentElement.scrollTop

    console.log(distanceY);
     if (distanceY >= 85) {
        this.setState({height: 225-85, collapsed: true});
     } else {
        this.setState({height: 225 - distanceY, yDiff: distanceY, collapsed: false});
     }
  }

  render(){
      return(
        <div className="container1">
              <ChatBanner id="header" height={this.state.height} style={{backgroundColor:"black",}} />
              <ThemeProvider theme={theme}>
                <ChatBot hideHeader={true} steps={steps} customStyle={{backgroundColor:'transparent', 'boxShadow': 'none'}} contentStyle={{height: (window.innerHeight - this.state.height - 50) + this.state.yDiff}} />
              </ThemeProvider>
        </div>
      )
  }

}