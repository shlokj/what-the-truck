import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Button, 
    Stack, 
    Typography, 
    Box} from "@mui/material"
import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <AppBar position="static" align="right" sx ={{ height: "80%" }}>
            <Toolbar variant="dense">
                <IconButton size="small" edge="start" color="inherit">
                    <Typography>what the truck</Typography>
                </IconButton>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                </Typography>
                <Stack direction="row" spacing={5}>
                        <Button variant="outlined" color="inherit"> home </Button>
                        <Button variant="outlined" color="inherit"> food trucks </Button>
                        <Button variant="outlined" color="inherit"> log out </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}