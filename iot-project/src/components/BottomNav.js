import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
  
  class BottomNav extends Component {

    render(){
        return (
            <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
                
            <CssBaseline />
                <BottomNavigation>
                <BottomNavigationAction label="Recents" value="recents" component={Link} to="/" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" component={Link} to="/home" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" component={Link} to="/info" icon={<RestoreIcon />} />
                </BottomNavigation>
            </AppBar>
          );
    }
  }

  export default BottomNav;