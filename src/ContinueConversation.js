import React from 'react';
import './App.css';
import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import "animate.css/animate.min.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Utility from './Utility';


function ContinueConversation(){
    return(
        <Utility>
          <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Continue the conversation</b></Typography>
          <Grid container style={{ alignItems: "center"}}>
            <Grid item sm={3} xs={3}>
              <AvatarGroup max={1} style={{paddingBottom:10}}>
                <Avatar alt="Remy Sharp" style={{width:50, height:50}} src={propic1} />
              </AvatarGroup>
            </Grid>
            <Grid item sm={8} xs={8}>
            <Typography variant={"subtitle2"} style={{color:"black", opacity:0.8, paddingBottom:5}}>Invstr | 6h ago</Typography>
            <div style={{display:'flex'}}>
              <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20}}>Hi! Have a look around and let...</Typography>
            </div>
            </Grid>
            <Grid item sm={1} xs={1}>
              <ArrowForwardIosIcon style={{opacity:0.6, paddingBottom:10}}/>
            </Grid>
          </Grid>
          </Utility>
    )
}

export default ContinueConversation;