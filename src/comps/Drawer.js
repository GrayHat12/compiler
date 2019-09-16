import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./styles.css";
//import Output from "./Output"
//import Input from "./Input.js"
import Paper from '@material-ui/core/Paper';
import { fade, withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import BARBG from "./Images/BARBG.jpg"
import HideOnScroll from "./HideOnScroll";
import Sid from "./Contibuters/Sid"
import Rahul from "./Contibuters/Rahul"
import Footer from "./Footer"

import FunButtons from "./FunButtons"
const useStylesss = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
    ,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }


}));

function ResponsiveDrawer(props) {
  var [language, setLanguage] = React.useState('Python3');
  var [code, setCode] = React.useState('print(\"Hello World\")');
  var [input, setInput] = React.useState('');

  function PaperSheet() {
    const classes = useStylesss();
    return (
      <div >
        <Paper className={classes.root} style={{ backgroundColor: "#f5f5f5" }}>
          <Typography variant="h5" component="h3" style={{ color: 'Black' }}>
            {language} Code Here
<br />
            <FunButtons />
            <Code />
            <br />
          </Typography>
          <Typography component="p">


          </Typography>
        </Paper>
      </div>
    );
  }

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

  const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 9,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 20,
      width: '',
      padding: '6px 6px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);


  const useStyless = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {

      margin: theme.spacing(1),
    },
  }));


  const theme = createMuiTheme({
    palette: {
      primary: { main: '#ff4400', }
    },
  });

  function Code() {
    const classes = useStyless();


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

  const CssTextFieldd = withStyles({
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


  const useStylesS = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {

      margin: theme.spacing(1),
    },
  }));


  function ProductInput1() {
    const classes = useStylesS();

    return (
      <form className={classes.root} noValidate >

        <CssTextFieldd
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

  const { container } = props;
  const classes = useStyles();
  const themee = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div style={{ backgroundColor: "#424242" }}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          "C",
          "C++",
          "C++14",
          "C#",
          "Java",
          "Perl",
          "PHP",
          "Python",
          "Python3",
          "Scala"

        ].map((text, index) => (
          <ListItem onClick={() => setLanguage(text)} button key={text} style={{ color: 'White' }}>>
            <ListItemIcon>
              {<img src={require(`./newIcons/${text}.png`)} width="25" height="25" />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/*  <div img src = {Github}>  */}
        {[<Sid />, <Rahul />].map((text, index) => (
          <ListItem button key={""}>

            {<a href={(index == 0) ? "https://github.com/Sidm9" : "https://github.com/GrayHat12"}>{text}</a>}
            <ListItemText primary={""} />

          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <div style={{ background: "url(" + BARBG + ")" }} >
      <div className={classes.root} >
        <CssBaseline />
        <HideOnScroll threshold={400}>
          <AppBar position="fixed" colour="red" className={classes.appBar} style={{ background: '#536dfe', boxShadow: 'none' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >

                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Gray Compiler
          </Typography>
              <div style={{ justifyContent: 'right' }} >

              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={themee.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography variant="h5" align="center" >
            <div >
              <h1 style={{ color: 'White' }}>
                Gray Compiler
        <br />
                <h2 style={{ color: 'White' }} >
                  Powered by GrayHat's Backend Scripts
        </h2>
              </h1>
            </div>
          </Typography>
          <br />
          <br />
          <div>
            <PaperSheet key={language} />

            <br />  <br />
            <Output />


            <Footer />
          </div>
        </main>
      </div>
    </div>

  );
}


export default ResponsiveDrawer;
