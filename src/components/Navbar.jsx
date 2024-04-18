import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const Navbar = ({ handleCart, orderLen }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'black'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Pizza place
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/order" color="inherit">
          Order
        </Button>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


