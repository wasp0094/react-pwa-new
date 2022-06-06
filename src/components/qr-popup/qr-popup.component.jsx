import * as React from "react";
import { allocateDoctor } from "../../firebase/firebase";
import { QrReader } from "react-qr-reader";
import Dialog from "@mui/material/Dialog";
import { useUserAuth } from "../../context/UserAuthContext";
import "./qr-popup.component.css";

export default function QRPopup(props) {
  const { user } = useUserAuth();
  const [name, setName] = React.useState("Dr. John Doe");
  const [accepted, setAccepted] = React.useState(false);
  const { onClose, open } = props;
  const handleClose = () => {
    setTimeout(function () {
      onClose();
    }, 4000);
  };
  return (
    <Dialog onClose={handleClose} open={open} className="qr-code-dialog">
      {!accepted && (
        <>
          <p className="title">Scan Doctor's QR Code </p>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                let obj = JSON.parse(result?.text);
                const doctorId = obj.id;
                setName(obj.name);
                if (doctorId.length === 28) {
                  allocateDoctor(doctorId, user.uid);
                  setAccepted(true);
                  handleClose();
                }
              }
              if (!!error) {
                // console.info(user.uid);
              }
            }}
            constraints={{ facingMode: "environment" }}
            style={{ width: "20%" }}
            scanDelay={500}
            className="qr-reader"
          />
        </>
      )}
      {accepted && (
        <>
          <p className="title">🎊Congratulations🎊</p>
          <br />
          <h5>Allocatted</h5>
          <span className="span-colour">{`👨‍⚕️ ${name}`}</span>
        </>
      )}
    </Dialog>
  );
}
