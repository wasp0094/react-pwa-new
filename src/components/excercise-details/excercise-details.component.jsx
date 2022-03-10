import { useParams } from "react-router-dom";
import excercises from "../../excercises/excercises";

function ExcerciseDetails() {
  const { excercise_id } = useParams();
  const { name, image, id } = excercises[excercise_id];
  return (
    <div className="excercise-details">
      <div className="excercise-details-header">{name}</div>
      <img src={image} alt={id} />
    </div>
  );
}

export default ExcerciseDetails;
