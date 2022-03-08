import "./explore-item.styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExploreItem({
  color,
  short_description,
  name,
  description,
  tags,
  image,
}) {
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
            {/* <p>
              {tags.map((tag, idx) =>
                idx < 2 ? (
                  <span className="tag" key={idx}>
                    {tag}
                  </span>
                ) : null
              )}
            </p> */}
            <h3>{name}</h3>
            <h6>{short_description}</h6>
          </div>
          <div className="card-image">
            <img className="img" src={image} alt={name} />
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
