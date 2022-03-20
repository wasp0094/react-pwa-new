import "./explore.styles.css";
import excercises, { targets } from "../../excercises/excercises";
import ExploreItem from "../../components/explore-item/explore-item.component";
import { useSetTitle } from "../../hooks/setTitle";
function Explore() {
  useSetTitle("Explore");
  return (
    <div className="explore">
      {/* <h4 className="explore-header">Explore</h4> */}
      <div style={{ paddingBottom: "4rem" }}>
        {Object.keys(targets).map((target, idx) => (
          <div className="explore-domains" key={idx}>
            <div className="domain">
              <hr></hr>
              <p>{target.toUpperCase()}</p>
              <hr></hr>
            </div>
            {Object.keys(excercises).map((excercise, idx) =>
              excercises[excercise].tags.includes(target) ? (
                <ExploreItem key={idx} {...excercises[excercise]} />
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
