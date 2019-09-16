import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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


const useStylesITF = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
   
    margin: theme.spacing(1),
  },
}));

export default function ProductInput1() {
  const classes = useStylesITF();

  return (
    <form className={classes.root} noValidate >
     
      <CssTextField 
        className={classes.margin}
        label="Input"
        fullWidth
        margin="normal"
        variant="outlined"
        id="custom-css-outlined-input"
      />
    
    </form>
  );
}