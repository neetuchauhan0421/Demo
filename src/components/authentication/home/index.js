
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import LoginComp from "./logincall";
import { userEmail } from '../../../store/actions/user';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import useStyles, {theme} from './indexStyle.js';
import Alert from '@material-ui/lab/Alert';
import { TextField, Button, Grid } from '@material-ui/core';
import AsideBody from "../sideBar/AsideBody";

class Home extends Component {
  state = {
    email: "",
    validationError: null,
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(e.target.value)
  };
  handleEmail = (val) => {
    this.setState({
      validationError: null,
    });

    console.log(this.state.email)
    console.log(this.validateEmailFormat(this.state.email))
    if (this.validateEmailFormat(this.state.email)) {
      this.props.userEmail(this.state.email, this.props.history);
      console.log(this.state.email);
    }
    return;
  }

  validateEmailFormat = (emailText) => {
    console.log(emailText)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const re=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    var pattern = new RegExp(re)
    if (emailText == '') {
      this.setState({
        validationError: "Please enter your email address",
      });
      return false;
    }
    else if (!pattern.test(emailText)) {
      this.setState({
        validationError: "Please enter your valid email address",
      });
      return false;
    }
    console.log(pattern.test(emailText))
    return true;
  }

  render() {
    const { classes } = this.props;
    return (
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

                <Typography
                  variant='h5'
                  style={{
                    fontWeight: "normal",
                    fontSize:"26px",
                    textAlign: 'center',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    fontFamily: "Jost",
                    // width: "477px",
                    // height: "68px",
                    letterSpacing: "0.12px"
                  }}
                >
                  Please continue by clicking one of the following options..
            </Typography>


             
                <Grid item xs={12}>
                  {this.state.validationError ? <Alert severity="error">{this.state.validationError}</Alert> : null}
                </Grid>
                <Grid container direction="column" xs={12}>

                  <TextField
                    // style={{ width: "200px", height: "30px" }}
                    variant='outlined'
                    margin='normal'
                    //fullWidth
                    size='small'
                    name='email'
                    label='Enter with Email'
                    value={this.state.email}

                    id='email'
                    style={{ marginTop: '3rem' }}
                    autoComplete='email'
                    onChange={this.handleChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      // width: "485px",
                      // height: "42px",
                      borderRadius: "10px", backgroundImage: "linear-gradient(to bottom, #f69e7a, #ff9485)"
                    }}
                    // width={1}
                    onClick={e => this.handleEmail(e.target.value)}
                    className={classes.button}
                  >Continue With Email</Button >
                                       <Divider style={{ marginTop: "4rem" }} />

                     {/* <Grid container justify='center'> */}
<Grid>
                  <LoginComp />

                </Grid>
                </Grid>
              </CardContent>
              </Grid>

            </Card>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({});

export default (withStyles(useStyles))(connect(mapStateToProps,
  { userEmail })(withRouter(Home))
);

