import React from 'react';
import { Container, Typography } from '@material-ui/core';
import logo from './invstr-logo.png';
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
        <Container style={{paddingTop: 10, paddingBottom:20, opacity: this.state.opacity}}>
            <img src={logo} style={{height:50}}/>
            <Typography variant={"h6"} style={{color:"white",}}><b>Hey There </b> 👋</Typography>
            <Typography variant={"body"} style={{color:"white", opacity:0.8}}>Every year, there are billions of empty car seats going between cities, leading to congestion and pollution.</Typography>
          </Container>
      )
    }
}

export default Banner;