import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import cityCode from '../Images/city.png'
import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import { PincodeRegex } from "../Schemas";
import { motion } from "framer-motion";

// creating functional component ans getting props from app.js and destucturing them
const Pincode = ({ nextStep, handleFormData, prevStep, values:value }) => {

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { ...value },
    validationSchema: PincodeRegex,

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        Pincode: formValues.Pincode,
      });
      nextStep();
    },
  });

  
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
      <Card style={{ marginTop: 100 ,border:"none", outline:'none'}}>
      <h4 style={{ fontFamily: "Corbel" }}> Enter your current residential pincode</h4>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Input
               style={{
                fontSize: "16px",
                fontFamily: " sans-serif",
                // margin: " 0.5rem 1rem",
                padding: "0.6rem 0.6rem",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <img src={cityCode} className="formicon" />
                </InputAdornment>
              } 
             
              name="Pincode"
              onBlur={handleBlur}
              onChange={handleChange}
              type="otp"
              placeholder="Your Pincode"
               
              />
               {errors.Pincode && touched.Pincode ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14.5px",
                          fontFamily: "Comic Sans",
                          marginTop:"16px"
                        }}
                      >
                        {errors.Pincode}
                      </p>
                    ) : null}
            
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="btn-prev1" onClick={prevStep}>
              &#8592; Previous
              </button>

              <button className="btn-one1" type="submit" onClick={handleSubmit}>
              Next &#8594;
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Pincode;