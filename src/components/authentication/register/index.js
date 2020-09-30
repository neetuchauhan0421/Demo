import React, { Component } from 'react'
import {
    Button,
    Typography,
    Box,
    Grid,
    TextField
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { registerUser } from '../../../../src/store/actions/user';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';
import PhoneInput from 'react-phone-input-2';
import { withStyles } from "@material-ui/core/styles";
import 'react-phone-input-2/lib/style.css'
import AsideBody from "../../authentication/sideBar/AsideBody";
import useStyles, {theme} from '../home/indexStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';


class index extends Component {
    state = {
        email:"",
        name: "",
        company_name: "",
        phone: "",
        password: ""
    };

    onSubmit = e => {
        e.preventDefault();

        let signUpData = {
            email: this.props.location.state.email,
            name: this.state.name,
            company_name: this.state.company_name,
            phone: this.state.phone,
            password: this.state.password,
        };
        console.log(signUpData)
     this.props.registerUser(signUpData, this.props.history);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        this.setState({
          [name]: value,
          errors: {},
        });
      };
      handlePhoneChange = (e) => {
        console.log(e.target)
        this.setState({
    phone:e.target.value    });
      };

    render() {
        const { classes } = this.props;

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
  
                        <Typography variant="h5" style={{
                            textAlign: "center",marginBottom:"2rem",
                            fontFamily:"Jost",
                            fontSize:"26px"
                        }}>
                            Create your Free Account
                           </Typography>

                            <TextField

                                style={{ 
                                  width: "300px",
                                height: "37px",
                                borderRadius: "10px",
                                marginTop:"30px"
                             }}
                                
                                label="Full Name"
                                id="standard-required"
                                margin="dense"
                                name='name'
                                onChange={this.handleChange}
                                variant="outlined"


                            />  
                          <PersonIcon 
                         color="disabled"
                          style={{marginLeft:"-2rem"
                          ,marginTop:"2.5rem"}}
                          />


                        <PhoneInput
                style={{marginTop:"30px"}}
                            country={'us'}
                             onChange={phone => this.setState({ phone })}
                            label="Contact Number"
                            id="standard-required"
                            margin="dense"
                            name='phone'
                           variant= "outlined"


                        />
                        {/* <PhoneIcon
                        color="disabled"
                        style={{marginLeft:"-1rem",
                         marginTop:"1rem"}}
                        /> */}
                        <TextField
                            style={{ 
                             width: "300px",
                            height: "37px",
                            borderRadius: "10px",marginTop:"30px" }}
                            label="Company Name"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='company_name'
                            variant="outlined"

                        />
                        <BusinessIcon
                       color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"2.5rem"}}

                        />
                        <br />
                        <TextField
                            style={{
                             width: "300px",
                            height: "37px",
                            borderRadius: "10px",
                            marginTop:"30px"}}
                            label="Password"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='password'
                            variant="outlined"

                        />
                        <LockIcon
                        color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"2.5rem"}}

                        />
                        
                        <br />
                        <Button variant="contained"
                        color="primary"
                                style={{
                                 width: "300px",
                                    height: "37px",
                                    marginTop:"30px",
                                    borderRadius: "10px",
                                     backgroundImage: "linear-gradient(to bottom, #f69e7a, #ff9485)"
                                   }}
                            onClick={this.onSubmit}

                        >
                            Create an Account
                    </Button>
                    </CardContent>
              </Grid>

            </Card>
            </div>

</Grid>
        )
    }
}
index.propTypes = {
    history: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.user
});

export default  (withStyles(useStyles))(connect(mapStateToProps,
    { registerUser })(withRouter(index))
)   ;