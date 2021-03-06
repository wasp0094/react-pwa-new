import * as React from "react";
import "./home.css";
import FormPopup from "../../components/form-popup/form-popup.component";
import ExploreCategoryLink from "../../components/explore-category-link/explore-category-link.component";
import { Routes, Route } from "react-router-dom";
import { targets } from "../../excercises/excercises";
import { Button } from "@mui/material";
import ExploreCategory from "../../components/explore-category/explore-category.component";
import { useSetTitle } from "../../hooks/setTitle";
import QRPopup from "../../components/qr-popup/qr-popup.component";
import { useUserAuth } from "../../context/UserAuthContext";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import AssignmentIcon from "@mui/icons-material/Assignment";

function HomePage({ handleModalOpen }) {
  useSetTitle("Home");
  const { user } = useUserAuth();
  const { displayName } = user;
  const [open, setOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home-content">
      <div className="welcome">
        <h2>
          Hi, <span className="span-colour">{displayName}</span>
        </h2>
        <h5>Welcome to PROCTIFY!</h5>
      </div>
      <div className="categories">
        <strong>
          <span className="span-colour">Categories</span>
        </strong>
        {user?.isDoctor ? (
          <p>
            Welcome to the Doctor's Portal of Proctify which easily lets you
            keep track of your patients' daily progress. Head over to the end to
            view your assigned patients.
          </p>
        ) : (
          <p>
            Proctify keeps a track of your daily progress. Head towards the end
            to get familiar with the interface. Our app currently focuses on the
            below domains. Explore the categories and get started.
          </p>
        )}

        <div className="category-cards">
          {Object.keys(targets).map((target, idx) => (
            <ExploreCategoryLink key={idx} {...targets[target]} />
          ))}
        </div>
        {user?.isDoctor ? (
          <Button
            href="https://forms.gle/MTg8pBaexDxs1CcS9/"
            target="_blank"
            variant="contained"
            startIcon={<AssignmentIcon />}
            sx={{ marginBottom: "0.5rem" }}
          >
            Request Custom Exercise
          </Button>
        ) : (
          <Button
            onClick={handleModalOpen}
            variant="contained"
            startIcon={<BorderColorIcon />}
            sx={{ marginBottom: "0.5rem" }}
          >
            Set Your Prescription
          </Button>
        )}
        {user && !user?.isDoctor && !user?.doctorAllocatted && (
          <>
            <br />
            <br />
            {/* <hr style={{ width: '80vw' }} /> */}
            <Button
              onClick={handleDialogOpen}
              variant="outlined"
              startIcon={<QrCode2Icon />}
            >
              Get Doctor
            </Button>
          </>
        )}
        <QRPopup open={open} onClose={handleClose} />
        {/* <Button component={Link} to="/chat">
          CALL A DOCTOR
        </Button> */}
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage {...props} />} />
      <Route path={"/:explore_category"} element={<ExploreCategory />} />
    </Routes>
  );
}

export default FormPopup(Home);
