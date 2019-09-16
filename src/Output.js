import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStylesOutput = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Output() {
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
  function OutputResult() {
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
  const classes = useStylesOutput();
  const CssTextFieldOutput = withStyles({
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
  function InputTextField() {
    const classes = useStylesITF();
  
    return (
      <form className={classes.root} noValidate >
       
        <CssTextFieldOutput 
          className={classes.margin}
          label="Input"
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
          id="custom-css-outlined-input"
        />
      
      </form>
    );
  }

  return (
    <div>
      <Paper className={classes.root} style={{backgroundColor:"#f5f5f5"}}>
        <Typography variant="h5" component="h3" style={{color: 'Black'}}>

         Output
         
         <InputTextField/>
        <OutputResult/>
          <br/>
        </Typography>
        <Typography component="p">
        

        </Typography>
      </Paper>
    </div>
  );
}