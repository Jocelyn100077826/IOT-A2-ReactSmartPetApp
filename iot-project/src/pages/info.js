import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';

import Grid from '@material-ui/core/Grid';
import Demo from '../components/Chart';
import Paper from '@material-ui/core/Paper';

class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          feedlog: "",
          item: 0,
        };
      }

      componentDidMount() {
          fetch('http://192.168.0.102:8080/?petapp=averageFeeding', {
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
              })
              .catch(e=>{
                  console.log(e);
                  return e;
              })
      }


    render() {

        return (
            <div >
                <Paper style={{padding: "5px"}}>
                    <Demo/>
                </Paper>
                <Grid
                direction="column"
                alignItems="center"
                justify="center"
                style={{ padding: "0"}}
                >
                    <Grid item xs={12}>
                        Average of all feedings per day: {this.state.item}
                    </Grid>
                    <Grid item xs={12}>
                        <Button size="large" variant="contained" component={Link} to="/home" color="primary"  style={{ width: "100%" , marginTop: "5px"}}>
                            Back to Main
                        </Button>
                    </Grid> 
               
                </Grid>
            </div>
        )
    }
}

export default info