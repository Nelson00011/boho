//TODO: SubComponents, potential SWITCH STATEMENT/TERNARY
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "./../theme";
//COMMENT payment info
import { loadStripe } from '@stripe/stripe-js';
//COMMENTS components
import Shipping from "../components/Shipping";
import Payment from "../components/Payment";

const stripePromise = loadStripe(
  "pk_test_51N5tqTA59RZSQVLPMVtEWIdwXE4HVfhtsy3ItLkQEaV5sy6eIlDPXXcyPmxFwYxfbYlAEKo8oHZBEfdJtpknHECe00Fsb3Y8pt"
);


//COMMENT Initial Value
const initialValues = {
    billingAddress: {
        firstName: "",
        lastName: "", 
        country: "",
        Street1: "",
        Street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    shippingAddress: {
        isSameAddress: true,
        firstName: "",
        lastName: "", 
        country: "",
        Street1: "",
        Street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    email: '',
    phoneNumber: '',
}

//COMMENT YUP FORMIK FormCheck
const checkOutSchema = [
//COMMENT firstSTEPPER
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            country: yup.string().required("required"),
            Street1: yup.string().required("required"),
            Street2: yup.string(),
            city: yup.string().required("required"),
            state: yup.string().required("required"),
            zipCode: yup.string().required("required"),
        }),
        shippingAddress: yup.object().shape({
            isSameAddress: yup.boolean(), 
            firstName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            lastName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            country: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            Street1: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            Street2: yup.string(),
            city: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            state: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            zipCode: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
        }),

    }),
//COMMENT: second Stepper
    yup.object().shape({
        email: yup.string().required("required"),
        phoneNumber: yup.string().required('required')
    })
]

//COMMENT actual page
function Checkout(){
    const [activeStep, setActiveStep] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (values, actions) => {
        setActiveStep(activeStep + 1)
        //COMMENT: 
        if(isFirstStep && values.shippingAddress.isSameAddress){
          actions.setFieldValue("shippingAddress",
           {
            ...values.billingAddress,
            isSameAddress: true,
           })
        }
        if(isSecondStep){
          makePayment(values);
        }

    actions.setTouch({});
    }

//TODO HERE
    async function makePayment(values){
        const stripe = await stripePromise;
        const requestBody = {
          userName: [values.firstName, values.lastName].join(" "),
          email: values.email,
          products: cart.map(({ id, count }) => ({
            id,
            count, 
          }))
        };

        const response = await fetch('http://localhost:1337/api/orders', {
          method: "POST",
          headers: { "Content-Type" : 'application/json'},
          body: JSON.stringify(requestBody)
        });

        const session = await response.json();
        await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    };

    return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Box>
       
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkOutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
            <Box display='flex' justifyContent='space-between' gap="50px">
              {isSecondStep && (
                <Button 
                fullWidth
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: shades.primary[200],
                  boxShadow: "none",
                  color: "white",
                  borderRadius: 0,
                  padding: "15px 40px"
                }}
                onClick={()=> setActiveStep(activeStep - 1)}
                >Back</Button>
              )} 
              <Button 
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: shades.primary[300],
                  boxShadow: "none",
                  color: "white",
                  borderRadius: 0,
                  padding: "15px 40px"
                }}
                onClick={()=> setActiveStep(activeStep + 1)}
                >{isFirstStep ? "Next" : "Place Order"}</Button>


            </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Checkout;