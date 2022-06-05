import * as React from "react";
import { allocateDoctor } from "../../firebase/firebase";
import { QrReader } from "react-qr-reader";
import Dialog from "@mui/material/Dialog";
import { useUserAuth } from "../../context/UserAuthContext";
import "./qr-popup.component.css";

export default function QRPopup(props) {
  const { user } = useUserAuth();
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open} className="qr-code-dialog">
      <p className="title">Scan Doctor's QR Code </p>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            let doctorId = result?.text;
            if (doctorId.length === 28) {
              allocateDoctor(doctorId, user.uid);
              console.log(doctorId);
              handleClose();
            }
          }
          if (!!error) {
            console.info(user.uid);
          }
        }}
        constraints={{ facingMode: "environment" }}
        style={{ width: "20%" }}
        scanDelay={500}
        className="qr-reader"
      />
    </Dialog>
  );
}
