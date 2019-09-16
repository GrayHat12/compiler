import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextFieldOR = withStyles({
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

const useStylesOR = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
   
    margin: theme.spacing(1),
  },
}));


export default function ProductInput1() {
  const classes = useStylesOR();


  const [values, setValues] = React.useState({
  
    multiline: '',
   
  });

  return (
    <form className={classes.root} noValidate>
     
      <CssTextFieldOR
        className={classes.margin}
        label="Output"
        multiline
        fullWidth
        margin="normal"
        value={values.multiline}
        InputProps={{
            readOnly: true,
          }}
        variant="outlined"
        id="custom-css-outlined-input"
      />
    
    </form>
  );
}