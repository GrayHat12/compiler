import React ,  { Fragment }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Code from "./Code"
import FunButtons from "./FunButtons"
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

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