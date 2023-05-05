//TODO: consider column component?
import { Typography, Box, useTheme } from '@mui/material';
import { shades } from './../theme';


function Footer(){
    const { palette: { neutral }} = useTheme();
    

    return(
        <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >

        <Box width="clamp(20%, 30%, 40%)">
            <Typography 
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
            >
                BOHO BAG
            </Typography>
            <div>
            Lorem ipsum dolor sit amet, no nam audiam vituperata disputando, 
            in vix equidem neglegentur. Qui iudicabit adipiscing conclusionemque an,
            eu eirmod labores vix, ius impetus quaeque iudicabit eu. 
            </div>
            </Box>
            <Box>
                <Typography 
                 variant="h4"
                 fontWeight="bold"
                 mb="30px"
                 color={shades.secondary[500]}>
                    ABOUT US
                 </Typography>
                 <Typography mb="30px">Careers</Typography>
                 <Typography mb="30px">Locations</Typography>
                 <Typography mb="30px">Terms & Conditions</Typography>
                 <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography 
                 variant="h4"
                 fontWeight="bold"
                 mb="30px"
                 color={shades.secondary[500]}>
                    HELP
                 </Typography>
                 <Typography mb="30px">Customer Inquiries</Typography>
                 <Typography mb="30px">Track Order</Typography>
                 <Typography mb="30px">Corporate Purchasing</Typography>
                 <Typography mb="30px">Returns & Refunds</Typography>
                 
            </Box>
        <Box width='clamp(20%, 25%, 30%)'>
        <Typography 
                 variant="h4"
                 fontWeight="bold"
                 mb="30px"
                 color={shades.secondary[500]}>
                    CONTACT US
                 </Typography>
                 <Typography mb="30px">6 Voyage St, Vennice, CA 90292</Typography>
                 <Typography mb="30px">EMAIL: info@boho.com</Typography>
                 <Typography mb="30px">PHONE: (555)-555-5555</Typography>


        </Box>

        </Box>
    </Box>
    )
}

export default Footer;