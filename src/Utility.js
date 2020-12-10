import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';

export default class Utility extends React.Component {
    render(){
        return(
            <div  style={{ marginBottom:20,
            boxShadow: "0px 0px 10px #9999", backgroundColor:"white",  
            borderRadius:3
            }}>
                <div style={{width:'100%', height:1, backgroundColor:'green'}}></div>
                <div style={{padding: 20}}>
                    {this.props.children}
                </div>  
            </div>
        )
    }
}