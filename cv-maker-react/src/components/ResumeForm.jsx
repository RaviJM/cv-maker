import "../styles/ResumeForm.css";
import GeneralInformationForm from "./GeneralInformationForm";
import { useState } from "react";

function ResumeForm(props) {
  const [name, setName] = useState("Ravi Jamanbhai Makwana");
  const [email, setEmail] = useState("ravi.mak2003@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("987654321");

  function handleChange(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  }

  let data = { name: name, email: email, phoneNumber: phoneNumber };

  return (
    <div className="resume-form">
      <h1>Resume Form</h1>
      <GeneralInformationForm data={data} handleChange={handleChange} />
    </div>
  );
}

export default ResumeForm;
