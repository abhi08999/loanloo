import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InCome from "./InCome";
import Pincode from "./Pincode";
import App from "./HowToUseLoan/App";

const HomeIndex = ({ prevStep: prevPreviousStep,handleFormData: setFormData, values: formData}) => {
  //state for steps
  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

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
        <div>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            <InCome
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Col>
        </div>
      );

    case 2:
      return (
        <div>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            <Pincode
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Col>
        </div>
      );
    case 3:
      return (
          <Row>
            <Col className="custom-margin">
              <App
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </Row>
      );

    default:
      return <div className="App"></div>;
  }
};

export default HomeIndex;
