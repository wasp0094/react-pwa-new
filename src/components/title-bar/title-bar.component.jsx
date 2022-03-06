import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useTitleBar } from "../../context/TitleContext";

function TitleBar() {
  const navigate = useNavigate();
  const { title } = useTitleBar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#fff", color: "#000" }}>
        <Toolbar>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon size="small"></ArrowBackIcon>
          </IconButton>
          <Typography
            variant="h6"
            style={{ textAlign: "center" }}
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBar;
