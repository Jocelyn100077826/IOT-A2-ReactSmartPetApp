import React, { Component } from 'react';
import Fullness from '../components/Fullness';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          msg: "",
          result:"error",
          feedlog: "",
          modal: false,
        };
      }

    render() {
          
        return (
            <div>
                <Grid
                
                direction="column"
                alignItems="center"
                justify="center"
                style={{ padding: "0", paddingTop: "25px"}}
                >
                <Grid item xs={12}>
                    <Paper style={{paddingTop: "25px", paddingBottom: "25px"}}>
                        <Fullness/>
                    </Paper>
                </Grid> 

                </Grid>
                    
            </div>
        )
    }
}

export default home;