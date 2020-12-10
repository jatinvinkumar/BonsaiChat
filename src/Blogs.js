import React from 'react';
import './App.css';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import "animate.css/animate.min.css";
import Utility from './Utility';
import blogImage from './blogImage.png'


export default class Blogs extends React.Component{
    render(){
        return(
            <Utility>
            <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>The latest from Invstr</b></Typography>
                <img src={blogImage} style={{width:'100%'}}/>
                <Typography variant={"subtitle1"} style={{color:"black"}}>A Walkthrough of How I Valued Canadian Solar </Typography>
            </Utility>
        )
        
    }
}