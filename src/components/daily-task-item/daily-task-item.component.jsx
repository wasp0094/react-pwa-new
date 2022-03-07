import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useExcerciseData } from "../../context/ExcerciseDataContext";
import excercises from "../../excercises/excercises";
import "./daily-task-item.styles.css";

function DailyTaskItem({ task, type }) {
  const navigate = useNavigate();
  const { excerciseVars, setExcerciseVars } = useExcerciseData();
  const { tags } = excercises[task];
  const { name } = excercises[task]["types"][type];
  return (
    <div className="daily-task-item">
      <Card sx={{ minWidth: 275, borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <div className="tags">
            {tags.map((tag, idx) => (
              <Typography
                key={idx}
                sx={{ fontSize: "0.6em" }}
                color="text.secondary"
                className="tag"
              >
                {tag}
              </Typography>
            ))}
          </div>

          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button
            size="small"
            onClick={() => {
              setExcerciseVars({ ...excerciseVars, task: task, type: type });
              navigate("excercise", { replace: true });
            }}
          >
            Start Now
          </Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default DailyTaskItem;
