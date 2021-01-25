import React from 'react';
import './App.css';
import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import "animate.css/animate.min.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Utility from './Utility';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { Link } from 'react-router-dom';


const delay = ms => new Promise(res => setTimeout(res, ms));

function GetText(props){
  if (props.state && props.state[props.id]) {
    var a = props.state[props.id]
  console.log("obj", a.length);

  return(
    <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20}}>{a[a.length - 1].data}</Typography>
  )
  }
  return(
    <Typography variant={"subtitle2"} style={{color:"black", fontSize:12, paddingBottom:20}}></Typography>
  )
}


function Conversations(props){
  return (
    <div>
      {props.state.conversationIDS.map((id, index) => (
        <Grid container style={{ display:'flex', alignItems: "center", verticalAlign:'center' }}>
            <Grid item sm={2} xs={2}>
              <AvatarGroup max={1} style={{paddingBottom:10}}>
                <Avatar alt="Remy Sharp" src={propic1}   />
              </AvatarGroup>
            </Grid>
            <Grid item sm={8} xs={8} style={{paddingLeft:10}}>
            <Typography variant={"subtitle2"} style={{color:"black", opacity:0.8, paddingBottom:5}}>Bonsai | 6h ago</Typography>
            <div style={{display:'flex'}}>
            <GetText state={props.state} id={id}/>
            </div>
            </Grid>
            <Grid item sm={1} xs={1}>
              <Link to={"/chat/" + id}><ArrowForwardIosIcon style={{opacity:0.6, paddingBottom:10}}/></Link>
            </Grid>
          </Grid>
      ))}
    </div>);
}


function ContinueConversation(props){
    return(
        <Utility>
          <Typography variant={"subtitle1"} style={{color:"black", paddingBottom:10}}><b>Continue the conversation</b></Typography>
          <Conversations state={props.state}/>
          </Utility>
    )
}

export default ContinueConversation;