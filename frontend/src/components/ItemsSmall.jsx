//TODO WIshList Item 
import { Box, FlexBox, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { shades } from "../theme";

import { useNavigate } from "react-router-dom";


const ItemSmall = ({ 
   item }) => {

    const navigate = useNavigate();
    const { category, price, name, image } = item.attributes;
    const url = image.data.attributes.formats.medium.url || image.data.attributes.url

    return (
        <Box key={`${item?.attributes?.name}-${item.id}`}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={item.name}
                        width="123px"
                        height="164px"
                        src={`http://localhost:1337${url}`}
                        onClick={() => navigate(`/item/${item.id}`)}
                        style={{ cursor: "pointer" }}
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">
                        {item.attributes.name}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(removeFromWishList({ id: item.id }))
                          }
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>{item.attributes.shortDescription}</Typography>
                      <FlexBox m="15px 0">                         
                      <Typography fontWeight="bold">
                        ${item.attributes.price}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
            </Box>
    )
}

export default ItemSmall;