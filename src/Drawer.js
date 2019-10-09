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
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import BARBG from "./Images/BARBG.jpg"
import HideOnScroll from "./HideOnScroll";
import Sid from "./Contibuters/Sid"
import Rahul from "./Contibuters/Rahul"
import Footer from "./Footer";
import database from './fbase.js';

var request = require('request');
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

  var initcurLang=7;
  var initlanguage = "Python3";
  var initCode = "print(\"Hello World\")";
  var inithelper = "OUTPUT HERE";
  var initInput = "";
  var initOutput="";
  const langList = [
    "C (GCC 6.3)",
    "C++14 (GCC 6.3)",
    "C# (GMCS 4.6.2)",
    "Java (HotSpot 8u112)",
    "Perl (5.24.1)",
    "PHP (7.1.0)",
    "Python (Cpython 2.7.13)",
    "Python3 (Python 3.6)",
    "Scala (Scala 2.12.1)",
    "Ruby (Ruby 2.3.3)",
    "NODEJS (Node 7.4.0)",
    "GO (GO 1.7.4)",
    "BASH (Bash 4.4.5)",
    "RUST (Rust 1.14.0)"
  ];
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [language, setLanguage] = React.useState(initlanguage);
  const [code, setCode] = React.useState(initCode);
  const [input, setInput] = React.useState(initInput);
  const [output, setOutput] = React.useState(initOutput);
  const [inputAllowed , setInputPermission] = React.useState(false);
  const url = 'https://www.codechef.com/api/ide/run/all';
  const langCode=[11,44,27,10,3,29,4,116,39,17,56,114,28,93];
  const [curLang , setCurLang] = React.useState(initcurLang);
  const [helperOut , changeHelperOut] = React.useState(inithelper);
  const [shared,setShared] = React.useState("");
  var tcode=code;
  var tinput=input;
  const [lastRun, setLastRun] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(()=>{
    if(window.location.href.includes('?shared='))
  {
    var tstamp = window.location.href
    .substring(window.location.href
      .indexOf('?shared=')+'?shared='.length);
    //console.log(tstamp);
    database.child(tstamp).once('value',(snap)=>{
      if(snap.exists());
      else
      {
        alert('INVALID SHARE URL');
        return;
      }
      var nsnap = snap.val();
      //console.log(nsnap);
      setLanguage(nsnap.codeLang);
      //console.log(nsnap.codeLang);
      setCurLang(Number(nsnap.lang));
      //console.log(Number(nsnap.lang));
      setCode(decodeURI(nsnap.code));
      //console.log(decodeURI(nsnap.code));
      changeHelperOut(decodeURI(nsnap.helper));
      //console.log(decodeURI(nsnap.helper));
      setInput(decodeURI(nsnap.input));
      //console.log(decodeURI(nsnap.input));
      setOutput(decodeURI(nsnap.output));
      //console.log(decodeURI(nsnap.output));
      setLoading(false);
    });
  }
  else
  {
    setLoading(false);
  }
  },[]);

//Loader.js
const ColorCircularProgress = withStyles({
  root: {
    color: '#00695c',
  },
})(CircularProgress);
const useStylesPB = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
function CustomizedProgressBars() {
  const classes = useStylesPB();

  return (
    <div className={classes.root} style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
      <ColorCircularProgress size={120} thickness={0.9} />
    </div>
  );
} 


  //Input.js
  const useStylesInput = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  function Input() {
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
      
      function editCode(event)
      {
        tcode=event.target.value;
        setValues(tcode);
      }
    
      return (
        <form className={classes.root} noValidate >
        <TextField
        id="outlined-multiline-flexible"
        label="Code"
        multiline
        rowsMax="500"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={values.multiline}
        onChange={editCode}
        className={classes.textField}
        margin="normal"
        helperText="Input The Code Here"
        variant="outlined"
      ></TextField>
        </form>
      );
    }
    //Funtion Button.js
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

    function FunButtons() {
      function handleInputChange()
      {
        setState();
        setInputPermission(!inputAllowed);
      }
      function setState()
      {
        setCode(tcode);
        setInput(tinput);
      }
      function handleCompile()
      {
        //console.log(lastRun,Date.now());
        if(Date.now()<5000+lastRun)
        {
          alert("5 seconds pause required between two consecutive compilations");
          return;
        }
        setLastRun(Date.now());
        setState();
        setLoading(true);
        var options = {
          method: 'POST',
          url: 'https://cors-grayhat.herokuapp.com/'+url,
          headers : {
            'Origin': 'https://www.codechef.com'
          },
          form:
          {
            sourceCode: tcode,
              language: langCode[curLang],
              input: tinput
          }
      };
      request(options, (error, response, body)=> {
        if (error){
        alert("Server Error in handleCompile");
        setLoading(false);
      return;} ;
        var resp=JSON.parse(body);
        var timestamp=resp.timestamp;
        var cond=false;
        var codeCompile;
        function FetchCode()
        {
          var Noptions = {
            method: 'GET',
            url: 'https://cors-grayhat.herokuapp.com/'+url,
            headers : {
              'Origin': 'https://www.codechef.com'
            },
            qs: { timestamp: timestamp }
          }
          request(Noptions,(errorr,responses,bodyy)=>
        {
          if(errorr){alert("Server error in FetchCode");
          cond=true;return;}
          var respp=JSON.parse(bodyy);
          var status=respp.status;
          var codestatus = respp.code_status;
          if(codestatus == "0" && status == "OK")
          {
            cond=true;
            var meta=
            {
              time : respp.time,
              memory : parseFloat(""+respp.memory)/1000,
              output : respp.output,
              stderr : respp.stderr,
              cmpinfo : respp.cmpinfo
            }
            var outPut="";
            if(meta.cmpinfo!="")
            {
              outPut="Compile Time Error : "+meta.cmpinfo+"\n\n";
            }
            if(meta.stderr!="")
            {
              outPut+="Run Time Error : "+meta.stderr+"\n\n";
            }
            var help="";
            help+="TIME TAKEN : "+meta.time+" sec , ";
            help+="MEMORY USED : "+meta.memory+" kB \n";
            outPut+=meta.output;
            setLoading(false);
            changeHelperOut(help);
            setOutput(outPut);
            setInput(tinput);
          }
          if(cond==true)
          {
            clearInterval(codeCompile);
          }
        });
      }
      codeCompile = setInterval(FetchCode,2000);
    });
      }
      function handleShare()
      {
        var stamp=Date.now();
        var cde=encodeURI(code);
        var inppt=encodeURI(input);
        var ot=encodeURI(output);
        var helout = encodeURI(helperOut);
        var p=`{"${stamp}" : {"code" : "${cde}","input" : "${inppt}","output" : "${ot}","helper" : "${helout}", "lang" : "${curLang}", "codeLang" : "${language}", "created" : "${new Date()}"}}`;
        //console.log(p);
        var q=JSON.parse(p);
        database.update(q,(a)=>{
          if(a)
          {
            alert("Some Error Occured");
            return;
          }
          setShared("https://grayhat12.github.io/compiler?shared="+stamp);
        });
      }
      const classes = useStylesFun();
      return (
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleCompile}>
            COMPILE AND RUN &nbsp;  &nbsp;
            <SendIcon className={clsx(classes.RightIcon, classes.iconSmall)} />
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleShare}>
            SAVE-SHARE &nbsp;  &nbsp;
            <ShareIcon className={clsx(classes.RightIcon, classes.iconSmall)} />
          </Button>
    &nbsp; &nbsp;&nbsp;
          <FormControlLabel
            control={
              <Switch 
                checked={inputAllowed}
                onChange={handleInputChange}
                value="checkedB"
                color="primary"
              />
            }
            label="Input Field"
          />
          <p></p>
          <a target="_blank" rel="nofollow" href={shared}>{shared}</a>
        </div>
      );
    }

    const classes = useStylesInput();
  
    return (
      <div >
        <Paper className={classes.root} style={{backgroundColor:"WHITE" }}>
          <Typography variant="h5" component="h3" style={{color: 'BLACK'}}>
           {language.toUpperCase()} Code Here  
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
  //End Input.js

  //Output.js
  const useStylesOutput = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

  function Output() {
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
    
      return (
        <form className={classes.root} noValidate>
         
          <CssTextFieldOR
            InputLabelProps={{ shrink: true }}
            className={classes.margin}
            label="Output"
            multiline
            fullWidth
            margin="normal"
            helperText={helperOut}
            value={output}
            disabled="true"
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
      const [values, setValues] = React.useState({
      
        multiline: input,
       
      });
      function handleInputChange(event)
      {
        tinput=event.target.value;
        setValues(tinput);
      }
    
      return (
        <form className={classes.root} noValidate >
         
          <CssTextFieldOutput 
            className={classes.margin}
            label="Input"
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
            multiline
            value = {values.multiline}
            disabled={!inputAllowed}
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
        <Paper className={classes.root} style={{backgroundColor:"WHITE"}}>
          <Typography variant="h5" component="h3" style={{color: 'BLACK'}}>
  
           COMPILATION AND RUNTIME SCREEN
           
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
  //End Output.js

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  function handleLanguageToogle(text,index) {
    setCurLang(index);
    if (text == "C (GCC 6.3)") {
      setCode("#include <stdio.h>\n\nint main(void){\n\tprintf(\"Hello World\");\n\treturn 0;\n}");
    }
    else if (text == "C++14 (GCC 6.3)") {
      setCode("#include <iostream.h>\n\nint main(void){\n\tcout << \"Hello World\";\n\treturn 0;\n}");
    }
    else if (text == "C# (GMCS 4.6.2)") {
      setCode("using System;\nnamespace HelloWorldApp {\n\tclass Gray {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine(\"Hello World!\");\n\t\t\tConsole.ReadKey();\n\t\t}\n\t}\n}");
    }
    else if (text == "Java (HotSpot 8u112)") {
      setCode("//file will be saved as Main.java. Name main class accordingly\npublic class Main{\n\tpublic static void main(String args[]){\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}");
    }
    else if (text == "Perl (5.24.1)") {
      setCode("use strict;\nuse warnings;\nprint(\"Hello World\\n\");");
    }
    else if (text == "PHP (7.1.0)") {
      setCode("<?php\necho \"Hello, world!\";\n?>");
    }
    else if (text == "Python (Cpython 2.7.13)") {
      setCode("print \"Hello World\"");
    }
    else if (text == "Python3 (Python 3.6)") {
      setCode("print(\"Hello World\")");
    }
    else if (text == "Scala (Scala 2.12.1)") {
      setCode("object Gray\n{\n\tdef main(args: Array[String])\n\t{\n\t\tprintln(\"Hello World!\")\n\t}\n}");
    }
    else if(text == "Ruby (Ruby 2.3.3)")
    {
      setCode("puts \'Hello world\'");
    }
    else if (text == "NODEJS (Node 7.4.0)") {
      setCode("console.log(\"Hello World\");");
    }
    else if (text == "GO (GO 1.7.4)") {
      setCode("package main\nimport \"fmt\"\n\nfunc main(){\n\t// your code goes here\n}");
    }
    else if(text == "BASH (Bash 4.4.5)")
    {
      setCode("echo \"Hello World\"");
    }
    else if(text == "RUST (Rust 1.14.0)")
    {
      setCode("fn main() {\n\tprintln!(\"Hello World!\");\n}");
    }
    setLanguage(text);
  }

  const drawer = (
    <div style={{ backgroundColor: "#424242" }}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {langList.map((text, index) => (
          <ListItem onClick={() => handleLanguageToogle(text,index)} button key={text} style={{ color: 'White' }}>
            <ListItemIcon>
              {<img src={require(`./newIcons/${text.split(' ')[0]}.png`)} width="25" height="25" alt={text} />}
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

  if(loading)
  {
    return (<CustomizedProgressBars/>)
  }
  else{
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
              anchor={theme.direction == 'rtl' ? 'right' : 'left'}
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
              <h2 style={{ color: 'White' }} >
                Powered by GrayHat's Backend Scripts
        </h2>
            </div>
          </Typography>
          <br />
          <br />
          <div>
            <Input />

            <br />  <br />
            <Output />


            <Footer />
          </div>
        </main>
      </div>
    </div>

  );
}
}


export default ResponsiveDrawer;
