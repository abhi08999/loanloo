import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import { GrSelect } from "react-icons/gr";
import WhendidUbegin from "./WhendidUbegin";
import AverageMonthlyIncome from "../PurchaseAndConstruct/AverageMonthlyIncome";
import AnnualBonus from "../PurchaseAndConstruct/AnnualBonus";
import AboutProperty from "../PurchaseAndConstruct/AboutProperty";
import TotalEmi from "../PurchaseAndConstruct/TotalEmi";
import NameofBuilder from "../PurchaseAndConstruct/NameofBuilder";
import CostofHome from "../PurchaseAndConstruct/CostofHome";
import Co_Applicant from "../PurchaseAndConstruct/Co_Applicant";
import GenderSel from "../PurchaseAndConstruct/GenderSel";
import { useFormik } from "formik";
import { ExistBankValidate } from "../../../Schemas";
import PropertyBasedCity from "../PurchaseAndConstruct/PropertyBasedCity";
import { motion } from "framer-motion";

const ExistBankLoan = ({
  prevStep: prevPreviousStep,
  handleFormData: setFormData,
  values: formData,
}) => {
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
    validationSchema: ExistBankValidate,

    onSubmit: (formValues) => {
      setFormData({
        ...values,
        existbankLoan: formValues.existbankLoan,
      });
      nextStep();
    },
  });

  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    if (step === 1) {
      prevPreviousStep();
    } else {
      setstep(step - 1);
    }
  };

  switch (step) {
    case 1:
      return (
        <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Box style={{ marginTop: 100 }}>
              <h4 style={{ fontFamily: "Corbel" }}>
                Which bank is your existing home loan with?
              </h4>
              <Form>
                <Form.Group>
                  <Input
                    style={{
                      width: "300px",
                      fontSize: "16px",
                      fontFamily: "Comic Sans",
                      padding: "0.6rem 0.6rem",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <GrSelect className="formicon" />
                      </InputAdornment>
                    }
                    value={values.existbankLoan}
                    name="existbankLoan"
                    type="text"
                    placeholder="type bank name here..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                {errors.existbankLoan ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14.5px",
                      fontFamily: "Comic Sans",
                      marginTop: "12px",
                    }}
                  >
                    {errors.existbankLoan}
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
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Next &#8594;
                  </button>
                </div>
              </Form>
            </Box>
          </Col>
        </motion.div>
      );
    case 2:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
              <WhendidUbegin
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col>
              <PropertyBasedCity
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
            <Col  sm={2} md={{ span:7, offset:3 }}>
              <GenderSel
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
    case 6:
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

    case 7:
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

    case 8:
      return (
        <div>
          <Row>
            <Col sm={2} md={6} lg={12}>
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

    case 9:
      return (
        <div>
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
        </div>
      );

    case 10:
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
    case 11:
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
  }
};

export default ExistBankLoan;
