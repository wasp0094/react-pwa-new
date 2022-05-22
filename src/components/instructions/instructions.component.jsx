import "./instructions.styles.css";

// import instruction from "../../assets/banner1.jpg";

function Instructions(props) {
  const { handleExcerciseStart, instructions } = props;
  const handleClick = (e) => {
    handleExcerciseStart(0);
  };
  return (
    <div className="instruction">
      {/* <img
        src={instruction}
        alt="instruction"
        className="img-fluid instruction-image"
      /> */}
      <h2>INSTRUCTIONS</h2>
      <div className="rules">
        {instructions.map((rule, idx) => (
          <p key={idx} className="rule">
            # {rule}
          </p>
        ))}
      </div>
      <h2>
        <button className="btn-success start-button" onClick={handleClick}>
          Start
        </button>
      </h2>
    </div>
  );
}

export default Instructions;
