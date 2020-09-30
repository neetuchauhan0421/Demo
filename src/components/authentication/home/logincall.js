import React, { Component } from 'react';
import { Card, Button } from "@material-ui/core";
import resources from "../../../resources/google/google.png";


// function LoginComp() {
class LoginComp extends Component {

render(){
  return (
    
    <Card>
      <Button  style={{width:"100%",
      height:"100%",
      borderRadius:"10px",
      backgroundColor:"#ffffff"}}
      variant="outlined" color="secondary" href={`https://d3cc76006f33.ngrok.io/auth/google`}>
           <img src={resources}  style={{width:"1.5rem",marginLeft:"0rem"}}/>
        Continue with Google
      </Button>
    </Card>
  );
}
}

export default LoginComp;