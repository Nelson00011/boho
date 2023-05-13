//Pages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
//style
import { shades } from "../theme";
import classes from './NavBar.module.css';
import { setIsCartOpen } from '../state';


function NavBar (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [login, setLogin] = useState(false);
    //TODO HERE Auth() LOGO

    const loggedIn = <>
        <IconButton className={classes.iconButton}>
            <PersonOutline /> 
        </IconButton>
        <IconButton className={classes.iconButton}>
            <LogoutIcon /> 
        </IconButton>
        </>

    const loggedOut = <>
        <IconButton className={classes.iconButton}>
                <LoginIcon /> 
        </IconButton>
        </>
    
    return (
        <Box className={classes.outterBox}>
            <Box className={classes.innerBox}>
                <Box onClick={() =>navigate('/')} 
                    sx={{ "&:hover": { cursor: "pointer" } }}
                   color={shades.secondary[500]}>Boho Bag</Box>
                <Box className={classes.icons}>
                    <IconButton className={classes.iconButton}>
                        <SearchOutlined />
                    </IconButton>
                    {login ? loggedIn : loggedOut}
                     {/* LogIn Icon Test */}
                     
                     
                    <Badge
                        badgeContent={cart.length}
                        color="secondary"
                        invisible={cart.legth === 0}
                        sx={{
                            "& .MuiBadge-badge": {
                              right: 5,
                              top: 5,
                              padding: "0 4px",
                              height: "14px",
                              minWidth: "13px",
                            },
                          }}
                        >
                    <IconButton className={classes.iconButton} onClick={() => dispatch(setIsCartOpen({}))}>
                        <ShoppingBagOutlined />
                    </IconButton>
                    </Badge>
                    <IconButton className={classes.iconButton}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
};

export default NavBar;
