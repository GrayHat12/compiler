import React, { Component } from 'react';
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
import {  withStyles, withTheme } from "@material-ui/core/styles";
import "./styles.css";
import Output from "./Output"
import Input from "./Input.js"
import BARBG from "./Images/BARBG.jpg"
import HideOnScroll from "./HideOnScroll";
import Sid from "./Contibuters/Sid"
import Rahul from "./Contibuters/Rahul"
import Footer from "./Footer"

const drawerWidth = 240;
const useStyles = withStyles(theme => ({
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

class Drawerr extends Component {

    state = {
        mobileOpen: false,
        props : null
    }

    constructor(props)
    {
        super(props);
        this.setState({props:props});
        this.setMobileOpen = this.setMobileOpen.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    setMobileOpen(bool) {
        this.setState({ mobileOpen: bool });
    }

    handleDrawerToggle() {
        if(this.state.mobileOpen==true)
        {
            this.setMobileOpen(false);
        }
        else
        {
            this.setMobileOpen(true);
        }
    }

    render() {
        const classes = useStyles(this);
        const theme = withTheme(this);
        const { container } = this.props;

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
                        <ListItem onClick={() => localStorage.setItem("lang", text)} button key={text} style={{ color: 'White' }}>>
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
                <AppBar position="fixed" colour="red" className={classes.appBar} style={{ background: '#536dfe', boxShadow: 'none'}}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={this.handleDrawerToggle}
                      className={classes.menuButton}
                    >
        
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                      Gray_Compiler
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
                      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                      open={this.state.mobileOpen}
                      onClose={this.handleDrawerToggle}
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
                    <Input />
        
                    <br />  <br />
                    <Output />
        
        
                  <Footer/>
                  </div>
                </main>
              </div>
            </div>
        
          );

    }
}

export default Drawerr;