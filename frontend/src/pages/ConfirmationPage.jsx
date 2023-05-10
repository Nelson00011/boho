//TODO: 
import { Box, Alert, AlertTitle, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box m="90px auto" width="80%" height="15vh">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </Box>
      <Box 
      display="flex" 
      justifyContent="space-between" 
      gap="50px"
      onClick={() =>navigate('/')} 
      sx={{ "&:hover": { cursor: "pointer" } }}
      width="80%"
      m="90px auto"
      >
                    <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[300],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                  >
                    Continue Browsing --
                    <Typography variant="h4"
                    fontWeight="bold"
                    color={shades.secondary[500]}

                    >BoHo Bag</Typography>
                  </Button>
    </Box>
   </Box>

  );
};

export default Confirmation;

/*
<Typography 
variant="h4"
fontWeight="bold"
mb="30px"
color={shades.secondary[500]}>
BOHO BAG
</Typography>
*/