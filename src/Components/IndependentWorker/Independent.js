
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../Salaried/HowToUseLoan/App";
import { motion } from "framer-motion";



const Independent = ({prevStep:prevPreviousStep,handleFormData:setFormData,values:formData}) => {
  //state for steps
  const [step, setstep] = useState(1);


  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    prevPreviousStep();
  };

  switch (step) {
    case 1:
      return (
        <motion.div
        initial={{ x: "100%" }}
    animate={{ x: "calc(20vw - 24%)" }}>
          <Col >
            <App
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Col>
        </motion.div>
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

export default Independent;
