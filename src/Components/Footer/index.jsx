import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: "blanchedalmond",
        color: "black",
      }}
    >
      <Toolbar>
        <Typography variant="body" align="center" sx={{ flexGrow: 1 }}>
          &copy; Esraa Obeido 2023
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
