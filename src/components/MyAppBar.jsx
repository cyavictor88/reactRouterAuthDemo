import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const MyAppBar = ({pages}) => {
  const navigate = useNavigate();
  const { userinfo, logoutfn } = useAuth();
  const [username, setusername] = React.useState("");

  React.useEffect(()=>{
    if(userinfo!=null && userinfo.username!=null)
      setusername(userinfo.username);
  },[userinfo]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        
        <Typography variant="h6" component="div" sx={{paddingRight:'100px'}}  >
            React Router Auth Demo
          </Typography>
          {pages?.map((page) => (
              <Button variant="contained"  color="secondary"
                key={page.label}
                 onClick={() => {navigate(page.path);}}
                sx={{ my: 0, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}

          <Box sx={{flexGrow:1}}></Box>

          {userinfo?


        <Button  variant="outlined" color="inherit" onClick={logoutfn} >Logout  {userinfo.username}</Button>:
        <></>}
          

        </Toolbar>
        
      </AppBar>
    </Box>
  );
}