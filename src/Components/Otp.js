import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import { MdOutlineSendToMobile } from "react-icons/md";
import { useFormik } from "formik";
import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { otpForm } from "./Schemas";
import "../Components/form.css";
import { motion } from "framer-motion";
import axios from "axios";

const Otp = ({ nextStep, handleFormData, prevStep, values: value,otp}) => {
  
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: { ...value },
      validationSchema: otpForm,
      onSubmit: (formValues) => {

        handleFormData({
          ...value,
          otp: formValues.otp,
        });
       
        axios.post(`http://localhost:5000/api/personalInfo`,formValues)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })  
        if( formValues.otp === otp){
          nextStep();
        }
        
       
      },
    });
   
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x:"calc(50% - 50%)" }}>
      <Box style={{ marginTop: 100 }}>
        <Form>
          <Form.Group>
            <Input
              style={{
                fontSize: "16px",
                fontFamily: "Comic Sans",
                padding: "0.6rem 0.6rem",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <MdOutlineSendToMobile className="formicon" />
                </InputAdornment>
              }
              value={values.otp}
              name="otp"
              type="text"
              placeholder="Your Otp"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.otp && touched.otp ? (
              <p
                style={{
                  color: "red",
                  fontSize: "14.5px",
                  fontFamily: "Comic Sans",
                  marginTop: "12px",
                }}
              >
                {errors.otp}
              </p>
            ) : null}
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="btn-prev1" onClick={prevStep}>
              &#8592; Previous
            </button>

            <button className="btn-one1" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </Form>
      </Box>
    </motion.div>
  );
};

export default Otp;
