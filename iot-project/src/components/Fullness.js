import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'react-router-dom/Link';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


class Fullness extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          item: null,
          msg: "",
          result:"error",
          feedlog: "",
          modal: false,
        };

        this.updateLastFeed = this.updateLastFeed.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
      }

    componentDidMount = () => {

        fetch('http://192.168.0.102:8080/?petapp=fullness', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then(result=>result.json())
            .then(item=>{
                this.setState({item: parseInt(item.message, 10) })
                console.log(item);
                this.updateLastFeed();
            })
            .catch(e=>{
                console.log(e);
                return e;
            })
        }
        
        handleActivate = () => {
            fetch('http://192.168.0.102:8080/?petapp=activateFeeder', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(result=>result.json())
            .then(data=>{
                console.log(data);
                this.setState({result: "success", msg:" Successfully Activated Feeder"})
                this.handleOpen(this);
            })
            .catch(e=>{
                console.log(e);
                this.setState({msg:"Failed Activated Feeder"})
                this.handleOpen(this);
                return e
            })
        }

        updateLastFeed = () => {
            fetch('http://192.168.0.102:8080/?petapp=lastFeed', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                })
            .then(result=>result.json())
            .then(feedlog=>this.setState({feedlog: feedlog.message}))
            .catch(e=>{
                console.log(e);
                return e;
            })
        }

        
        handleOpen = () => {
            this.setState({modal: true})
        };

        handleClose = () => {
            this.setState({modal: false})
        };
        
        handleCheck = () => {
            console.log("route");
        }



    render() {
        const fb = {
            zIndex: 1,
            position: 'absolute',
            paddingTop: "115px",
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }


        return (
            <div>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                >

                    <Grid item xs={12}>
                        <CircularProgress style={{zIndex: "1"}} size={250} thickness={2.1} variant="static" value={this.state.item}/>
                    </Grid> 
                    <Grid item xs={12} style={fb}>
                        <Typography align="justify" variant="h2" style={{paddingLeft: "5px", paddingTop: "5px"}}>
                            {this.state.item === null ? <CircularProgress/> : this.state.item + "%"}
                        </Typography>
                    </Grid> 
                    <Grid item xs={12}>
                        <div style={{ paddingLeft: "20px", paddingRight: "20px"}}>
                            <p>{this.state.feedlog === "" ? <LinearProgress /> : this.state.feedlog}</p>
                        </div>
                    </Grid> 
                    <Grid item xs={12}>
                        <Button size="large" onClick={this.handleActivate} variant="contained" color="primary"  style={{ width: "100%" , marginTop: "25px"}}>
                            Activate Feeder
                        </Button>
                    </Grid> 
                    <Grid item xs={12}>
                        <Button size="large" component={Link} to="/info"  onClick={this.handleCheck} variant="contained" style={{ width: "100%" , marginTop: "15px"}}>
                            Check Feeding Log
                        </Button>
                    </Grid> 
                    <Grid item xs={12}>
                    <Snackbar anchorOrigin={{vertical: 'top', horizontal:'center'}} open={this.state.modal} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.result}>
                            {this.state.msg}
                        </Alert>
                    </Snackbar>
                            
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Fullness;