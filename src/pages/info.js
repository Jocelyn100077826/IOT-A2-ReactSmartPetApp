import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'react-router-dom/Link';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          feedlog: ""
        };
      }

    componentDidMount() {
        fetch('http://192.168.0.102:8080/?petapp=checkRecent', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then(result=>result.json())
            .then(feedlog=>{
                this.setState({feedlog: feedlog});
                console.log(feedlog)
            })
            .catch(e=>{
                console.log(e);
                return e;
            })
        }


    render() {
        function createData(id, data) {
            return { id, data };
          }


        var myarr = ["","","","",""];
        var rows = [
            createData("", myarr[0]),
            createData("", myarr[1]),
            createData("", myarr[2]),
            createData("", myarr[3]),
            createData("", myarr[4]),
          ];


        if (this.state.feedlog !== ""){
            rows = [
                createData("1", this.state.feedlog[0]),
                createData("2", this.state.feedlog[1]),
                createData("3", this.state.feedlog[2]),
                createData("4", this.state.feedlog[3]),
                createData("5", this.state.feedlog[4]),
              ];
        }
        

        return (
            <div style={{ padding: "0", paddingTop: "75px"}}>
                <Grid
                
                direction="column"
                alignItems="center"
                justify="center"
                style={{ padding: "0", paddingTop: "25px"}}
                >
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Date and Time</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.feedlog !== ""? rows.map((row) => (
                                    <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.data}</TableCell>
                                    </TableRow>
                                )): <p></p> }
                                </TableBody>
                            </Table>
                            {this.state.feedlog === ""? <LinearProgress style={{width: "100%"}} /> : <p></p>}
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <Button size="large" variant="contained" component={Link} to="/home" color="primary"  style={{ width: "100%" , marginTop: "70px"}}>
                            Back to Main
                        </Button>
                    </Grid> 
               
                </Grid>
            </div>
        )
    }
}

export default info