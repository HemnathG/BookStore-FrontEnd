import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#c92c24ec"}}>
        <Toolbar>
          <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 100}} color="black">
            Welcome to the Book-Store Admin Page
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
