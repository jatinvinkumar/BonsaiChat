import React from 'react';
import { Container, Typography } from '@material-ui/core';
import logo from './White+Gray.png';
class Banner extends React.Component {

    constructor(props) {
      super(props);
  
      this.scrollHandler = this.scrollHandler.bind(this);
  
      this.state = {
        fadeIn: '',
        opacity:1
      };
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
      this.scrollHandler();
    }

    scrollHandler() {
      console.log(window.scrollY)

      var opacityChange = 1 - (window.scrollY/100);
      this.setState({opacity:opacityChange})
    }
  
    render(){
      return(
        <Container style={{marginTop: 30, paddingBottom:20, opacity: this.state.opacity}}>
            <img src={this.props.logo} style={{height:40}}/>
            <Typography variant={"h6"} style={{color:"white", fontSize: 30, marginTop:10, marginBottom: 10}}>{this.props.state.headerHome}</Typography>
            <Typography variant={"subtitle2"} style={{color:"white", opacity:0.9, marginBottom: 10}}>{this.props.state.headerDesc}</Typography>
          </Container>
      )
    }
}

export default Banner;