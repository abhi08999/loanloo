import * as React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "./Images/tech-support.jpeg";
import Img2 from "./Images/worker.jpeg";
import Img4 from "./Images/team.jpeg";
import Img3 from "./Images/freedom.jpeg";
import Box from "@mui/material/Box";
import Index from "./Salaried/HomeIndex";
import Professional from "./Professional/Professional";
import SelfEmployed from "./SelfEmployed/SelfEmployed";
import Independent from "./IndependentWorker/Independent";
import { motion } from "framer-motion";
export default function Type() {
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  const [step, setstep] = useState(0);

  const [formData, setFormData] = useState({
    type: "",
    Income: "",
    Pincode: "",
    howWouldliketoUse: "",
    currentCity: "",
    gender: "",
    propertyBasedCity: "",
    annualBonus: "",
    incentives: "",
    howWouldliketoUse: "",
    emi: "",
    aboutProperty: "",
    nameofBuilder: "",
    costofplot: "",
    coapplicant: "",
    existbankLoan:"",
    whenDidYouBegin:""
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    if(step === 1 && step === 4)
    {
      setstep(0);
    }
    if(step === 2 ){
      setstep(0)
    }
    if(step === 3 ){
      setstep(0)
    }
    else{
    setstep(step - 1);
    }
  };

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 0:
      return (
        <motion.div initial={{ x: "100%" }} animate={{x: "calc(50% - 50%)" }}>
          <Box style={{ marginTop: 100 }}>
            <h4 style={{ fontFamily: "Corbel" }}>Type of employment</h4>
            <div style={{ marginTop: "40px" }}>
              <label>
                <img src={Img1} className="image" alt="Option 1" />
                <input type="radio" value={step} onChange={() => setstep(1)} />
                <h6 className="type">Salaried</h6>
              </label>

              <label>
                <img src={Img2} className="image" alt="Option 2" />
                <input type="radio" value={step} onChange={() => setstep(2)} />
                <h6 className="type">Professional</h6>
              </label>
              <label>
                <img src={Img3} className="image" alt="Option 4" />
                <input type="radio" value={step} onChange={() => setstep(3)}  />
                <h6 className="type">Self Employed</h6>
              </label>
              <label>
                <img src={Img4} className="image" alt="Option 3" />
                <input type="radio" value={step} onChange={() => setstep(4)} />
                <h6 className="type">Independent Worker</h6>
              </label>
            </div>
          </Box>
        </motion.div>
      );
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col>
                <Index
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
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col>
                <Professional
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
      case 3:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <SelfEmployed
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleFormData={setFormData}
                    values={formData}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        case 4:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col>
                    <Independent
                     prevStep={prevStep}
                      nextStep={nextStep}
                      handleFormData={setFormData}
                      values={formData}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
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
