import * as React from "react";
import { styled } from "@mui/material/styles";
import { Form, Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";
import MuiInput from "@mui/material/Input";
import "../form.css";
import { useFormik } from "formik";
import { InComeValid } from "../Schemas";
import { motion } from "framer-motion";

const Input = styled(MuiInput)`
  width: 300px;
  fontfamily: sans-serif;
  padding: 0.4rem 0.8rem;
`;
const IncomeSlider = {
  marksAmt: [
    { value: 0, label: "₹ 0" },
    { value: 3000000, label: "> ₹ 3000 K" },
  ],
};

const Latest_Profit = ({ nextStep, handleFormData, values: value,prevStep }) => {
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
    validationSchema: InComeValid,

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        Income: formValues.Income,
      });
      nextStep();
    },
  });
  const PrettoSlider = withStyles({
    root: { color: " #8ba5f6", height: 10 },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: "white",
      border: "2px solid black",
      marginTop: -9,
      marginLeft: -9,
    },
    track: { height: 6, borderRadius: 4 },
    rail: { height: 6, borderRadius: 4 },
  })(slider);

  return (
    <motion.div initial={{ x: "100%" }} animate={{ x:"calc(50% - 50%)" }}>
      <Form>
        <Box style={{ marginTop: 100 }}>
          <h4 style={{ fontFamily: "Corbel" }}>Latest year's profit after tax</h4>
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginTop: "20px" }}
          >
            <Grid item xs={12}>
              <strong>&#8377; </strong>
              <Input
                value={values.Income}
                size="small"
                onChange={(e) => setFieldValue("Income",e.target.value)}
                onBlur={handleBlur}
                inputProps={{
                  step: 50,
                  min: 0,
                  max: 3000000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              {errors.Income && touched.Income ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14.5px",
                          fontFamily: "Comic Sans",
                          marginTop:"20px"
                        }}
                      >
                        {errors.Income}
                      </p>
                    ) : null}
            </Grid>
            <Grid item xs={12} style={{ marginTop: "10px" }}>
              <PrettoSlider
                value={values.Income || 0}
                marks={IncomeSlider.marksAmt}
                max={3000000}
                onChange={(e,newValue) => setFieldValue("Income", newValue)}
                aria-labelledby="input-slider"
              ></PrettoSlider>
            </Grid>
          </Grid>
        </Box>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="btn-prev1" onClick={prevStep}>
              &#8592; Previous
              </button>

              <button className="btn-one1" type="submit" onClick={handleSubmit}>
              Next &#8594;
              </button>
            </div>
      </Form>
    </motion.div>
  );
};
export default Latest_Profit;

