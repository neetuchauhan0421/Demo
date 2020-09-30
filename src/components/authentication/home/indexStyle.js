import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
export const theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  });

// const useStyles = makeStyles((theme) => ({
  const useStyles = theme => ({

  cardroot: {
    display: 'flex',
    // padding:'2px',
    boxShadow: 'none',
    maxHeight:"450px",
  maxWidth:"850px",
    borderRadius: "50px",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  grid1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
  },
  email: {
    background: '#1f2438',
    color: 'white',
  },
  gmail: {
    background: '#fc5a5a',
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
height:"100%",
    // backgroundImage: "linear-gradient(121deg, #e9907a 1%, #fac686 97%)"
          
  },

  });

  export default useStyles;