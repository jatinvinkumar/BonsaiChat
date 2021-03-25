import React from 'react';
import './App.css';
import { Typography, Container, Avatar, Button, Grid, Icon, TextField, IconButton } from '@material-ui/core';
import "animate.css/animate.min.css";
import Banner from './Banner'
import ContinueConversation from './ContinueConversation';
import CreateConversation from './CreateConversation';
import SearchKB from './SearchKB'; 
import Blogs from './Blogs';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';


function ConversationsExists(props){
  if(props.state.conversationIDS.length > 0  && props.state.sessionMeta.email != null){
    console.log("welp", props.state);
    return(
      <ContinueConversation state={props.state}/> 
      //<Redirect to={"/chat/" + props.state.conversationIDS[0]} />
    )
  } else {
    return (
      <div></div>
    )
  }
}

function Home(props) {
  console.log("beepBeeps", props);
  return(
    <div style={{height: "600px"}}>
      <Container style={{backgroundColor: props.post.themeColor, position:'sticky', height:300, top:0, width:'100%', zIndex:-1}}/>
      <div style={{zIndex:10, top:0, marginTop:-300, paddingLeft:20, paddingRight:20}}>
        <Banner logo={props.post.logo} state={props.post}/>
        <ConversationsExists state={props.post}/>
        <CreateConversation data={props.post}/>
        <SearchKB data={props.post}/>
        {/* <Blogs/> */}
      </div>
      <Container style={{width:'100%', height:30, display:'flex', alignItems:'center',  justifyContent:'space-around', backgroundColor:'white', position:'sticky', zIndex:100, bottom:0, marginBottom: 0,boxShadow: "0px 0px 5px #9999"}}>
        <Typography variant={"subtitle1"} style={{color:"black", fontSize:10, opacity:0.3}}>Powered by Bonsai! </Typography>
      </Container>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  //let id = ownProps.match.params.post_id;
  return {
    post: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
