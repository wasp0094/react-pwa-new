import React from "react";
import "./explore.styles.css";
import { IconButton } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExploreItem from "../../components/explore-item/explore-item.component";

function Explore() {
  return (
    <main className="explore">
      <div className="explore-header">
        <h3 className="explore-heading">Explore</h3>
        <IconButton>
          <SortIcon fontSize="small" color="action" />
        </IconButton>
      </div>
      <ExploreItem color="#FFEBB5" />
      <ExploreItem color="#FFD0CF" />
      <ExploreItem color="#FFEBB5" />
      <ExploreItem color="#FFEBB5" />
    </main>
  );
}

export default Explore;
