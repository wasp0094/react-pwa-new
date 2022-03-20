import "./explore-item.styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { resolveImage } from "../../excercises/excercises";

function ExploreItem({
  color,
  short_description,
  name,
  id,
  description,
  tags,
}) {
  const navigate = useNavigate();
  return (
    <div className="explore-item card">
      <Accordion sx={{ background: color }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="card-header"
        >
          <div className="card-content">
            <h3>{name}</h3>
            <h6>{short_description}</h6>
          </div>
          <div className="card-image">
            <img className="img" src={resolveImage(id)} alt={name} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}>
            {description.slice(0, 100)}...
          </Typography>
          <button
            className="explore-item-button"
            onClick={() => {
              navigate(`/details/${id}`);
            }}
          >
            ADD TO YOUR ROUTINE
          </button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExploreItem;
