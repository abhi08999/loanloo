import React from "react";
import Box from "@mui/material/Box";
import Img1 from "../../../Images/applicant.png";
import Img2 from "../../../Images/co_applicant.png";
import { motion } from "framer-motion";

const Co_Applicant = ({ prevStep, nextStep, handleFormData, values }) => {
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "calc(50% - 50%)"  }}>
      <Box style={{ marginTop: 100 }}>
        <h4 style={{ fontFamily: "Corbel" }}>
          Would you like to add co-applicant?
        </h4>
        <div style={{ marginTop: "40px" }}>
          <label>
            <img src={Img1} className="imagesforapplicant" alt="Option 4" />
            <input className="coapplicantInput" type="radio" name="test" />
            <h6 className="typeforapplicant">
              Yes,I'm appliying with <br />a co-applicant
            </h6>
          </label>

          <label>
            <img src={Img2} className="imagesforapplicant" alt="Option 4" />
            <input
              className="coapplicantInput"
              type="radio"
              name="test"
              value="big"
            />
            <h6 className="typeforapplicant">
              No, I'm appliying <br /> alone
            </h6>
          </label>

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

            <button className="btn-oneforcity" type="submit" onClick={nextStep}>
              Next &#8594;
            </button>
          </div>
        </div>
      </Box>
    </motion.div>
  );
};

export default Co_Applicant;
