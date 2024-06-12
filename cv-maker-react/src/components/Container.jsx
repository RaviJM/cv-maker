import Resume from "./Resume";
import ResumeForm from "./ResumeForm";
import "../styles/Container.css";
import { useState } from "react";

function Container() {
  const [formData, setFormData] = useState({});

  // responsible for updating whole data for parent component (to rerender all its child components)
  function handleSetData(newData) {
    let combinedNewData = { ...formData, ...newData };

    setFormData(combinedNewData);
  }

  return (
    <div className="container">
      <ResumeForm onSetData={handleSetData} />
      <Resume formData={formData} />
    </div>
  );
}

export default Container;
