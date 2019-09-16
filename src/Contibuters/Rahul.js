import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Github from "../Images/GitHub.png"
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.3, 1),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} style={{backgroundColor:"lightgray"}}>
        <Typography variant="h5" component="h3">
          Back-End  <img src={Github} width = "25" height = "25"/>
        </Typography>
        <Typography component="p" a href = "https://Github.com/GrayHat12">
          GrayHat &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      </Paper>
    </div>
  );
}