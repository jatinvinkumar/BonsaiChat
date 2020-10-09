import React from 'react';
import { Container, Typography, Grid, Button} from '@material-ui/core';
import logo from './invstr-logo.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
class chatBanner extends React.Component {

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
        <Grid container direction={'row'} style={{paddingTop: 10, paddingBottom:20, backgroundColor:"black"}}>
          <Grid item lg={2} xl={2} md={2} sm={2} xs={2}>
          <Button
                  color="white"
                  style={{textTransform:"none", borderRadius:25, alignSelf:'center'}}
                >
                  <ArrowBackIosIcon style={{color:"white"}}/>
                </Button>
          </Grid>
          <Grid item lg={10} xl={10} md={10} sm={10} xs={10}>
            <Container style={{marginLeft:0, paddingLeft: 0}}>
              <Typography variant={"h6"} style={{color:"white",}}><b>Invstr</b></Typography>
              <Typography variant={"caption"} style={{color:"white", opacity:0.8}}>Questions about using Hitch? Check out Hitch Help Center for quick answers or send us a message. Live support is available Monday - Friday, 9 am-6 pm CST.</Typography>
            </Container>
          </Grid>
          </Grid>
      )
    }
}

export default chatBanner;