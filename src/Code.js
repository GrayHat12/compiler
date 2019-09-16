import React from "react";
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';


const useStylesCode = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
   
    margin: theme.spacing(1),
  },
}));

export default function Code() {
  const classes = useStylesCode();


  const [values, setValues] = React.useState({
  
    multiline: code,
   
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