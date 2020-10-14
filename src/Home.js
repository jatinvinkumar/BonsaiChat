import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';

import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import {useSpring, animated} from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import MailIcon from '@material-ui/icons/Mail';
import "animate.css/animate.min.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Paper from '@material-ui/core/Paper';
import Banner from './Banner'
import InputBase from '@material-ui/core/InputBase';
import blogImage from './blogImage.png'
import { Link } from 'react-router-dom';
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];



function Home() {
  return(
    <div>
      <Container style={{background:`linear-gradient(135deg, rgb(37, 37, 37) 0%, rgb(0, 0, 0) 100%)`, position:'sticky', height:200, top:0, width:'100%', zIndex:-1}}></Container>
          <div style={{zIndex:10, top:0, marginTop:-200}}>
          <Banner/>
          <Container  style={{backgroundColor:"",  paddingTop: 10, paddingBottom:10}}>
              <div style={{boxShadow: "0px 0px 5px #9999", backgroundColor:"white"}}>
                <Container  style={{backgroundColor:"",  paddingTop: 20, paddingBottom:20}}>
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
                </Container>
              </div>
            </Container>
            <Container  style={{backgroundColor:"",  paddingTop: 10, paddingBottom:10}}>
              <div style={{boxShadow: "0px 0px 5px #9999", backgroundColor:"white"}}>
                <Container  style={{backgroundColor:"",  paddingTop: 20, paddingBottom:30}}>
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
                    <AccessTimeIcon style={{fontSize:20}}/>
                    <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20, paddingLeft: 5}}>Replies within 2 min</Typography>
                  </div>
                  </Grid>
                </Grid>
                <Button
                  variant="outlined"
                  color="black"
                  style={{textTransform:"none", borderRadius:25}}
                  startIcon={<MailIcon />}
                >

                <Link to="/chat" style={{textDecoration:'none', color: 'black'}}>
                  Send us a message
                </Link>
                 
                </Button>
                </Container>
              </div>
            </Container>

            <Container  style={{backgroundColor:"",  paddingTop: 10, paddingBottom:10}}>
              <div style={{boxShadow: "0px 0px 5px #9999", backgroundColor:"white"}}>
                <Container  style={{backgroundColor:"",  paddingTop: 20, paddingBottom:20}}>
                <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Find your answer now</b></Typography>
                <div style={{display:'flex'}}>
                  <Paper component="form" style={{boxShadow: "0px 0px 1px #9999", width:'100%', borderTopRightRadius:0, borderBottomRightRadius:0}}>
                    <InputBase
                      placeholder="Search KB"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      style={{paddingLeft:10, width:'100%', textAnchor:'middle', alignItems:'center', textAlign:'center', paddingTop:5}}
                    />
                  </Paper>
                  <IconButton style={{height:'100%', backgroundColor:'black', height:40, width:40, borderRadius:0, borderTopRightRadius:5, borderBottomRightRadius:5}} type="submit" aria-label="search">
                      <ArrowForwardIosIcon style={{color:'white', margin:'auto'}}/>
                  </IconButton>
                </div>
                </Container>
              </div>
            </Container>

            <Container  style={{backgroundColor:"",  paddingTop: 10, paddingBottom:10}}>
              <div style={{boxShadow: "0px 0px 5px #9999", backgroundColor:"white"}}>
                <Container  style={{backgroundColor:"",  paddingTop: 20, paddingBottom:20}}>
                <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>The latest from Invstr</b></Typography>
                <img src={blogImage} style={{width:'100%'}}/>
                <Typography variant={"subtitle1"} style={{color:"black"}}>A Walkthrough of How I Valued Canadian Solar </Typography>
                </Container>
              </div>
            </Container>
            </div>
            <Container style={{width:'100%', height:30, backgroundColor:'white', position:'absolute', bottom:0, position:'sticky', boxShadow: "0px 0px 5px #9999"}}></Container>
    </div>
  )
}

export default Home;
