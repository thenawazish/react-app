import React from 'react';
import { Typography, AppBar, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Work } from '@material-ui/icons';

const App = () => {
    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Work />
                <Typography variant='h6'>
                    Business Class
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                   <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                       BUSINESS MEMBERSHIP
                   </Typography>
                </Container>
            </div>
            
        </main>   
        </>
    );
}

export default App;