import React, { useState ,useEffect} from "react";
import { Form, Card } from "react-bootstrap";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { ImMobile } from "react-icons/im";
import { useFormik } from "formik";
import { MobileForm } from "./Schemas";
import { motion } from "framer-motion";
import axios from "axios";


const Mobile = ({ nextStep, handleFormData, prevStep, values:value ,setOtp}) => {

  // function callOtpAPI(props){
  //   axios.get(`http://www.uponly.in/mobileappapi/mobile_otp.php?mobile_no=${props}`).then((res)=>console.log(res))
  // }
 function callOtpAPI(props) {
    axios({
    method: 'get',
    url: `https://www.uponly.in/mobileappapi/mobile_otp.php?mobile_no=${props}`,
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      mode: 'no-cors',
      
    }
  }).then(res=>{
    setOtp(res);
  })
};
// useEffect(() => {
// async function callOtpAPI(props) {
//        await axios({
//         method: 'get',
//         url: `https://www.uponly.in/mobileappapi/mobile_otp.php?mobile_no=${props}`,
//         headers: {
//           'Access-Control-Allow-Origin': '',
//           'Content-Type': 'application/json',
//           withCredentials: false,
//           mode: 'no-cors',
//         }
//       }).then(res=>{
//         console.log(res);
//       })
//     };
//     callOtpAPI();
//   }, []);

  const { values, handleBlur, errors,handleChange, handleSubmit,touched } =
    useFormik({
      initialValues:{ ...value},
      validationSchema: MobileForm,
      onSubmit: (formValues) => {
      callOtpAPI(formValues.mobile)
      handleFormData({
        ...value,
        mobile: formValues.mobile,
      })

      nextStep();
      },
    });
   
  return ( 
  
  
  <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>

      <Box style={{ marginTop: 100 }}>
          <h4 style={{ fontFamily: "Corbel" }}>Personal details</h4>
          <Form >
                <Form.Group>
                  <Input
                    style={{
                      fontSize: "16px",
                      fontFamily: "Comic Sans",
                      padding: "0.6rem 0.6rem",
  
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <ImMobile className="formicon" />
                      </InputAdornment>
                    }
                    value={values.mobile}
                    name="mobile"
                    type="text"
                    placeholder="Your Mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   {errors.mobile && touched.mobile ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14.5px",
                          fontFamily: "Comic Sans",
                          marginTop:"12px"
                        }}
                      >
                        {errors.mobile}
                      </p>
                    ) : null}
                 
                </Form.Group>
            

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <button className="btn-prev" onClick={prevStep}>
                &#8592; Previous
              </button>
              <button className="btn-one" type="submit" onClick={handleSubmit}>
                Next &#8594;
              </button>
            </div>
          </Form>
      </Box>
    </motion.div>
  );
};

export default Mobile;
