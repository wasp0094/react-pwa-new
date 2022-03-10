import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./explore-category-link.styles.css";

function ExploreCategoryLink({ src, name, id }) {
  return (
    <Link to={`${id}`}>
      <IconButton>
        <div className="explore-category-link">
          <Avatar
            className="explore-category-link-image"
            src={src}
            sx={{ width: 96, height: 96 }}
          />
          <span className="explore-category-link-name">{name}</span>
        </div>
      </IconButton>
    </Link>
  );
}

export default ExploreCategoryLink;
