import "./explore-item.styles.css";
import Workout from "../../assets/Workout-bro.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExploreItem({ color, short_description, name, description, tags }) {
  return (
    <div className="explore-item card">
      <Accordion sx={{ background: color }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="card-content">
            <p
              style={{
                backgroundColor: "rgb(250, 190, 199)",
                fontWeight: "600",
              }}
            >
              {tags.map((tag, idx) => (
                <span className="tag" key={idx}>
                  {tag}
                </span>
              ))}
            </p>
            <h3>{name}</h3>
            <h6>{short_description}</h6>
          </div>
          <div className="card-image">
            <img className="img" src={Workout} alt={name} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExploreItem;
