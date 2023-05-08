//TODO AShipping Form
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from './AddressForm';

const Shipping=({
    values,
    errors,
    touched,
    handleChange,
    handleBlur, 
    setFieldValue,
}) => {
    


    return(
    <Box m="30px auto">
        {/* BILLING FORM */}
        <Box>
            <Typography sx={{ mb: "15px"}} fontSize="18px">
                BILLING INFORMATION
            </Typography>
            <AddressForm
                type='billingAddress'
                value={values.billingAddress}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                />         
        </Box>
        <Box mb="20px">
            <FormControlLabel 
            label="Use this address for shipping details"
            control={
                <Checkbox 
                defaultChecked
                values={values.shippingAddress.isSameAddress}
                onChange={() => setFieldValue("shippingAddress.isSameAddress", 
                !values.shppingAdress.isSameAddress)
             }
            />
            }
            />
        </Box>

        {/* SHIPPING FORM */}
        {!values.shippingAddress.isSameAddress && (
            <Box>
                 <Typography sx={{ mb: "15px"}} fontSize="18px">
                SHIPPING INFORMATION
                </Typography>
                <AddressForm
                type='shippingAddress'
                values={values.billingAddress}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                />
            </Box>
        )}
    </Box>
        )
}

export default Shipping;