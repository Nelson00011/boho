//TODO individual components
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from './../theme';
import { addToCart } from '../state';
import { useNavigate } from 'react-router-dom';

import classes from './Item.module.css';


const Item = ({ item, width }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState();
    const [isHovered, setIsHovered] = useState(false);
    const { pallette: {neutral},
    } = useTheme();

    const { category, price, name, image } = item.attributes;

    const {
        data: {
            attributes: {
                formates: {
                    medium: { url },
                }
            }
        }
    } = image;

    return (
        <Box width={width}>
            <Box position="relative" 
            onMouseOver={()=> setIsHovered(true)}
            onMouseOut={()=> setIsHovered(false)}>
            
            <img 
            alt={item.name}
            src={`http://localhost:1337${url}`}
            className={classes.image}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{ cursor: 'pointer' }}

            />
            <Box
            display={isHovered ? "block" : "none"}
            position="abolute"
            bottom="10%"
            padding=" 0 5%"
            >
                <Box
                display='flex'
                justifyContent='space-between'
                >
                <Box display='flex' alignItems='center' borderRadius='3px' backgroundColor={shades.neutral[100]}>
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography color={shades.primary[300]}>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                </IconButton>

                {/* BUTTON */ }
                <Button onClick={()=> {dispatch(addToCart({ item: [...item, count ]}));
                    }}
                    sx={{ backgroundColor: shades.primary[300], color: "white"}}>

                </Button>
                </Box>
                </Box>
            </Box>
        </Box>

        <Box mt="3px">
             <Typography variant='subtitle2' color={neutral.dark}>
             {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
             </Typography>
            <Typography>
                {name}
            </Typography>
            <Typography fontweight="bold">
                ${price}
            </Typography>
        </Box>
    </Box>
    )

//Final Bracket
}

export default Item;