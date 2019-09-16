import React, { Component } from "react";
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


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


const useStyles = makeStyles(theme => ({
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

export default function Code(props) {
  const classes = useStyles();


  const [values, setValues] = React.useState({
  
    multiline: props.language,
   
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