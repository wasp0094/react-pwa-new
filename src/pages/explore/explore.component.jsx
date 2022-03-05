import React from "react";
import Workout from "../../assets/Workout-bro.svg";
import "./explore.styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BottomNav from "../../components/bottom-nav/bottom-nav.component";

function Explore() {
  return (
    <>
      <main>
        <div className="content-page">
          <div className="explore">
            <h2>Explore</h2>
            {/* <IconButton><SortIcon fontSize='small' color="action" /></IconButton> */}
          </div>
          <div className="explore-cards">
            <div className="domain">
              <hr></hr>
              <p>DIABETES</p>
              <hr></hr>
            </div>
            <div className="card diabetes-bicep-curl">
              <Accordion sx={{ background: "rgb(255 210 217)" }}>
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
                      tag: diabetes
                    </p>
                    <h3>Dumbell Bicep Curl</h3>
                    <h6>
                      A lifestyle therapy for prevention and treatment of
                      diabetes.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    The dumbbell bicep curls exercise is a weight-training
                    exercise that works the muscles of the upper arm, and to a
                    lesser extent, those of the lower arm. It's a great exercise
                    for seeing results in strength and definition in your arms.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card diabetes-lunges">
              <Accordion sx={{ background: "#faf3b3" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#f2e893", fontWeight: "600" }}
                    >
                      tag: diabetes
                    </p>
                    <h3>Lunges</h3>
                    <h6>
                      A lifestyle therapy for prevention and treatment of
                      diabetes.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Lunges refer to any position of the human body where one leg
                    is positioned forward with knee bent and foot flat on the
                    ground while the other leg is positioned behind. Strengthen
                    your lower body and increase your core strength with lunges!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card diabetes-sidekick">
              <Accordion sx={{ background: "#afc3ff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#94afff", fontWeight: "600" }}
                    >
                      tag: diabetes
                    </p>
                    <h3>Side Kick</h3>
                    <h6>
                      A lifestyle therapy for prevention and treatment of
                      diabetes.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    This is a simple yet dynamic exercise that benefits the
                    legs, glutes, and core muscles. You can expect to see
                    improvements in your stability and an increase in muscle
                    strength. Yes it's that helpful!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card diabetes-squats">
              <Accordion sx={{ background: "rgb(255 210 217)" }}>
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
                      tag: diabetes
                    </p>
                    <h3>Squats</h3>
                    <h6>
                      A lifestyle therapy for prevention and treatment of
                      diabetes.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Squats refer to crouching. Gift yourself with better
                    flexibility and mobility, burn extra calories, and increase
                    your core strength. Feel fresh once done!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="domain">
              <hr></hr>
              <p>ELBOW</p>
              <hr></hr>
            </div>
            <div className="card elbow-flexion">
              <Accordion sx={{ background: "#faf3b3" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#f2e893", fontWeight: "600" }}
                    >
                      tag: Elbow
                    </p>
                    <h3>Elbow Flexion</h3>
                    <h6>
                      Swelling, stiffness and hindered motion after fracture/
                      burns.{" "}
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Elbow flexion aims at restoring elbow's extension motion.
                    This gives an exercise to the elbow joint thus, helping to
                    bring the motion back about the joint. Yay, you got this!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card elbowShoulder-elevation">
              <Accordion sx={{ background: "#afc3ff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#94afff", fontWeight: "600" }}
                    >
                      tag: Elbow
                    </p>
                    <h3>Shoulder Elevation</h3>
                    <h6>
                      Stiffness and hindered motion of shoulder after elbow
                      fracture.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    This exercise helps in improving the shoulder joint motion
                    which gets hindered due to prolonged fracture plaster.
                    Simply grasp your hand and elevate it to the maximum point
                    where you can take it to. Yes! it's that simple.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="domain">
              <hr></hr>
              <p>KNEE</p>
              <hr></hr>
            </div>
            <div className="card knee-extension">
              <Accordion sx={{ background: "rgb(255 210 217)" }}>
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
                      tag: Knee
                    </p>
                    <h3>Knee Extension</h3>
                    <h6>
                      Stiffness and hindered motion after fracture/ burns in
                      knee joint.
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Knee extension is a resistance training exercise. Simply
                    contract your quadriceps muscles to extend the lower leg
                    until the whole leg is sticking straight out. For the rest,
                    we'll take care. Go ahead!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="domain">
              <hr></hr>
              <p>SHOULDER</p>
              <hr></hr>
            </div>
            <div className="card shoulder-abduction">
              <Accordion sx={{ background: "#faf3b3" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#f2e893", fontWeight: "600" }}
                    >
                      tag: Shoulder
                    </p>
                    <h3>Shoulder Abduction</h3>
                    <h6>
                      Characterized by pain and stiffness in the shoulder joint.{" "}
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Shoulder abduction involves moving your arm in the same
                    plane as that of your chest. It is generally implemented
                    through wall sliding, a resisted range of motion exercising
                    technique. Do try this out, if needed!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card shoulder-flexion">
              <Accordion sx={{ background: "#afc3ff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="card-content">
                    <p
                      style={{ backgroundColor: "#94afff", fontWeight: "600" }}
                    >
                      tag: Shoulder
                    </p>
                    <h3> Shoulder Flexion</h3>
                    <h6>
                      Characterized by pain and stiffness in the shoulder joint.{" "}
                    </h6>
                  </div>
                  <div className="card-image">
                    <img className="img" src={Workout} alt="image" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ color: "rgb(7, 7, 98)", fontSize: "13px" }}
                  >
                    Shoulder flexion involves picking your arms up and raising
                    them overhead. This gives an exercise to the joint and
                    muscles of shoulder thus, helping to bring the motion back
                    about the joint. Yes, it's that's simple!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <BottomNav />
      </main>
    </>
  );
}

export default Explore;
