//TODO: Carousel Additional Products, WishList Conditional on AUTH()
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
import Review from "../components/Review";


function ItemsDetails(){
const dispatch = useDispatch();
const { itemId } = useParams();
const [tabValue, setTabValue] = useState("description");
const [count, setCount] = useState(1);
const [item, setItem] = useState({});
const [items, setItems] = useState([]);
const [reviews, setReviews] = useState([])
const [loadingItem, setLoadingItem] = useState(true);
const [loadingItems, setLoadingItems] = useState(true);

const handleChange = (event, newValue) => {
    setTabValue(newValue);
}


//COMMENT: Item Detail
async function getItem() {
    setLoadingItem(true)
    const items = await fetch(
        `http://localhost:1337/api/items/${itemId}?populate=image&populate=reviews`,
      { method: "GET" }
    );
    const itemsJSON = await items.json();

    setItem(itemsJSON.data);
    console.log("TCL: getItem -> itemsJSON.data", itemsJSON.data)
    // console.log("TCL: ItemsDetails -> item", item)
    setLoadingItem(false)
  }

  //COMMENT: sorts by category & filters Main Item 
  async function getItems() {
    setLoadingItems(true)
    
    const items = await fetch(
      `http://localhost:1337/api/items?filters[category][$eqi]=${item.attributes?.category}&populate=image`,
      { method: "GET" }
    );
    
    const itemsJSON = await items.json();
    const newItems = itemsJSON.data.filter(
    (content) => content.id != itemId
    )

    setItems(newItems.slice(0,4));
    setReviews(item?.attributes?.reviews?.data)
    setLoadingItems(false)
  }

  useEffect(()=> {
    getItem();
  }, [itemId])

  useEffect(()=>{
    getItems();
  }, [item])



return (
    <Box width="80%" m="80px auto">
    <Box display="flex" flexWrap="wrap" columnGap="40px">
      {/* IMAGES */}
      <Box flex="1 1 40%" mb="40px">
        <img
          alt={item?.name} width="100%" height="100%"
                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url || item?.attributes?.image?.data?.attributes?.url}`}
                    style={{ objectFit: "contain" }}
                    />
                  </Box>
          
            {/* ACTIONS*/}
            <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Fashion/ {item?.attributes?.name}</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.shortDescription}
            </Typography>
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
                <Typography>CATEGORIES:  
                    {loadingItem && <div>Loading..</div>}
                    {!loadingItem && item?.attributes?.category.split('').map((letter,index )=> letter.toUpperCase() === letter || index === 0 ? ` ${letter.toUpperCase()}` : letter).join("")}</Typography>
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
{/* TODO review component*/}

        {tabValue === 'reviews' && reviews.slice(0,3).map((review, index)=> (
        <Review review={review} index={index} key={`review-${review.id}`}/>
      ))}

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
            rowGap="20px"
            columnGap="1.33%"
            justifyContent='space-between'
            >
                {loadingItems && <div>Loading...</div>}
                {!loadingItems && items.map((item, i) => (
                   <Item item={item} key={`${item.name}-${item.id}`} />
                ))}

            </Box>
        </Box>
    </Box>)
};

export default ItemsDetails;