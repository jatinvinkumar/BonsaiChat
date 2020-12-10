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
        opacity:1,
        v1: true
      };
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
      this.scrollHandler();
    }

  
    scrollHandler() {
      console.log(window.scrollY)

      var opacityChange = 1 - (window.scrollY/100);
      if(opacityChange < 0.14){
        this.setState({opacity:opacityChange, v1: false})
      } else {
        this.setState({opacity:opacityChange, v1: true})
      }
      
    }
  
    render(){
      if(this.state.v1){
        return (
          <Grid container direction={'row'} style={{paddingTop: 30, paddingBottom:30, overflow: 'hidden', backgroundImage: "linear-gradient(135deg, rgb(0, 178, 137) 0%, rgb(0, 76, 58) 100%)", height: this.props.height, }}>
          <Grid item lg={2} xl={2} md={2} sm={2} xs={2}  style={{opacity: this.state.opacity}}>
          <Link style={{position:'absolute'}}  to="/home">
          <Button
                  color="white"
                  style={{textTransform:"none", borderRadius:25, alignSelf:'center'}}
                >
                  <ArrowBackIosIcon style={{color:"white"}}/>
                </Button>
                </Link>
          </Grid>
          <Grid item lg={10} xl={10} md={10} sm={10} xs={10} style={{opacity: this.state.opacity}}>
            <Container style={{marginLeft:0, paddingLeft: 0}}>
              <Typography variant={"h6"} style={{color:"white",}}><b>Bonsai</b></Typography>
              <Typography variant={"caption"} style={{color:"white", opacity:1}}>Questions about using Hitch? Check out Hitch Help Center for quick answers or send us a message. Live support is available Monday - Friday, 9 am-6 pm CST.</Typography>
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
      } else {
        console.log("ummm");
        return(
        
        
          <Grid container direction={'row'} style={{paddingTop: 10, paddingBottom:20, backgroundColor:"black", height: this.props.height, }}>
          <Grid item lg={2} xl={2} md={2} sm={2} xs={2}  style={{marginTop: this.props.height - 55,}}>
          <Link style={{position:'absolute'}}  to="/home">
          <Button
                  color="white"
                  style={{textTransform:"none", borderRadius:25, alignSelf:'center'}}
                >
                  <ArrowBackIosIcon style={{color:"white"}}/>
                </Button>
                </Link>
          </Grid>
          <Grid item lg={10} xl={10} md={10} sm={10} xs={10} style={{marginTop: this.props.height - 55,}}>
          <div style={{display:'flex', direction: 'row', alignItems: 'center', verticalAlign:'middle'}}>
                <AvatarGroup  max={3}>
                  <Avatar style={{borderColor:'black', height: 30, width: 30}} alt="Remy Sharp" src={dembe}/>
                  <Avatar style={{borderColor:'black', height: 30, width: 30}} alt="Travis Howard" src={jen}/>
                  <Avatar style={{borderColor:'black', height: 30, width: 30}} alt="Cindy Baker" src={kyle} />
                </AvatarGroup>
                <div>
                <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}><b>Invstr</b></Typography>
                <br/>
                <Typography variant={"caption"} style={{color:"white", opacity:0.8, paddingLeft: 10}}>Tommorow</Typography>
                
                </div>
              </div>
          </Grid>
          </Grid>
        )
      }
    }
}

export default chatBanner;