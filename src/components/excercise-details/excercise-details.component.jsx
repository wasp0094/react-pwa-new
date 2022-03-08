import { useParams } from "react-router-dom";
import excercises from "../../excercises/excercises";
import "./excercise-details.styles.css";

function ExcerciseDetails() {
  const { excercise_id } = useParams();
  const { name, image, description, short_description, tags, color } =
    excercises[excercise_id];
  return (
    <div
      className="excercise-details"
      style={{ color: { color }, backgroundImage: `url(${image})` }}
    >
      <div className="excercise-details-container">
        <h1 className="excercise-details-header">{name}</h1>
        <p className="excercise-details-description">
          {short_description} <br /> {description}
        </p>
        <h4>Cautions</h4>
        <p className="excercise-details-description">
          - {short_description} <br /> - {short_description}
        </p>
        <h4>Tags</h4>
        <p>
          {tags.map((tag, idx) =>
            idx < 2 ? (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ) : null
          )}
        </p>
      </div>
    </div>
  );
}

export default ExcerciseDetails;
