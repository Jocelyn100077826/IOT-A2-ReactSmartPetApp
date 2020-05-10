import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import hello from './pages/hello';
import home from './pages/home';
import info from './pages/info';
import BottomNav from './components/BottomNav';



class App extends Component {
  render(){
   const style = {
      backgroundColor: "#f5f5f5",
      width: "100%",
      height: "100vh",
      padding: "0px",
      margin: "0px",
   };

    return (
      <div style={style} >
        <div style={{width: "90%", marginLeft: "auto", marginRight:"auto"}}>
        <Router>
          <Switch >
            <Route exact path="/" component={hello}/>
            
            <Route exact path="/home" component={home}/>
            
            <Route exact path="/info" component={info}/>
          </Switch>
          <BottomNav/>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
