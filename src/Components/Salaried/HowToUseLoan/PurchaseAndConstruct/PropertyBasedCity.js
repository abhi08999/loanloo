import React from "react";
import { Input } from "@mui/material";
import { Form } from "react-bootstrap";
import Box from "@mui/material/Box";
import Img1 from "../../../Images/Bangalore.png";
import Img2 from "../../../Images/chennail.png";
import Img3 from "../../../Images/Mumbai.png";
import Img4 from "../../../Images/new_delhi.png";
import Img5 from "../../../Images/otherCity.jpg";
import { Propertyvalidate } from "../../../Schemas";
import { useFormik, useField } from "formik";
import { motion } from "framer-motion";
import Select from "react-select";
import { City } from "country-state-city";

const PropertyBasedCity = ({
  nextStep,
  prevStep,
  values: value,
  handleFormData,
}) => {
  const data = [{ label: "select city", value: "" }];
  const city = City.getAllCities();
  city.map(({ countryCode, name }) => {
    countryCode === "IN" && data.push({ label: name, value: name });
  });
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: { ...value },
    validationSchema: Propertyvalidate,

    onSubmit: (formValues) => {
      handleFormData({
        ...value,
        propertyBasedCity: formValues.propertyBasedCity,
      });
      nextStep();
    },
  });
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)" }}>
      <Box style={{ marginTop: 100 }}>
        <h4 style={{ fontFamily: "Corbel" }}>City in which property based?</h4>
        <div style={{ marginTop: "40px" }}>
          <Form>
            <label>
              <img src={Img1} className="imagesforcity" alt="Option 1" />
              <input
                type="radio"
                name="propertyBasedCity"
                value="bangalore"
                defaultChecked={values.propertyBasedCity === "bangalore"}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <h6 className="type">Bangalore</h6>
            </label>

            <label>
              <img src={Img2} className="imagesforcity" alt="Option 2" />
              <input
                type="radio"
                name="propertyBasedCity"
                value="chennai"
                defaultChecked={values.propertyBasedCity === "chennai"}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <h6 className="type">Chennai</h6>
            </label>
            <label>
              <img src={Img3} className="imagesforcity" alt="Option 4" />
              <input
                type="radio"
                name="propertyBasedCity"
                value="mumbai"
                defaultChecked={values.propertyBasedCity === "mumbai"}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <h6 className="type">Mumbai</h6>
            </label>
            <label>
              <img src={Img4} className="imagesforcity" alt="Option 3" />
              <input
                type="radio"
                name="propertyBasedCity"
                value="delhi"
                defaultChecked={values.propertyBasedCity === "delhi"}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <h6 className="type">New Delhi</h6>
            </label>
            <label style={{ width: "185px" }}>
              <img src={Img5} className="imagesforothercity" alt="Option 3" />
              <h6 className="type">Other city</h6>
              <Select
                isClearable
                name="propertyBasedCity"
                placeholder="select city"
                options={data}
                onChange={(option) => {
                  setFieldValue("propertyBasedCity", option.label);
                }}
              />
            </label>
            {errors.propertyBasedCity ? (
              <p
                style={{
                  color: "red",
                  fontSize: "14.5px",
                  fontFamily: "Comic Sans",
                  marginTop: "12px",
                }}
              >
                {errors.propertyBasedCity}
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
          </Form>
        </div>
      </Box>
    </motion.div>
  );
};

export default PropertyBasedCity;
