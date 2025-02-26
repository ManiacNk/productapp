//import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 3 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* Uncomment and use MenuIcon if needed */}
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ProductAPP
                    </Typography>
                    <Button component={Link} to="/addproduct" color="inherit" sx={{ textTransform: 'none' }}>
                        Add Product
                    </Button>
                    <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none' }}>
                        Home
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;