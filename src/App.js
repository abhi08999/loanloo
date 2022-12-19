import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal from "./Components/Personal";
import Mobile from "./Components/Mobile";
import Otp from "./Components/Otp";
import Type from "./Components/Type";
function App() {
  //state for steps
  const [step, setstep] = useState(1);
  const [responseOtp,setResponseOtp] = useState("")

  //state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    age:"",
    mobile: "",
    otp:""

  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // // handling form input data by taking onchange value and updating our previous form data state
  // const handleInputData = input => e => {
  //   // input value from the form
  //   const {value } = e.target;

  //   //updating for data state taking previous state and then adding new value to create new object
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [input]: value
  // }));
  // }

// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset:3 }} className="custom-margin">
                <Personal nextStep={nextStep} handleFormData={setFormData} values={formData}/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <Mobile nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData} values={formData} setOtp={setResponseOtp} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <Otp nextStep={nextStep} prevStep={prevStep} handleFormData={setFormData} values={formData} otp={responseOtp} />
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
              <Col sm={2} md={6} lg={12} className="custom-margin">
              <Type/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

 export default App;

// import * as React from "react";
// import FormLabel from "@mui/joy/FormLabel";
// import Radio, { radioClasses } from "@mui/joy/Radio";
// import RadioGroup from "@mui/joy/RadioGroup";
// import Sheet from "@mui/joy/Sheet";
// import Img1 from './Images/tech-support.jpeg'
// import Img2 from './Images/worker.jpeg'
// import Img3 from './Images/team.jpeg'
// import Img4 from './Images/freedom.jpeg'

// import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// import "./App.css";

// export default function App() {
//   const data = [
//     {
//       id: 1,
//       image: Img1,
//       title: "Salaried",
//     },
//     {
//       id: 2,
//       image: Img2,
//       title: "Professional",
//     },
//     {
//       id: 3,
//       image: Img3,
//       title: " Independent Worker",
//     },
//     { id: 4, image: Img4, title: "Self Employed" },
//   ];
//   return (
//     <div className="section">
//       <RadioGroup
//         aria-label="platform"
//         defaultValue="Website"
//         overlay
//         name="platform"
//         sx={{
//           flexDirection: "row",
//           gap: 2,
//           [`& .${radioClasses.checked}`]: {
//             [`& .${radioClasses.action}`]: {
//               inset: -1,
//               border: "3px solid",
//               borderColor: "primary.500",
//               // borderTopRightRadius: '27px',
//             },
//           },
//           [`& .${radioClasses.radio}`]: {
//             display: "contents",
//             "& > svg": {
//               zIndex: 2,
//               position: "absolute",
//               top: "-8px",
//               right: "-8px",
//               bgcolor: "blue",
//               color: "white",
//               borderRadius: "50%",
//             },
//           },
//         }}
//       >
//         {data.map((item,index) => (
//           <Sheet
//             key={index}
//             variant="outlined"
//             sx={{
//               borderRadius: "md",
//               bgcolor: "background.level1",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 1.5,
//               p: 2,
//               minWidth: 170,
//             }}
//           >
//             <Radio
//               id={index}
//               value={item.title}
//               checkedIcon={<CheckCircleRoundedIcon />}
//             />
//            <img className="image" src={item.image}/>
//             <FormLabel htmlFor={item}>{item.title}</FormLabel>
//           </Sheet>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Form, Card, Button } from "react-bootstrap";
// import validator from "validator";
// import { Input } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
// import { ImMobile } from "react-icons/im";
// // creating functional component ans getting props from app.js and destucturing them
// const Mobile = ({ nextStep, handleFormData, prevStep, values }) => {
//   //creating error state for validation
//   const [error, setError] = useState(false);

//   // after form submit validating the form data using validator
//   const submitFormData = (e) => {
//     e.preventDefault();

//     // checking if value of first name and last name is empty show error else take to next step
//     if (validator.isEmpty(values.mobile)) {
//       setError(true);
//     } else {
//       nextStep();
//     }
//   };
//   return (
//     <>
//       <Card style={{ marginTop: 100 }}>
//         <Card.Body>
//           <h4 style={{ fontFamily: "Corbel" }}>Personal details</h4>
//           <Form onSubmit={submitFormData}>
              
//                 <Form.Group>
//                   <Input
//                     style={{
//                       fontSize: "16px",
//                       fontFamily: " sans-serif",
//                       // margin: " 0.5rem 1rem",
//                       padding: "0.6rem 0.6rem",
//                       borderBottom: error ? "2px solid red" : "",
//                     }}
//                     startAdornment={
//                       <InputAdornment position="start">
//                         <ImMobile className="formicon" />
//                       </InputAdornment>
//                     }
//                     defaultValue={values.mobile}
//                     name="mobile"
//                     type="number"
//                     placeholder="Your Mobile"
//                     onChange={handleFormData("mobile")}
//                   />
//                   {error ? (
//                     <Form.Text style={{ color: "red", display:"block"}}>
//                       This is a required field
//                     </Form.Text>
//                   ) : (
//                     ""
//                   )}
//                 </Form.Group>
            

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginTop: "20px",
//               }}
//             >
//               <button className="btn-prev" onClick={prevStep}>
//                 &#8592; Previous
//               </button>

//               <button className="btn-one" type="submit">
//                 Next &#8594;
//               </button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default Mobile;

