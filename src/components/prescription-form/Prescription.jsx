import * as React from "react";
import Button from "@mui/material/Button";
import FormOutput from "./form-output";

export default function Prescription() {
  return (
    <div>
      <div>
        <h6>Prescription Form</h6>
        <p>Name: </p>
        <p>Age:</p>
      </div>
      <FormOutput />
    </div>
  );
}
