//TODO: ItemsDetails & Image
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "./../theme";
import { addToCart } from "../state";
import { useParams } from "react-router-dom";
import Item from "../components/Item";


function ItemsDetails(){
const dispatch = useDispatch();
const { itemId } = useParams();
const [tabValue, setTabValue] = useState("description");
const [count, setCount] = useState(1);
const [item, setItem] = useState(null);
const [items, setItems] = useState([]);
const [category, setCategory] = useState('bestSellers')



const handleChange = (event, newValue) => {
    setTabValue(newValue);
}



//COMMENT: Item Detail
async function getItem() {
    const items = await fetch(
        `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemsJSON = await items.json();
    setItem(itemsJSON.data);
    setCategory(itemsJSON.data.attributes.category)
    console.log("TCL: getItem -> itemsJSON.data.attributes.category", itemsJSON.data.attributes.category)
    console.log("TCL: ItemsDetails -> category typof", typeof(category))
  }

  //COMMENT: related Items by category, current item filtered out. 
  //TODO: Category related products or (first four) FILTER current item.
  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?filters[category][$eqi]=${category}&populate=image`,
      { method: "GET" }
    );

    const itemsJSON = await items.json();
    const newItems = itemsJSON.data.filter(
    (content) => content.id != itemId
    )
    setItems(newItems);
    console.log("TCL: getItems -> newItems", newItems)
  }


  useEffect(()=> {
    getItem();
    getItems();
  }, [itemId, category])




return (
    <Box width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/*IMAGE*/}
                <Box flex="1 1 40%" mb="40px">
                    <img alt={item?.name} width="100%" height="100%" 
                    src={`http://localhost:1337/${item?.attributes?.images?.data?.attributes?.formats?.medium?.url}`} 
                    style={{ objectFit: "contain" }}/>
             
            </Box>
            {/* ACTIONS*/}
            <Box flex="1 1 50%" mb="40px">
                <Box display="flex" justifyContent="space-between">
                    <Box>Home/Item</Box>
                    <Box>Prev Next</Box>
                </Box>

            <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>{item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px"}}>{item?.attributes?.longDescription}</Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
                <Box display='flex' alignItems="center" border={`1.5px solid ${shades.neutral[300]}`}
                mr="20px"
                p='2px 5px'>
                    <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                    <RemoveIcon />
                    </IconButton>
                    <Typography color={shades.primary[300]}>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                    </IconButton>
                </Box>
            </Box>

            <Button
                onClick={() => {
                  dispatch(addToCart({ item: { ...item, count } }));
                }}
                sx={{ backgroundColor: shades.primary[500], color: "white", borderRadius:0, minWidth: "125px", padding:"10px 50px" }}
              >
                Add to Cart
              </Button>
            </Box>

            <Box>
                <Box m="20px 0 5x" display='flex'>
                    <FavoriteBorderOutlinedIcon />
                    <Typography sx={{ ml: "5px"}}>ADD TO WISHLIST</Typography>
                </Box>
            <Box>
                <Typography>CATEGORIES: {items?.attributes?.category}</Typography>
            </Box>
            </Box>
        </Box>
        {/* INFORMATION */}
        <Box m="20px 0">
            <Tabs value={tabValue} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description" />
                <Tab label="REVIEWS" value="reviews" />
            </Tabs>
        </Box>
        <Box display='flex' flexWrap="wrap" gap="15px">
            {tabValue === 'description' && (<div>{item?.attributes?.longDescription}</div>)}
            {tabValue === 'reviews' && (<div>REVIEWS</div>)}
        </Box>
        {/* SIMILAR CATEGORY ITEMS */}
        <Box mt="50px" width="100%">
            <Typography variant="h3" fontWeight='bold'>
                Related Products
            </Typography>
            <Box
            mt="20px"
            display="flex"
            flexWrap="wrap"
            columnGap="1.33%"
            justifyContent='space-between'
            >
                {items.slice(0,4).map((item, i) => (
                   <Item item={item} key={`${item.name}-${item.id}`} />
                ))}

            </Box>
        </Box>
    </Box>)
};

export default ItemsDetails;