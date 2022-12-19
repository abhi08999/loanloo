import React from "react";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Img1 from "../../../Images/completed.jpg";
import Img2 from "../../../Images/underconstruction.jpg";
import Img3 from "../../../Images/plot.jpg";
import Img4 from "../../../Images/built.jpg";
import Img5 from "../../../Images/buyplot.jpg";
import { AboutPropertyValidate } from "../../../Schemas";
import { useFormik } from "formik";
import { motion } from "framer-motion";

const AboutProperty = ({
  nextStep,
  prevStep,
  handleFormData,
  values: value,
}) => {
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
    validationSchema: AboutPropertyValidate,

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        aboutProperty: formValues.aboutProperty,
      });
      nextStep();
    },
  });
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
      <Box style={{ marginTop: 100 }}>
        <h4 style={{ fontFamily: "Corbel" }}>Tell us about your property?</h4>
        <div style={{ marginTop: "40px" }}>
          <label>
            <img src={Img1} className="imagesforproperty" alt="Option 1" />
            <input
              className="inputproperty"
              type="radio"
              name="aboutProperty"
              value="completed"
              defaultChecked={values.aboutProperty === "completed"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <h6 className="typeforproperty">Completed project</h6>
          </label>

          <label>
            <img src={Img2} className="imagesforproperty" alt="Option 2" />
            <input
              className="inputproperty"
              type="radio"
              name="aboutProperty"
              value="under-construction"
              defaultChecked={values.aboutProperty === "under-construction"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <h6 className="typeforproperty">
              Under-construction
              <br /> project
            </h6>
          </label>
          <label>
            <img src={Img3} className="imagesforproperty" alt="Option 4" />
            <input
              className="inputproperty"
              type="radio"
              name="aboutProperty"
              value="land"
              defaultChecked={values.aboutProperty === "land"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <h6 className="typeforproperty">Land/Plot only</h6>
          </label>
          <label>
            <img src={Img4} className="imagesforproperty1" alt="Option 3" />
            <input
              className="inputproperty"
              type="radio"
              name="aboutProperty"
              value="buildown"
              defaultChecked={values.aboutProperty === "buildown"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <h6 className="typeforproperty">
              Built/building on <br /> land I own
            </h6>
          </label>
          <label>
            <img src={Img5} className="imagesforproperty1" alt="Option 3" />
            <input
              className="inputproperty"
              type="radio"
              name="aboutProperty"
              value="tobuy"
              defaultChecked={values.aboutProperty === "tobuy"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <h6 className="typeforproperty">
              Looking to buy land
              <br /> and build on it
            </h6>
          </label>
          {errors.aboutProperty ? (
            <p
              style={{
                color: "red",
                fontSize: "14.5px",
                fontFamily: "Comic Sans",
                marginTop: "12px",
              }}
            >
              {errors.aboutProperty}
            </p>
          ) : null}

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
        </div>
      </Box>
    </motion.div>
  );
};

export default AboutProperty;
