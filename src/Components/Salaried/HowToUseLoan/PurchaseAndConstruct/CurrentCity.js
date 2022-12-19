import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Img1 from "../../../Images//Bangalore.png";
import Img2 from "../../../Images/chennail.png";
import Img3 from "../../../Images/Mumbai.png";
import Img4 from "../../../Images/new_delhi.png";
import Img5 from "../../../Images/otherCity.jpg";
import "../index.css";
import { Form } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import GenderSel from "./GenderSel";
import PropertyBasedCity from "./PropertyBasedCity";
import AnnualBonus from "./AnnualBonus";
import TotalEmi from "./TotalEmi";
import AboutProperty from "./AboutProperty";
import NameofBuilder from "./NameofBuilder";
import CostofHome from "./CostofHome";
import Co_Applicant from "./Co_Applicant";
import AverageMonthlyIncome from "./AverageMonthlyIncome";
import { Cityvalidate } from "../../../Schemas";
import { useFormik } from "formik";
import { City } from "country-state-city";
import { motion } from "framer-motion";
import Select from "react-select";
//import CreatableSelect from 'react-select/creatable';

const CurrentCity = ({
  prevStep: prevPreviousStep,
  handleFormData: setFormData,
  values: formData,
}) => {
  const data = [];
  const city = City.getAllCities();
  city.map(({ countryCode, name }) => {
    countryCode === "IN" && data.push({ label: name, value: name });
  });

  const [step, setstep] = useState(0); 
 
  // document.getElementById("bahay").addEventListener("click", e => {
  //   const {type,id} = e.target;
  //   const textField = document.getElementById("other");
  //   const check = document.getElementById("none");
  //   if (type && type === "radio") textField.value = ""; // or 
  //   else if (id === "other") check.checked = false;
  // });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { formData },
    validationSchema: Cityvalidate,

    onSubmit: (formValues) => {
      setFormData({
        ...values,
        currentCity: formValues.currentCity,
      });
      nextStep();
    },
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    if (step === 0) {
      prevPreviousStep();
    } else {
      setstep(step - 1);
    }
  };

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 0:
      return (
        <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
          <Box style={{ marginTop: 100 }}>
            <h4 style={{ fontFamily: "Corbel" }}>
              Where do you live currently?
            </h4>
            <div  id="bahay" style={{ marginTop: "40px" }}>
              <Form>
                <label>
                  <img src={Img1} className="imagesforcity" alt="Option 1" />
                  <input
                    type="radio"
                    id="none"
                    name="currentCity"
                    value="bangalore"
                    checked={values.currentCity === "bangalore"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <h6 className="type">Bangalore</h6>
                </label>

                <label>
                  <img src={Img2} className="imagesforcity" alt="Option 2" />
                  <input
                    type="radio"
                    id="none"
                    name="currentCity"
                    value="chennai"
                    checked={values.currentCity === "chennai"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <h6 className="type">Chennai</h6>
                </label>
                <label>
                  <img src={Img3} className="imagesforcity" alt="Option 4" />
                  <input
                    type="radio"
                    id="none"
                    name="currentCity"
                    value="mumbai"
                    checked={values.currentCity === "mumbai"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <h6 className="type">Mumbai</h6>
                </label>
                <label>
                  <img src={Img4} className="imagesforcity" alt="Option 3" />
                  <input
                    type="radio"
                    id="none"
                    name="currentCity"
                    value="delhi"
                    checked={values.currentCity === "delhi"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <h6 className="type">New Delhi</h6>
                </label>
                <label style={{ width: "185px" }}>
                  <img src={Img5} className="imagesforothercity" alt="Option 3" />
                  <h6 className="type">Other city</h6>
                  <Select
                    id="other"
                    isClearable
                    options={data}
                    name="currentCity"
                    onChange={(option)=>{setFieldValue("currentCity",option?.value)}}
                    placeholder="select city"
                  />
                </label>

                {errors.currentCity ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.currentCity}
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
                    onClick={() => {
                      handleSubmit(console.log(errors));
                    }}
                  >
                    Next &#8594;
                  </button>
                </div>
              </Form>
            </div>
          </Box>
        </motion.div>
      );
    case 1:
      return (
        <Row>
          <Col sm={2} md={{ span: 7, offset: 3 }}>
            <GenderSel
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Col>
        </Row>
      );
    case 2:
      return (
        <Row>
          <PropertyBasedCity
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={setFormData}
            values={formData}
          />
        </Row>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <AnnualBonus
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 4:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <AverageMonthlyIncome
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 5:
      return (
        <div>
          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <TotalEmi
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 6:
      return (
        <div>
          <Row>
            <Col>
              <AboutProperty
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 7:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <NameofBuilder
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={setFormData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 8:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <CostofHome
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 9:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Co_Applicant
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    default:
      return <div className="App"></div>;
  }
};

export default CurrentCity;
