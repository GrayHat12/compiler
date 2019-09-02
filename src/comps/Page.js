import React, { Component } from 'react';
//import { CardElement, injectStripe } from 'react-stripe-elements';
var request = require('request');

class Page extends Component {

    state = {
        lang: ['Python3', 'Python', 'Cpp', 'Cpp14', 'C#', 'C', 'PHP', 'Scala', 'Java', 'Perl'],
        current: 0,
        code: "print(\"Hello World\")",
        input: "",
        output: "",
        meta: {},
        url: 'https://ide.geeksforgeeks.org/main.php',
        headers:
        {
            'Accept-Encoding': 'gzip, deflate',
            Host: 'ide.geeksforgeeks.org',
            Accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    constructor() {
        super();
        this.clickedPy3 = this.clickedPy3.bind(this);
        this.clickedPy = this.clickedPy.bind(this);
        this.clickedCpp = this.clickedCpp.bind(this);
        this.clickedC14 = this.clickedC14.bind(this);
        this.clickedCh = this.clickedCh.bind(this);
        this.clickedC = this.clickedC.bind(this);
        this.clickedPhp = this.clickedPhp.bind(this);
        this.clickedScala = this.clickedScala.bind(this);
        this.clickedJava = this.clickedJava.bind(this);
        this.clickedPerl = this.clickedPerl.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.run = this.run.bind(this);
    }

    updateCode(events) {
        this.setState({
            code: events.target.value
        });
    }

    updateInput(events) {
        this.setState({
            input: events.target.value
        });
    }

    clickedPy3() {
        this.setState({
            current: 0
        });
    }
    clickedPy() {
        this.setState({
            current: 1
        });
    }
    clickedCpp() {
        this.setState({
            current: 2
        });
    }
    clickedC14() {
        this.setState({
            current: 3
        });
    }
    clickedCh() {
        this.setState({
            current: 4
        });
    }
    clickedC() {
        this.setState({
            current: 5
        });
    }
    clickedPhp() {
        this.setState({
            current: 6
        });
    }
    clickedScala() {
        this.setState({
            current: 7
        });
    }
    clickedJava() {
        this.setState({
            current: 8
        });
    }
    clickedPerl() {
        this.setState({
            current: 9
        });
    }
    run() {
        var options = {
            method: 'POST',
            url: this.state.url,
            headers:this.state.headers,
            form:
            {
                lang: this.state.lang[this.state.current],
                code: this.state.code,
                input: this.state.input,
                save: 'false'
            }
        };
        console.log(options);
        request(options, (error, response, body)=> {
            if (error) console.log(error);
            console.log(body);
            var resp=JSON.parse(body);
            var output=resp.output;
            var meta = {
                valid : resp.valid,
                time : resp.time,
                compResult : resp.compResult,
                rntError : resp.rntError,
                cmpError : resp.cmpError,
                id : resp.id,
                memory : resp.memory,
                lxcOutput : resp.lxcOutput,
                hash : resp.hash
            }
            if(meta.cmpError==''){}else{
                output+='\nCOMPILE TIME ERROR :\n'+meta.cmpError;
            }
            if(meta.rntError==''){}else{
                output+='\nRUN TIME ERROR :\n'+meta.rntError;
            }
            this.setState(
                {
                    output : output,
                    meta : meta
                }
            );
        });
    }
    render() {
        return (
            <div>
                <textarea id="gcode" onChange={this.updateCode} value={this.state.code}/>
                <br/>
                <textarea id="ginput" onChange={this.updateInput} value={this.state.input}/>
                <br/>
                <textarea id="output" value={this.state.output}/>
                <br/>
                <textarea id="meta" value={JSON.stringify(this.state.meta)}/>
                <br/>
                <button name="run" value="RUN" onClick={this.run}>RuN</button>
            </div>
        );
    }
}

export default Page;