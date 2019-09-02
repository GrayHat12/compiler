import React ,  { Fragment }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import OutputResult from "./OutputResult"
import InputTextField from "./InputTextField.js"
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

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