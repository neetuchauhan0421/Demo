import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import ScalenutBody from "../../../resources/scalenutBody/x/group-215.png";
import Logo from "../../../resources/scalenutLogo/x/group.png"


const styles = theme => ({
  grid1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    minHeight: "100vh",
    backgroundSize: "100% 100%"
  },
  sideDiv: {
    // margin: "6% 8%"
  },
  logo: {
    width: "300px",
    height: "300px",
     marginTop:"1rem",
     marginLeft:"5rem"
  },

  cordaLogo: {
    width: "89px",
    height: "29px",
    display:"flex"
  }
});

const AsideBody = props => {
  const { classes } = props;
  return (
    // <Grid item md={4} className={classes.grid1}>
    <Grid>
      <div className={classes.sideDiv}>
      <img src={Logo} alt="corda-logo" className={classes.cordaLogo} />

        <img src={ScalenutBody} alt="Logo" className={classes.logo} />
       
        <Typography
          variant="h6"
          style={{
            fontFamily:"Jost",
            fontSize:"26px",
            font:"icon"
          }}>
          Welcome to Scalenut Curabitur lobortis id lorem id bibendum consectetur.
        </Typography>
      </div>
    </Grid>
  );
};

AsideBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsideBody);
