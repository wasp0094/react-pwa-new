import React from "react";
// import '../Explore.css';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";

function DailyTask() {
  return (
    <>
      <div>
        <h4>daily tasks</h4>
      </div>
      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small">Start Now</Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small">Start Now</Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small">Start Now</Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small">Start Now</Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275, background: "#d7e3fc", borderRadius: "13px" }}>
        <CardContent sx={{ padding: "6px 15px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise tag
          </Typography>
          <Typography variant="h6" component="div">
            Exercise Name/Title
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
        </CardContent>
        <CardActions sx={{ padding: "4px 15px" }}>
          <Button size="small">Start Now</Button>
          <IconButton>
            <CheckCircleOutlineIcon fontSize="small" color="action" />
          </IconButton>
        </CardActions>
      </Card>
      <Box sx={{ marginBottom: "5rem" }}></Box>
    </>
  );
}

export default DailyTask;
