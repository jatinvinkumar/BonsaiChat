import React from 'react';
import './App.css';
import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import MailIcon from '@material-ui/icons/Mail';
import "animate.css/animate.min.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Paper from '@material-ui/core/Paper';
import Banner from './Banner'
import InputBase from '@material-ui/core/InputBase';
import Utility from './Utility';


export default class SearchKB extends React.Component{
    render(){
        return(
            <Utility>
           <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Find your answer now</b></Typography>
                <div style={{display:'flex'}}>
                  <Paper component="form" style={{boxShadow: "0px 0px 1px #9999", width:'100%', borderTopRightRadius:0, borderBottomRightRadius:0}}>
                    <InputBase
                      placeholder="Search KB"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      style={{paddingLeft:10, width:'100%', textAnchor:'middle', alignItems:'center', textAlign:'center', paddingTop:5}}
                    />
                  </Paper>
                  <IconButton style={{height:'100%', backgroundColor:'#00A07C', height:40, width:40, borderRadius:0, borderTopRightRadius:5, borderBottomRightRadius:5}} type="submit" aria-label="search">
                      <ArrowForwardIosIcon style={{color:'white', margin:'auto'}}/>
                  </IconButton>
                </div>
            </Utility>
        )
        
    }
}