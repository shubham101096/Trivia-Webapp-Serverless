import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer } from '@mui/material';
import { AccountCircle, Notifications } from '@mui/icons-material';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="static" style={{ background: 'green' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="notifications" onClick={handleNotificationClick}>
                        <Notifications />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                        Trivia Titans
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="profile" onClick={handleMenuOpen}>
                        <AccountCircle />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            
            <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
                {/* Content of the notifications tray */}
                <Typography variant="h6" style={{ padding: '16px' }}>
                    Notifications Tray
                </Typography>
            </Drawer>
        </>
    );
}

export default Navbar;