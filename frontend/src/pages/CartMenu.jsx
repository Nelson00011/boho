//TODO BOX into components section <BoxItem /> 
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../state";
import { useNavigate } from "react-router-dom";
//CSS Modules
import classes from './CartMenu.module.css';


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);


    return (
    <Box display={isCartOpen? "block" : 'none'} >
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
                                <img
                                    alt={item?.name}
                                    width="123px"
                                    height="164px"
                                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                />
                                </Box>
                                <Box flex='1 1 60%'>

                                { /* ITEM NAME */}
                                    <Flexbox mb='5px'>
                                        <Typography fontweight="bold">
                                            {item.attributes.name}
                                        </Typography>
                                            <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Flexbox>
                                    <Typography>{item.attributes.shortDescription}</Typography>

                                    { /* AMOUNT */}
                                    <Flexbox m="15p 0">
                                        <Box display='flex'
                                        alignItems="center"
                                        border={`1.5px solid ${shades.neutral[500]}`}>
                                            <IconButton
                                                onClick={() => dispatch(decreaseCount({ id: item.id }))}
                                                >
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography>{item.count}</Typography>
                                            <IconButton
                                                onClick={() => dispatch(increaseCount({ id: item.id }))}
                                                >
                                                <AddIcon />
                                            </IconButton>
                                        </Box>

                                        { /* PRICE */}
                                    <Typography fontWeight="bold">${item.attributes.price}</Typography>
                                
                                    </Flexbox>

                                 </Box>
                            </FlexBox>
                            <Divider />
                        </Box>
                    ))};
                </Box>

                { /* ACTIONS  */ }
                <Box m="20px 0">
                    <Flexbox m='20px 0'>
                        <Typography fontWeight='bold'>SubTotal</Typography>
                        <Typography frontWeight='bold'>${totalPrice}</Typography>
                    </Flexbox>
                    <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>

                </Box>
            </Box>
        </Box>
    </Box>
        )
}

export default CartMenu;