//Pages
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//style
import { shades } from "../../theme";
import classes from '../NavBar.module.css';




function NavBar (){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Box className={classes.outterBox}>
            <Box className={classes.innerBox}>
                <Box onClick={() =>navigate('/')} className={classes.logo}>Boho Bag</Box>
                <Box className={classes.icons}>
                    <IconButton classname={classes.iconButton}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton classname={classes.iconButton}>
                        <PersonOutline />
                    </IconButton>
                    <IconButton classname={classes.iconButton}>
                        <ShoppingBagOutlined />
                    </IconButton>
                    <IconButton classname={classes.iconButton}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
};

export default NavBar;
