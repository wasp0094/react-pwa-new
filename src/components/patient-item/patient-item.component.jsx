import "../explore-item/explore-item.styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { resolveImage } from "../../excercises/excercises";

function PatientItem({ displayName, age, weight, imgUrl, routine }) {
  const navigate = useNavigate();
  return (
    <div className="explore-item card">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="card-header"
        >
          <div className="card-content">
            <h3>{displayName}</h3>
            <h6>{age}</h6>
          </div>
          <div className="card-image">
            <img className="img" src={imgUrl} alt={displayName} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}>
            {description.slice(0, 100)}...
          </Typography> */}
          <button className="explore-item-button">See Progress</button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PatientItem;
