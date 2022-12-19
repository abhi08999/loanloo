
import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { Form } from "react-bootstrap";
import { Input } from "@mui/material";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { DateValidate } from "../../../Schemas";

const WhendidUbegin = ({nextStep,prevStep,handleFormData,values:value}) => {
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
    validationSchema: DateValidate,

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        whenDidYouBegin: formValues.whenDidYouBegin,
      });
      nextStep();
    },
  });
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
    <Box style={{ marginTop: 100 }}>
     <h4 style={{ fontFamily: "Corbel"  }}>When did you begin your existing loan?</h4>
     <Form>
     <Input
               style={{
                width:"210px",
                fontSize: "16px",
                fontFamily: "Comic Sans",
                padding: "0.6rem 0.6rem",
              }}
              name="whenDidYouBegin"
              value={values.whenDidYouBegin}
              type="date"
              placeholder="select date"
              onChange={handleChange}
              onBlur={handleBlur}

              />
               {errors.whenDidYouBegin  ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "14.5px",
                    fontFamily: "Comic Sans",
                    marginTop: "12px",
                  }}
                >
                  {errors.whenDidYouBegin}
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

              <button className="btn-oneforcity" type="submit" onClick={handleSubmit}>
              Next &#8594;
              </button>
              </div>
              </Form>
    </Box>
    </motion.div>
  )
}

export default WhendidUbegin
