import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import propic1 from './propic.jpg';
import dembe from './profilePictures/dembe.jpg'
import jen from './profilePictures/jen.jpg'
import kyle from './profilePictures/kyle.jpg'
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import MailIcon from '@material-ui/icons/Mail';
import "animate.css/animate.min.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link, Route, Router, useHistory } from 'react-router-dom';
import Utility from './Utility';
import { connect } from 'react-redux'
import { FirebaseContext } from "./firebase/firebase";

export default function CreateConversation(props) {

  const { app, api } = useContext(FirebaseContext);
  const history = useHistory();
  const newConvo = async () => {
    await api.createConversation().then(key => {
      console.log("Key Returned: ", key );
      history.push("/chat/" + key);
      //history.push("/newlead/" + key);
    });
    
  }
  
        return(
            <Utility>
            <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Start a conversation</b></Typography>
            <Grid container>
              <Grid item sm={4} xs={4}>
                <AvatarGroup max={2} style={{paddingBottom:10}}>
                  <Avatar alt="Remy Sharp" src={dembe} />
                  <Avatar alt="Travis Howard" src={jen} />
                </AvatarGroup>
              </Grid>
              <Grid item sm={8} xs={8}>
              <Typography variant={"subtitle2"} style={{color:"black", opacity:0.8, paddingBottom:5}}>Talk to us now!</Typography>
              <div style={{display:'flex'}}>
                <AccessTimeIcon style={{fontSize:20, color: props.state.themeColor}}/>
                <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20, paddingLeft: 5}}>Replies within 2 min</Typography>
              </div>
              </Grid>
            </Grid>
            <Button
              variant=""
              color="#00A07C"
              style={{textTransform:"none", borderRadius:25, backgroundColor: props.state.themeColor, textDecoration:'none', color: 'white'}}
              startIcon={<MailIcon style={{color: 'white'}}/>}
              onClick={newConvo}
            >
            {/* <Link to="/chat" style={{textDecoration:'none', color: 'white'}}>
              
            </Link> */}
              Send us a message
            </Button>
            </Utility>
        )
}