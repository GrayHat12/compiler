import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStylesFun = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function FunButtons() {
  const classes = useStylesFun();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Compile &nbsp;  &nbsp;
        <SendIcon className={clsx(classes.RightIcon, classes.iconSmall)} />
      </Button>
&nbsp; &nbsp;&nbsp;
      <FormControlLabel
        control={
          <Switch 
            checked={true}
            onChange={console.log('label changed')}
            value="checkedB"
            color="primary"
          />
        }
        label="Input Field"
      />
    </div>
  );
}