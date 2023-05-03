import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
//CSS Modules
import classes from '../CartMenu.module.css';

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);


    return (
    <Box display={isCartOpen? "block" : 'none'}
    className={classes.boxOne}>
        { /* MODAL */}
        <Box className={classes.boxTwo}>
            <Box className={classes.boxThree}>
            { /* HEADER */}
                <FlexBox mb='15px'>
                    <Typography varient="h3">Boho Bag Cart ({ cart.length })</Typography>
                    <IconButton onClick={ ()=> dispatch(setIsCartOpen({})) }>
                        <CloseIcon/>
                    </IconButton>
                </FlexBox>
                { /* CART LIST */}
                <Box>
                    {cart.map((item) => (
                        <Box key={`${item.attributes.name}-${item.id}`}>
                            <FlexBox p='15px 0'>
                                <Box flex='1 1 40%'>
                                    
                                </Box>
                            </FlexBox>
                        </Box>
                    ))};
                </Box>
            </Box>
        </Box>
    </Box>
        )
}

export default CartMenu;