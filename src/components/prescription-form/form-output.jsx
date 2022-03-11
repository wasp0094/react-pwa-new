import React, { useState, useEffect } from "react";

import { firestore } from "../../firebase/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function FormOutput() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const prescRef = collection(firestore, "prescriptions");
      onSnapshot(prescRef, (snapshot) => {
        setPrescriptions(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log(prescriptions[0].user.path);
      });
    };

    getData();
  }, []);

  return (
    <div>
      {prescriptions &&
        prescriptions.map((data, idx) => (
          <div className="form-content" key={idx}>
            <p>days: {data.days}</p>
            <p>sets: {data.sets}</p>
            <p>reps: {data.reps}</p>
            <br />
            <br />
          </div>
        ))}
    </div>
  );
}

export default FormOutput;
