import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DailyTaskItem() {
  const navigate = useNavigate();
  return (
    <div className="daily-task-item">
      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small" onClick={() => navigate("/excercise")}>
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
