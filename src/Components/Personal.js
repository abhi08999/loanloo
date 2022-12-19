import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import "./form.css";
import { BiUserCheck } from "react-icons/bi";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";
import age from "../Components/Images/age.png";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import { personalInfo } from "./Schemas";
import { motion } from "framer-motion";

const Personal = ({ nextStep, handleFormData, values: value }) => {
  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    // console.log(age_now);
    return age_now;
  };

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
    validationSchema: personalInfo,
    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        fullName: formValues.fullName,
        email: formValues.email,
        dob: formValues.dob,
        age: formValues.age,
        mobile: formValues.mobile,
      });
      nextStep();
    },
  });

  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
      <Box style={{ marginTop: 100 }}>
        <h4 style={{ fontFamily: "Corbel" }}>Personal details</h4>
        <Form>
          <Row style={{ marginTop: "20px" }}>
            <Col md={12} lg={6}>
              <Form.Group>
                <Input
                  style={{
                    fontSize: "16px",
                    fontFamily: "Comic Sans",
                    padding: "0.6rem 0.6rem",
                  }}
                  name="fullName"
                  value={values.fullName}
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  startAdornment={
                    <InputAdornment position="start">
                      <BiUserCheck className="formicon" />
                    </InputAdornment>
                  }
                />
                {errors.fullName && touched.fullName ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.fullName}
                  </p>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={12} lg={6}>
              <Form.Group className="mb-3">
                <Input
                  style={{
                    fontSize: "16px",
                    fontFamily: "Comic Sans",
                    padding: "0.6rem 0.6rem",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <MdOutlineMailOutline className="formicon" />
                    </InputAdornment>
                  }
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  placeholder="Your email"
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.email}
                  </p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Form.Group className="mb-3">
                <Input
                  style={{
                    fontSize: "16px",
                    fontFamily: "Comic Sans",
                    padding: "0.6rem 0.6rem",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <HiOutlineCake className="formicon" />
                    </InputAdornment>
                  }
                  name="dob"
                  value={values.dob}
                  onBlur={handleBlur}
                  type="date"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("age", calculate_age(e.target.value));
                  }}
                />
                {errors.dob && touched.dob ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.dob}
                  </p>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={12} lg={6}>
              <Form.Group className="mb-3">
                <Input
                  style={{
                    fontSize: "16px",
                    fontFamily: "Comic Sans",
                    padding: "0.6rem 0.6rem",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <img
                        style={{ width: "34px", padding: "5px" }}
                        src={age}
                      />
                    </InputAdornment>
                  }
                  value={values.age}
                  onBlur={handleBlur}
                  name="age"
                  type="number"
                  placeholder="Age"
                  onChange={handleChange}
                />
                {errors.age && touched.age ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.age}
                  </p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <button className="btn-one" onClick={handleSubmit}>
            Next &#8594;
          </button>
        </Form>
      </Box>
    </motion.div>
  );
};
export default Personal;
