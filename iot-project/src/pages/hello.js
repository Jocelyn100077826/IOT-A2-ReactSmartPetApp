import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';

class hello extends Component {
    render() {
        const style ={
            width: "200px"
        }
        return (
            <div>
                <Paper>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ paddingBottom: "75px", paddingTop: "75px"}}
                        >
                        <Grid item xs={12}>
                            
                                <img src='https://image.freepik.com/free-vector/cartoon-character-cute-jack-russell-terrier-dog_52569-1022.jpg' alt="Pup Logo" style={style}></img>
                                
                        </Grid> 
                        <Grid item xs={12}>
                            <Typography variant="h5" color="primary" gutterBottom>
                                 Smart Pet Feeder (Alpha)
                            </Typography>
                        </Grid> 

                        <Grid item xs={12}>
                            <Button size="large" variant="contained" component={Link} to="/home" color="primary"  style={{ width: "100%" , marginTop: "70px"}}>
                                Let's Go >
                            </Button>
                        </Grid> 

                    </Grid>
                    
                </Paper>
            </div>
        )
    }
}

export default hello