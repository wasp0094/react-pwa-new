import "./instructions.styles.css";

function Instructions(props) {
  const { handleExcerciseStart, instructions, instructions_video } = props;
  const handleClick = (e) => {
    handleExcerciseStart(1);
  };
  return (
    <div className="instruction">
      <h2>INSTRUCTIONS</h2>
      <div className="rules">
        {instructions.map((rule, idx) => (
          <p key={idx} className="rule">
            # {rule}
          </p>
        ))}
      </div>
      <iframe
        width="auto"
        height="auto"
        src={`https://www.youtube.com/embed/${instructions_video}`}
        title="YouTube video player"
        frameBorder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>
        <button className="btn-success start-button" onClick={handleClick}>
          Start
        </button>
      </h2>
    </div>
  );
}

export default Instructions;
