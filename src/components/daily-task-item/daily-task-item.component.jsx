//MaterialUI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";

//React Imports
import { useNavigate } from "react-router-dom";

//Components imports
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import excercises from "../../excercises/excercises";
import "./daily-task-item.styles.css";

function DailyTaskItem({ task, type, task_item }) {
  const navigate = useNavigate();
  const { excerciseVars, setExcerciseVars } = useExcerciseData();
  const { name } = excercises[task]["types"][type];
  const dayNo = Math.floor(
    (new Date() - task_item.created.toDate()) / 86400000
  );
  const doneForToday = task_item.routine[dayNo]?.completed;
  return (
    <div className="daily-task-item">
      <Card sx={{ minWidth: 275, borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button
            disabled={doneForToday}
            size="small"
            onClick={() => {
              setExcerciseVars({
                ...excerciseVars,
                task: task,
                type: type,
                requiredSets: task_item.sets,
                requiredReps: task_item.reps,
                routine_id: task_item.routine_item_id,
              });
              navigate("excercise", { replace: true });
            }}
          >
            {doneForToday ? "Done For Today" : "Start Now"}
          </Button>
          <IconButton>
            <CheckCircleOutlineIcon
              fontSize="small"
              color={doneForToday ? "success" : "action"}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default DailyTaskItem;
