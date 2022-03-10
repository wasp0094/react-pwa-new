import React, { useState, useEffect } from "react";

import { firestore } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function FormOutput() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const formData = await getDocs(collection(firestore, "prescriptionData"));
      // console.log(parkingData);
      setPrescriptions(
        formData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(formData);
    };

    getData();
  }, []);

  return (
    <div>
      {prescriptions.map((data) => (
        <div className="form-content" key={data.id}>
          <p>exercise: {data.exercise}</p>
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
