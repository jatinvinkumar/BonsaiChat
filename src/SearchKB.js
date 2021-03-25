import React, { useState } from 'react';
import './App.css';
import propic1 from './propic.jpg';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton, Divider } from '@material-ui/core';
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
import { Book } from '@material-ui/icons';
import axios from 'axios';


var question = "";


export default function SearchKB(props){

  const [text, setText] = useState("");

  const [clicked, setClicked] = useState(false)

  const [answers, setAnswers] = useState([])

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  const makeApiCall = () => {
    const question = {
      "questions": [
        text
      ],
      "top_k_reader": 5,
      "top_k_retriever": 5
    }

    axios.post('https://api.bonsai-support.com/models/bonsai/doc-qa', question)
        .then(response => {
          console.log("returnedData: ", response.data.results[0].answers)
          setAnswers(response.data.results[0].answers)
        })
  }

  const handleClick = (event) => {
    makeApiCall();
  }

  function RenderQueries(){
    var queries = [0,1]
    if(answers.length != 0 && text.length != 0){
      return(
        <div>
          <p>Search results for "{text}"</p>
           {answers.map((answer, index) => (
              <div style={{}}>
                <Divider/>
                <div style={{display: 'flex', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                  <Book style={{width: 30, color: props.data.themeColor}} />
                  <div style={{marginLeft: 10, padding:5}}>
                  <Typography variant={"subtitle2"} style={{color:"black", fontSize: 14}}><b>Article Title</b></Typography> 
                  <Typography variant={"subtitle2"} style={{color:"black", fontSize: 14, opacity: 0.8}}>{answer.context}</Typography> 
                  </div>
                </div> 
              </div>
            ))}
        </div>
      );
    }
    return(<div></div>)
  }

  return(
      <Utility>
      <Typography variant={"subtitle2"} style={{color:"black", paddingBottom:10}}><b>Find your answer now</b></Typography>
        <div style={{display:'flex'}}>
          <Paper component="form" style={{boxShadow: "0px 0px 1px #9999", width:'100%', borderTopRightRadius:0, borderBottomRightRadius:0}}>
            <InputBase
              placeholder="Search KB"
              inputProps={{ 'aria-label': 'search google maps' }}
              style={{paddingLeft:10, width:'100%', textAnchor:'middle', alignItems:'center', textAlign:'center', paddingTop:5}}
              onChange={onTextChange}
            />
          </Paper>
          
          <IconButton onClick={handleClick} style={{height:'100%', backgroundColor: props.data.themeColor, height:40, width:40, borderRadius:0, borderTopRightRadius:5, borderBottomRightRadius:5}} type="submit" aria-label="search">
              <ArrowForwardIosIcon style={{color:'white', margin:'auto'}}/>
          </IconButton>
        </div>
        <RenderQueries data={props.data} answers={answers}/>
      </Utility>
  )       
}