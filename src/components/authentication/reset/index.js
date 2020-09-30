import React, { useState } from 'react'
import useStyles, {theme} from './indexStyle.js';
import Alert from '@material-ui/lab/Alert';
import {TextField, Button, Grid, Paper, InputLabel} from '@material-ui/core';
import {resetPassword} from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import AsideBody from "../../authentication/sideBar/AsideBody";



export default () => 
{
    const [email, setEmail] = useState("");
    const [validationError, setValidationError] = useState(null);
    const dispatch = useDispatch();
    const handleEmail = (val) => {
        if(validationError){
            setValidationError(null);
        }
        setEmail(val);
        return;
    }

    function validateEmailFormat(emailText){
        if (emailText == '') {
            setValidationError("Please enter your email address");
            return false;
        }    
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailText)) {
            setValidationError("Please enter valid email address");
            return false;
        }
      }
    
    
    const sendRecoveryLink=(event)=>{
                    console.log(email);
             dispatch(resetPassword(email));

        setValidationError(null);
        if (validateEmailFormat(email)){

        }
    }


    // function sendRecoveryLink(){
    //     event.preventDefault();
    //     if (isValidEmail(email) === true) {
    //       dispatch(resetPassword({ email }));
    //       setDisableResetLink(true);
    //     } else {
    //       setErrors({ email: 'Please enter valid email address' });
    //     }
    //   };
    
    const classes = useStyles(theme);
    return (
        <Grid style={{backgroundImage: "linear-gradient(121deg, #e9907a 1%, #fac686 97%)",
        height:"635px"

    }}>
        <div className={classes.root}>
        <Card className={classes.cardroot}>
        <Grid className={classes.details}>
          <CardContent className={classes.content}>
            <AsideBody />
          </CardContent>  
        </Grid>
        <Grid className={classes.details}>
          <CardContent className={classes.content}>
              <CssBaseline />
                    <h4 className={classes.heading}>Reset Password</h4>
                    <Grid item xs={12}>
                        {validationError ? <Alert severity="error">{validationError}</Alert> : null}
                        {/* {validationError ? <InputLabel error>{validationError}</InputLabel> : null} */}
                    </Grid>
                    <Grid container direction="column" xs={12}
                    style={{marginTop:"6rem"}}
                    >
                        <InputLabel 
                            color="primary" 
                            shrink
                            className={classes.label}
                        >We'll send a recovery link to</InputLabel>
                        <TextField  
                                label="Email" 
                                id="standard-basic" 
                                value={email}
                                width={1}
                                // onChange= {e => setEmail(e.target.value)}
                                onChange= {e => handleEmail(e.target.value)}
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            width={1}
                            onClick={sendRecoveryLink}
                            className={classes.button}
                        >Submit</Button>
                    </Grid>
                    </CardContent>
              </Grid>

            </Card>
            </div>
            </Grid>

    )
}

//export default index;