import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FunButtons from "./FunButtons"
const useStylesInput = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const useStylesCode = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
     
      margin: theme.spacing(1),
    },
  }));
  function Code() {
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
  const classes = useStylesInput();

  return (
    <div >
      <Paper className={classes.root} style={{backgroundColor:"#f5f5f5"}}>
        <Typography variant="h5" component="h3" style={{color: 'Black'}}>
         Code Here  
<br/>
         <FunButtons/>
        <Code/>
          <br/>
        </Typography>
        <Typography component="p">
        

        </Typography>
      </Paper>
    </div>
  );
}