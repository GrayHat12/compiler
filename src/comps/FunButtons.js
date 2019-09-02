import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
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

export default function IconLabelButtons() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Compile &nbsp;  &nbsp;   
         {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <SendIcon className={clsx(classes.RightIcon, classes.iconSmall)} />
      </Button>
      <Button variant="contained" color="default" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
&nbsp; &nbsp;&nbsp;
      <FormControlLabel
        control={
          <Switch 
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
        
          />
        }
        label="Input Field"
      />
    

        
    </div>
  );
}