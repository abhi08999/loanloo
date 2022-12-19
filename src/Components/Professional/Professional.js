
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIndex from "../Salaried/HomeIndex";
import { motion } from "framer-motion";


const Professional = ({prevStep:prevPreviousStep,handleFormData:setFormData,values:formData}) => {
  //state for steps
  const [step, setstep] = useState(1);
;

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
            <HomeIndex
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

export default Professional;
