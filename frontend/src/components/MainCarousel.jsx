import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import navigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from './../theme';

// import photos from folder:
const importAll = (r) => 
r.keys().reduce((acc, item)=>{
    acc[item.reaplce("./", '')] = r(item);
    return acc;
}, {});

export const heroTextureImports = importAll(
    require.context('../../assets', false, /\.(png|jpe?g?svg)$/)
)



function MainCarousel(){
    return (<div>
        Carousel</div>
        );
}

export default MainCarousel;