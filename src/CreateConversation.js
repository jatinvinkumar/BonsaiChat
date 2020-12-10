import React from 'react';
import './App.css';
import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import MailIcon from '@material-ui/icons/Mail';
import "animate.css/animate.min.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import Utility from './Utility';


export default class CreateConversation extends React.Component{
    render(){
        return(
            <Utility>
            <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Start a conversation</b></Typography>
            <Grid container>
              <Grid item sm={4} xs={4}>
                <AvatarGroup max={2} style={{paddingBottom:10}}>
                  <Avatar alt="Remy Sharp" src={propic1} />
                  <Avatar alt="Travis Howard" src={propic1} />
                </AvatarGroup>
              </Grid>
              <Grid item sm={8} xs={8}>
              <Typography variant={"subtitle2"} style={{color:"black", opacity:0.8, paddingBottom:5}}>Talk to us now!</Typography>
              <div style={{display:'flex'}}>
                <AccessTimeIcon style={{fontSize:20, color: "#00A07C"}}/>
                <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20, paddingLeft: 5}}>Replies within 2 min</Typography>
              </div>
              </Grid>
            </Grid>
            <Button
              variant=""
              color="#00A07C"
              style={{textTransform:"none", borderRadius:25, backgroundColor:'#00A07C'}}
              startIcon={<MailIcon style={{color: 'white'}}/>}
            >
            <Link to="/chat" style={{textDecoration:'none', color: 'white'}}>
              Send us a message
            </Link>
             
            </Button>
            </Utility>
        )
        
    }
}