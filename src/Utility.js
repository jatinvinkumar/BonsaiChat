import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function Utility(props){
    return(
        <div  style={{ marginBottom:20,
        boxShadow: "0px 0px 10px #9999", backgroundColor:"white",  
        borderRadius:3
        }}>
            <div style={{width:'100%', height:1, backgroundColor: props.data.themeColor}}></div>
            <div style={{padding: 20}}>
                {props.children}
            </div>  
        </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Utility);