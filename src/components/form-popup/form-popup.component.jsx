import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FormComponent from "../prescription-form/form-item";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FormPopup(WrappedComponent) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return function ({ preDefined, excercise, ...otherProps }) {
    return (
      <>
        <WrappedComponent handleModalOpen={handleOpen} {...otherProps} />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Set Prescription
              </Typography>
              <Box id="transition-modal-description" sx={{ mt: 2 }}>
                <FormComponent
                  preDefined={preDefined}
                  excerciseName={excercise}
                />
              </Box>
            </Box>
          </Fade>
        </Modal>
      </>
    );
  };
}

export default FormPopup;
