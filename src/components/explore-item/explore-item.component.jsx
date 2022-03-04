import "./explore-item.styles.css";
import Workout from "../../assets/Workout-bro.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExploreItem({ color }) {
  return (
    <div className="explore-item">
      <Accordion sx={{ background: color }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="card-content">
            <p>tag: shoulder</p>
            <h3>Exercise Title</h3>
            <h6>Lorem ipsum dolor sit amet, view description</h6>
          </div>
          <div className="card-image">
            <img className="img" src={Workout} alt="workout" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExploreItem;
