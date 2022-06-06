import "./patient-item.styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

function PatientItem({ displayName, id, age, weight, imgUrl }) {
  const navigate = useNavigate();
  const colors = ["#FFEBB5", "#afc3ff", "#ffd2d9"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="explore-item card">
      <Accordion sx={{ background: color, width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="card-header"
        >
          <div className="card-content">
            <h3>Name: {displayName}</h3>
            <h6>Age: {age}</h6>
            <h6>Weight: {weight}</h6>
          </div>
          <div className="card-image">
            <img className="img" src={imgUrl} alt={displayName} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <button
            className="explore-item-button"
            onClick={() => {
              navigate(`${id}`);
            }}
          >
            See Progress
          </button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PatientItem;
