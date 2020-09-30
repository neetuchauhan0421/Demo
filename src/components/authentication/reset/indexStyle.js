import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
export const theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  });

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height:"100%",
  },
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
    paper: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height:'50vh',
      padding: theme.spacing(5),
    },
    heading:{
      width: "170px",
      height: "38px",
      color:'#5E6C84',
        textAlign:'center',
        fontFamily:"Jost"
    },
    formgrid:{
        margin:theme.spacing(1),
    },
    label:{
        marginBottom:theme.spacing(1),
    },
    button: {
        backgroundColor:'#f69e7a',
        marginTop:theme.spacing(1),
        "&:hover": {
            backgroundColor:fade('#f69e7a', 0.75),
        }
      },
    
  }));

  export default useStyles;