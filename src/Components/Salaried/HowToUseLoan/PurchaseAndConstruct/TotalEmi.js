import * as React from "react";
import { styled } from "@mui/material/styles";
import { Form, Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";
import MuiInput from "@mui/material/Input";
import { useFormik } from "formik";
import { motion } from "framer-motion";
// import { InComeValid } from "../../../Schemas";

const Input = styled(MuiInput)`
  width: 300px;
  fontfamily: sans-serif;
  padding: 0.4rem 0.8rem;
`;
const IncomeSlider = {
  marksAmt: [
    { value: 0, label: "₹ 0" },
    { value: 200000, label: "> ₹ 200 K" },
  ],
};

const TotalEmi = ({ prevStep, nextStep, handleFormData, values: value }) => {
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
        emi: formValues.emi,
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
    <motion.div initial={{ x: "100%" }} animate={{ x:"calc(50% - 50%)"  }}>
      <Form>
        <Box style={{ marginTop: 100 }}>
          <h4 style={{ fontFamily: "Corbel" }}>
            Total EMIs you currently pay per month (if any)
          </h4>
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginTop: "20px" }}
          >
            <Grid item xs={12}>
              <strong>&#8377; </strong>
              <Input
                name="emi"
                value={values.emi}
                size="small"
                onChange={(e) => setFieldValue("emi", e.target.value)}
                onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 200000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: "10px" }}>
              <PrettoSlider
                value={values.emi || 0}
                marks={IncomeSlider.marksAmt}
                max={200000}
                onChange={(e, newValue) => setFieldValue("emi", newValue)}
                aria-labelledby="input-slider"
              ></PrettoSlider>
            </Grid>
          </Grid>
        </Box>
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
    </motion.div>
  );
};
export default TotalEmi;
