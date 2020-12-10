import React from 'react';
import './App.css';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import "animate.css/animate.min.css";
import Banner from './Banner'
import ContinueConversation from './ContinueConversation';
import CreateConversation from './CreateConversation';
import SearchKB from './SearchKB'; 
import Blogs from './Blogs';

function Home() {
  return(
    <div>
      <Container style={{backgroundImage:`linear-gradient(135deg, rgb(0, 178, 137) 0%, rgb(0, 76, 58) 100%)`, position:'sticky', height:300, top:0, width:'100%', zIndex:-1}}></Container>
          
          <div style={{zIndex:10, top:0, marginTop:-300, paddingLeft:20, paddingRight:20}}>
            <Banner/>
            {/* <ContinueConversation/> */}
            <CreateConversation/>
            <SearchKB/>
            <Blogs/>
          </div>
          <Container style={{width:'100%', height:30, display:'flex', alignItems:'center',  justifyContent:'space-around', backgroundColor:'white', position:'absolute', bottom:0, position:'sticky', boxShadow: "0px 0px 5px #9999"}}>
            <Typography variant={"subtitle1"} style={{color:"black", fontSize:10, opacity:0.3}}>Powered by Bonsai! </Typography>
          </Container>
    </div>
  )
}

export default Home;
