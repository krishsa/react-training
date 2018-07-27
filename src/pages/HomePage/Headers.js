import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import SenProfile from '../../images/profile.jpg';

export default class Header extends Component{
    styles = {
        root: {
            flexGrow: 1,
        },
        flex: {
            flexGrow: 1,
        },
        display: "flex",
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        avatar: {
            margin: 10,
            paddingLeft: "200px"
          }
    };

    render(){
        return(
            <div className={this.styles.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton className={this.styles.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={this.styles.flex}>
                    News
                </Typography>
                <Avatar alt="Remy Sharp" src={SenProfile} className={this.styles.avatar} />
                <Button  color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}