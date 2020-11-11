
import React from 'react';
import Projects from "./Projects.jsx";
import Agency from "./Agency";
import Contact from "./Contact.jsx";
import { Link, BrowserRouter, Route } from "react-router-dom";
import { RemoveCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
      
    },
    title: {
      flexGrow: 1,
    
    },
  }));
  

 function Navbar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
          
            const handleChange = (event) => {
              setAuth(event.target.checked);
            };
          
            const handleMenu = (event) => {
              setAnchorEl(event.currentTarget);
            };
          
            const handleClose = () => {
              setAnchorEl(null);
            };
          
            return (
                
              <div className={classes.root}>
                <AppBar color="primary" position="static">
                  <Toolbar>
                 <Typography  className={classes.title}>
                <img src="./images/Logois.svg" alt="Logo Image" className="logo" />
                  </Typography>
            <div>
              <IconButton
                edge="start" className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
                  </Toolbar>
                </AppBar>



              </div>


     );
}
 
export default Navbar;




/* <BrowserRouter>
      <div className="Logo">
        <img src="./images/Logois.svg" alt="Logo Image" className="logo" />
      </div>
      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">
            Projects
          </Link>
          <Link to="/Agency" className="item">
            Agency
          </Link>
          <Link to="/Contact" className="item">
            Contact
          </Link>
        </div>
      </div>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/Agency" component={Agency} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter> */ 