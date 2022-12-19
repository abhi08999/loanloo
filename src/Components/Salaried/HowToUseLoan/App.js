import * as React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../../Images/construct.jpg";
import Img2 from "../../Images/transfer.png";
import Img3 from "../../Images/identify.jpg";
import ExistBankLoan from "./TranferExistLoan/ExistBankLoan";
import Index from "./Haven't Identify/Index";
import CurrentCity from "./PurchaseAndConstruct/CurrentCity";
import { motion } from "framer-motion";
export default function App({handleFormData:setFormData,values:formData}) {
  const [step, setstep] = useState(0);


  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    if (step === 2) {
      setstep(0);
    }
    else if (step === 3) {
      setstep(0);
    } 
    else{
      setstep(step-1)
    }
    
  };

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 0:
      return (
        <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
        <div style={{ marginTop: 100 }}>
          <h4 style={{ fontFamily: "Corbel" }}>
            How would you like to use your home loan?
          </h4>
          <div style={{ marginTop: "40px" }}>
            <label>
              <img src={Img1} className="puchaseImg" alt="Option 2" />
              <input
                type="radio"
                className="input"
                name="test"
                value={step}
                onChange={() => setstep(1)}
              />
              <h6 className="puchasetype">
                Purchase or construct
                <br /> on property I have <br /> already chosen
              </h6>
            </label>
            <label>
              <img src={Img2} className="puchaseImg" alt="Option 4" />
              <input
                type="radio"
                className="input"
                name="test"
                value={step}
                onChange={() => setstep(2)}
              />
              <h6 className="puchasetype">
                Transfer my existing
                <br /> home loan
              </h6>
            </label>
            <label>
              <img src={Img3} className="puchaseImg1" alt="Option 3" />
              <input
                type="radio"
                className="input"
                name="test"
                value={step}
                onChange={() => setstep(3)}
              />
              <h6 className="puchasetype1">
                I haven't yet identified <br /> the property I'd <br />
                like to purchase
              </h6>
            </label>
          </div>
        </div>
        </motion.div>
      );
    case 1:
      return (
        <div>
          <Row>
            <CurrentCity
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Row>
        </div>
      );
    case 2:
      return (
        <div>
          <Row>
            <ExistBankLoan
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={setFormData}
              values={formData}
            />
          </Row>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Index nextStep={nextStep} prevStep={prevStep}   handleFormData={setFormData}
              values={formData} />
          </Row>
        </div>
      );

    // // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    // case 2:
    //   return (
    //     <div className="App">
    //       <Container>
    //         <Row>
    //           <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
    //             <Mobile nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData} values={formData} />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    //   // Only formData is passed as prop to show the final value at form submit
    // case 3:
    //   return (
    //     <div className="App">
    //       <Container>
    //         <Row>
    //           <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
    //           <Otp nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData} values={formData} />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    //   case 4:
    //   return (
    //     <div className="App">
    //       <Container>
    //         <Row>
    //           <Col sm={2} md={6} lg={12} className="custom-margin">
    //           <Type/>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
}
