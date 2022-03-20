import "./instructions.styles.css";
import { Button } from "@mui/material";

import instruction from "../../assets/banner1.jpg";

function Instructions(props) {
  const { handleExcerciseStart, instructions } = props;
  const handleClick = (e) => {
    handleExcerciseStart(1);
  };
  return (
    <div className="instruction">
      <img
        src={instruction}
        alt="instruction"
        className="img-fluid instruction-image"
      />
      <div className="rules">
        {instructions.map((rule, idx) => (
          <p key={idx} className="rule">
            # {rule}
          </p>
        ))}
      </div>
      <Button
        variant="primary"
        onClick={handleClick}
        className="btn instruction-button"
      >
        Start
      </Button>
    </div>
  );
}

export default Instructions;
