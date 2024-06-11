import Resume from "./Resume";
import ResumeForm from "./ResumeForm";
import "../styles/Container.css";
import { useState } from "react";

function Container() {
  const [formData, setFormData] = useState({});

  //   make a function that is passed to child and that calls setter function for while data (so that <Resume> updates! The function should be called upon submission of form so that Resume is only updated upon trigger)

  return (
    <div className="container">
      <ResumeForm />
      {/* <Resume /> */}
    </div>
  );
}

export default Container;
