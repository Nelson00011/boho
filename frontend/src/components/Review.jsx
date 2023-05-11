//TODO review 
import { Box, Typography,  Rating } from "@mui/material";
import { shades } from "../theme";

const Review = ({ review, index }) => {

const description = review.attributes.description
const rating = review.attributes.rating

    return(
        <Box>
            <Box
            width="80%" margin="5px auto"
            textAlign="center"
            >
            <Typography component="legend" variant="h4" >Rating</Typography>
            <Rating name="read-only" value={rating} size="medium" textAlign="center" readOnly />
            </Box>
            <Box textAlign="center" >
            <div>"<em>{description}</em>"</div>
            <hr/>
            </Box>
        </Box>
    
    )
}

export default Review;