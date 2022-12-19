import React from 'react'
import Box from "@mui/material/Box";
import Img1 from '../../../Images/male.png'
import Img2 from '../../../Images/female.png'
import Img3 from '../../../Images/transgenders.png'
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Gendervalidate } from "../../../Schemas";
import { motion } from "framer-motion";

const GenderSel = ({nextStep,handleFormData,prevStep, values:value}) => {
  const { values, errors, handleBlur, handleChange, handleSubmit,touched ,setFieldValue} =
    useFormik({
      initialValues:{ ...value},
      validationSchema:Gendervalidate,
    
      onSubmit: (formValues) => {
      handleFormData({
        ...value,
        gender: formValues.gender,
    
      })
       nextStep();
      },
    });
  return (
    <motion.div
    initial={{ x: "100%" }}
animate={{ x: "calc(50% - 50%)" }}
>
    <Box style={{ marginTop: 100 }}>
    <h4 style={{ fontFamily: "Corbel" }}>My gender</h4>
    <div style={{ marginTop: "40px" }}>
      <Form>
      <label>
      <img src={Img1} className="imagesforgender" alt="Option 4" />
        <input className ="inputgender" type="radio" name="gender"
                  value="male"
                  defaultChecked={values.gender === "male"} onChange={handleChange} onBlur={handleBlur}/>
        <h6 className="typeforgender">Male</h6>
      </label>

      <label>
      <img src={Img2} className="imagesforgender" alt="Option 4" />
        <input className ="inputgender" type="radio" name="gender"
                  value="female"
                  defaultChecked={values.gender === "female"}onChange={handleChange} onBlur={handleBlur} />
        <h6 className="typeforgender">Female</h6>
      </label>
      <label>
        <img src={Img3} className="imagesforgender" alt="Option 4" />
        <input className ="inputgender" type="radio"name="gender"
                  value="other"
                  defaultChecked={values.gender === "other"} onChange={handleChange}onBlur={handleBlur}/>
        <h6 className="typeforgender">Other</h6>
      </label>
      {errors.gender ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "14.5px",
                    fontFamily: "Comic Sans",
                    marginTop: "12px",
                  }}
                >
                  {errors.gender}
                </p>
              ) : null}
     
     <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                }}
              >
                <button className="btn-prevforcity" onClick={prevStep}>
                  &#8592; Previous
                </button>

                <button
                  className="btn-oneforcity"
                  type="button"
                 onClick={handleSubmit}
                >
                  Next &#8594;
                </button>
              </div>
            </Form>
    </div>
  </Box>
 </motion.div>
  )
}

export default GenderSel
