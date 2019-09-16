import React ,  { Fragment }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
//import Code from "./Code"
import FunButtons from "./FunButtons"
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));



function PaperSheet(props) {
  const classes = useStyles();
  return (
    <div >
      <Paper className={classes.root} style={{backgroundColor:"#f5f5f5"}}>
        <Typography variant="h5" component="h3" style={{color: 'Black'}}>
         {language} Code Here  
<br/>
         <FunButtons/>
        <Code />
          <br/>
        </Typography>
        <Typography component="p">
        

        </Typography>
      </Paper>
    </div>
  );
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'Bl',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'gray',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'light-green',
      },
    },
  },
})(TextField);

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 9,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 20,
    width: '',
    padding: '6px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);


const useStyless = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
   
    margin: theme.spacing(1),
  },
}));


const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff4400', }
  },
});

function Code() {
  const classes = useStyless();


  const [values, setValues] = React.useState({
  
    multiline: '',
   
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate>
     
    <TextField
    
    className={classes.margin}
    id="outlined-multiline-flexible"
    label="Multiline"
    multiline
    rowsMax="500"
    fullWidth
    value={values.multiline}
    onChange={handleChange('multiline')}
    className={classes.textField}
    margin="normal"
    helperText="PRESENT ON ./CODE YOU CAN CHANGE THIS BASED ON LANGUAGE SELCTED OR REMOVE IT BY DELETING THIS LINE"
    variant="outlined"
  />
    
    </form>
  );
}