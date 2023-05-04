import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from './Item';
import { setItems } from './../state';




const ShoppingList = () => {
    const dispatch = useDispatch();
    const[value, setValue] = useState('all')
    const items = useSelector((state)=> state.cart.items);
    console.log("TCL: ShoppingList -> items", items)
    
    const isNonMobile = useMediaQuery('(min-width:600px)');
    console.log("TCL: ShoppingList -> isNonMobile", isNonMobile)

    const handleChange = (event, newValue)=> {
        setValue(newValue);
    };

    //COMMENT: Call Strapi Backend:
    async function getItems(){
        const items = await fetch("http://localhost:1337/api/items?populate=image", 
        { method: "GET" })

        const itemsJSON = await items.json();
        dispatch(setItems(itemsJSON.data))
    }
    //COMMENT: 
    useEffect(()=> {
        getItems();
    }, [])

    //
    const topRatedItems = items.filter(
        (item) => item.attributes.category === 'topRated'
    );

    const newArrivalsItems = items.filter(
        (item) => item.attributes.category === 'newArrivals'
    );

    const bestSellersItems = items.filter(
        (item) => item.attributes.category === 'bestSellers'
    )




    return(
        <Box width="80%" margin='80px auto'>
            <Typography variant='h3' textAlign="center">
                Our Features <b>Products</b>
            </Typography>
            <Tabs
            textColor='primary'
            indicatorColor='primary'
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
                sx: { display: isNonMobile? 'block' : 'none'}
            }}
            sx={{
                m: "25px",
                "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap"
                }
            }}
            >
                <Tab label='All' value='all'/>
                <Tab label="New Arrivals" value='newArrivals' />
                <Tab label="Best Sellers" value='bestSellers'/>
                <Tab label="Top Rated" value="topRated" />
            </Tabs>
            <Box
            margin="0 auto"
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 300px)"
            justifyContent='space-around'
            rowGap='20px'
            columnGap="1.33%"

            >
             {value === "all" && items.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
             {/* {value === "all" && items.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
             {value === "all" && items.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))} */}
                
            </Box>
        </Box>
    )
}

export default ShoppingList;