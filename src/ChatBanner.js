import React from 'react';
import { Container, Typography, Grid, Button, Avatar} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import logo from './invstr-logo.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import dembe from './profilePictures/dembe.jpg'
import jen from './profilePictures/jen.jpg'
import kyle from './profilePictures/kyle.jpg'
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
        <Grid container direction={'row'} style={{paddingTop: 10, paddingBottom:20, overflow: 'hidden', backgroundColor:"black", height: this.props.height}}>
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
          <Grid item lg={10} xl={10} md={10} sm={10} xs={10}>
            <Container style={{marginLeft:0, paddingLeft: 0}}>
              <Typography variant={"h6"} style={{color:"white",}}><b>Invstr</b></Typography>
              <Typography variant={"caption"} style={{color:"white", opacity:0.8}}>Questions about using Hitch? Check out Hitch Help Center for quick answers or send us a message. Live support is available Monday - Friday, 9 am-6 pm CST.</Typography>
              <div style={{display:'flex', direction: 'row', paddingTop: 30}}>
                <AvatarGroup  max={3}>
                  <Avatar style={{borderColor:'black'}} alt="Remy Sharp" src={dembe}/>
                  <Avatar style={{borderColor:'black'}} alt="Travis Howard" src={jen}/>
                  <Avatar style={{borderColor:'black'}} alt="Cindy Baker" src={kyle} />
                </AvatarGroup>
                <div>
                <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}>We'll be back online</Typography>
                <br/>
                <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}><b>Tommorow</b></Typography>
                </div>
              </div>
             
            </Container>
          </Grid>
          </Grid>
      )
    }
}

export default chatBanner;