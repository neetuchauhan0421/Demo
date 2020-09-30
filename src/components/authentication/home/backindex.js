import React from "react";
import Grid from "@material-ui/core/Grid";


import Index from "./index";

const backindex = () => {
  return (
    <Grid style={{backgroundImage: "linear-gradient(121deg, #e9907a 1%, #fac686 97%)",
    height:"635px"
  }}>
      <Index/>

    </Grid>
  );
};


export default backindex;