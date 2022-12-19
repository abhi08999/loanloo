import * as React from "react";
import { Form, Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Input } from "@mui/material";
import { FaBuilding } from "react-icons/fa";
import InputAdornment from "@mui/material/InputAdornment";
import { motion } from "framer-motion";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const NameofBuilder = ({
  prevStep,
  nextStep,
  handleFormData,
  values: value,
}) => {
  
const options = ['option', 'data','hello'];
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { ...value },

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        nameofBuilder: formValues.nameofBuilder,
      });
      nextStep();
    },
  });

  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)"  }}>
      <Box style={{ marginTop: 100 }}>
        <h4 style={{ fontFamily: "Corbel" }}>
          Name of builder & project(optional)
        </h4>
        <Form>
          <Form.Group>
      <Autocomplete
        id="custom-input-demo"
        sx={{
          width:360,
          fontSize: "16px",
          marginLeft:"44px",
          fontFamily: "Comic Sans",
        }}
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
           <TextField
           name="nameofBuilder"
           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <FaBuilding className="formicon" />
              </InputAdornment>
            ),
           }}
            sx ={{
              width:360,
              marginTop:"25px",
              fontSize: "16px",
              fontFamily: "Comic Sans",
            }}
            {...params.inputProps}
            variant="standard"
            placeholder="type here ..."
          />
          </div>
        )}
      />
            {/* <Input
              style={{
                fontSize: "16px",
                fontFamily: "Comic Sans",
                padding: "0.6rem 0.6rem",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <FaBuilding className="formicon" />
                </InputAdornment>
              }
              name="nameofBuilder"
              value={values.nameofBuilder}
              type="text"
              placeholder="type here..."
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
          </Form.Group>
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
    </motion.div>
  );
};
export default NameofBuilder;
