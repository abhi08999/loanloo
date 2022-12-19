
import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import AverageMonthlyIncome from "../PurchaseAndConstruct/AverageMonthlyIncome";
import AnnualBonus from "../PurchaseAndConstruct/AnnualBonus";
import AboutProperty from "../PurchaseAndConstruct/AboutProperty";
import TotalEmi from "../PurchaseAndConstruct/TotalEmi";
import NameofBuilder from "../PurchaseAndConstruct/NameofBuilder";
import CostofHome from "../PurchaseAndConstruct/CostofHome";
import Co_Applicant from "../PurchaseAndConstruct/Co_Applicant";
import GenderSel from "../PurchaseAndConstruct/GenderSel";

const Index = ({ prevStep: prevPreviousStep ,handleFormData:setFormData,values:formData}) => {
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
        <div>
          <Row>
            <Col  sm={2} md={{ span:7, offset:3 }}>
              <GenderSel nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData} />
            </Col>
          </Row>
        </div>
      );
    case 2:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <AnnualBonus nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData}/>
            </Col>
          </Row>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <AverageMonthlyIncome nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData}/>
            </Col>
          </Row>
        </div>
      );

    case 4:
      return (
        <div>
          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <TotalEmi nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData}/>
            </Col>
          </Row>
        </div>
      );

    case 5:
      return (
        <div>
          <Row>
            <Col sm={2} md={6} lg={12}>
              <AboutProperty nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData} />
            </Col>
          </Row>
        </div>
      );

    case 6:
      return (
        <div>
          <Row>
            <Col  md={{ span: 6, offset: 3 }}>
              <NameofBuilder nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData} />
            </Col>
          </Row>
        </div>
      );

    case 7:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <CostofHome nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData} />
            </Col>
          </Row>
        </div>
      );
    case 8:
      return (
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Co_Applicant nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData}
              values={formData} />
            </Col>
          </Row>
        </div>
      );
  }
};

export default Index;
