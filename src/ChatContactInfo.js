import React, {useEffect, useState}from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBanner from './ChatBanner';
import InfoIcon from '@material-ui/icons/Info';
import { FreeBreakfastOutlined, Info } from '@material-ui/icons';
import { Button, Container, Divider, Input, Typography } from '@material-ui/core';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import SendIcon from '@material-ui/icons/Send';

export default class ChatContactInfo extends React.Component{

    render(){
        return(
            <>
            <div style={{backgroundColor:'white', height:'100%', padding:20, height: this.props.height}}>
                <Input placeholder="example@email.com" disableUnderline='true' style={{fontSize: 14, width: '100%'}} fullWidth="true" inputProps={{ 'aria-label': 'description', disableUnderline: false }} />
                <Divider orientation="horizontal" />
                <Input placeholder="You can start writing here..." disableUnderline='true' style={{fontSize: 12, marginTop:30}} fullWidth="true" multiline="true" inputProps={{ 'aria-label': 'description', disableUnderline: true }} />
            </div>
            <div style={{width:'100%', height:30, display:'flex', justifyContent:'flex-end', backgroundColor:'white', position:'absolute', bottom:0, paddingBottom:10, position:'sticky'}}>
                <Button><SendIcon color="black"/></Button>
            </div>
            </>
        )
    }
}