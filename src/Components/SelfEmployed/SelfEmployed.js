
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Latest_Profit from "./Latest_Profit";
import Pincode from "../Salaried/Pincode";
import App from "../Salaried/HowToUseLoan/App";


const SelfEmployed = ({prevStep:prevPreviousStep,handleFormData:setFormData,values:formData}) => {
  //state for steps
  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    if(step === 1){
      prevPreviousStep();
    }
    else{
    setstep(step - 1);
    }
  };

  switch (step) {
    case 1:
      return (
        <div>
          <Col md={{ span: 6, offset: 3 }}>
            <Latest_Profit
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
            <Col md={{ span: 6, offset: 3 }}>
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
          <div>
            <Col >
              <App
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={setFormData}
                values={formData}
              />
            </Col>
          </div>
        );
    // case 3:
    //   return (
    //     <div className="App">
    //       <Row>
    //         <Col className="custom-margin">
    //           <App />
    //         </Col>
    //       </Row>
    //     </div>
    //   );

    default:
      return <div className="App"></div>;
  }
};

export default SelfEmployed;
