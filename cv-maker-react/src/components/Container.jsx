import Resume from "./Resume";
import ResumeForm from "./ResumeForm";
import "../styles/Container.css";
import { useState } from "react";

function Container() {
  const [formData, setFormData] = useState({});

  // responsible for updating whole data for parent component (to rerender all its child components)
  function handleSetData(data) {
    setFormData(data);
  }

  return (
    <div className="container">
      <ResumeForm onSetData={handleSetData} />
      <Resume formData={formData} />
    </div>
  );
}

export default Container;
