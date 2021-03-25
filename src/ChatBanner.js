import React from 'react';
import { Container, Typography, Grid, Button, Avatar} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import logo from './invstr-logo.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import dembe from './profilePictures/dembe.jpg'
import jen from './profilePictures/jen.jpg'
import kyle from './profilePictures/kyle.jpg'
import { connect } from 'react-redux';

function chatBanner(props){

  return(
    <Grid container direction={'row'} style={{paddingTop: 20, paddingBottom:20, backgroundColor:props.data.themeColor, }}>
    <Grid item lg={2} xl={2} md={2} sm={2} xs={2}>
    <Link style={{position:'absolute'}}  to="/home">
    <Button
            color="white"
            style={{textTransform:"none", borderRadius:25, alignSelf:'center'}}
          >
            <ArrowBackIosIcon style={{color:"white"}}/>
          </Button>
          </Link>
    </Grid>
    <Grid item lg={10} xl={10} md={10} sm={10} xs={10} style={{}}>
    <div style={{display:'flex', direction: 'row', alignItems: 'center', verticalAlign:'middle'}}>
          <AvatarGroup  max={1}>
            <Avatar style={{borderColor:props.data.themeColor, height: 30, width: 30}} alt="jen" src={jen}/>
          </AvatarGroup>
          <div>
          <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}><b>Bonsai</b></Typography>
          <br/>
          <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}>Replies in a few minutes</Typography>
          
          </div>
        </div>
    </Grid>
    </Grid>
  )
}

//Recieve data from state
const mapStateToProps = (state, ownProps) => {
  //let id = ownProps.match.params.post_id;
  
  return {
    data: state
  }
}

//To Send actions to state
const mapDispatchToProps = (dispatch) => {
  return {
    //deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(chatBanner);