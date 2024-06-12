import "../styles/ResumeForm.css";
import GeneralInformationForm from "./GeneralInformationForm";
import { useState } from "react";

function ResumeForm(props) {
  const [name, setName] = useState("Ravi Jamanbhai Makwana");
  const [email, setEmail] = useState("ravi.mak2003@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("987654321");

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  function handleFormVisibility() {
    setIsVisibleForm(!isVisibleForm);
  }

  // responsible for calling setter function that updates whole data for parent component (to rerender all its child components and ultimately Resume)
  const onSetData = (data) => {
    props.onSetData(data);
  };

  // responsible for updating inputs of ResumeForm
  function handleChange(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
    }
  }

  let data = { name: name, email: email, phoneNumber: phoneNumber };

  return (
    <div className="resume-form">
      <h1>Resume Form</h1>
      <br></br>

      <div className="general-information-container section-container">
        <div className="general-information-heading-container">
          <h2>General Information</h2>
          {!isVisibleForm && (
            <button
              className="edit-button"
              id="general-information-edit-button"
              onClick={handleFormVisibility}
            >
              Edit
            </button>
          )}
        </div>
        {isVisibleForm && (
          <div className="general-information-form-container">
            <GeneralInformationForm
              data={data}
              handleChange={handleChange}
              onSetData={onSetData}
              handleFormVisibility={handleFormVisibility}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeForm;
