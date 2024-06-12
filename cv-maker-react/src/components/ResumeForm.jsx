import { useState } from "react";
import "../styles/ResumeForm.css";
import "../styles/AllForms.css";
import GeneralInformationForm from "./GeneralInformationForm";
import EducationInformationForm from "./EducationInformationForm";
import ExperienceInformationForm from "./ExperienceInformationForm";

function ResumeForm(props) {
  const [name, setName] = useState("Ravi Jamanbhai Makwana");
  const [email, setEmail] = useState("ravi.mak2003@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("987654321");

  const [schoolName, setSchoolName] = useState("K.D.A.R.F.S.");
  const [titleOfStudy, setTitleOfStudy] = useState("12th");
  const [dateOfStudy, setDateOfStudy] = useState("2021-07-30");

  const [companyName, setCompanyName] = useState("BrainyBeam");
  const [positionTitle, setPositionTitle] = useState("Web Developer");
  const [resposibilityForJob, setResponsibilityForJob] = useState(
    "Making websites for clients as per their needs"
  );
  const [workFromDate, setworkFromDate] = useState("2024-05-15");
  const [workTillDate, setWorkTillDate] = useState("2024-06-30");

  const [isGeneralFormVisible, setIsGeneralFormVisible] = useState(false);
  const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
  const [isExperienceFormVisible, setIsExperienceFormVisible] = useState(false);

  // function that handles (toggles) form visibility for all forms
  function handleFormVisibility(e) {
    let calledFromForm = "";

    // if function is called on clicking edit button
    if (e.target != undefined) {
      calledFromForm = e.target.id;
    } else {
      // if function is called from submit button of any form
      calledFromForm = e;
    }

    switch (calledFromForm) {
      case "general-information-edit-button":
      case "generalForm":
        setIsGeneralFormVisible(!isGeneralFormVisible);
        break;
      case "education-information-edit-button":
      case "educationForm":
        setIsEducationFormVisible(!isEducationFormVisible);
        break;

      case "experience-information-edit-button":
      case "experienceForm":
        setIsExperienceFormVisible(!isExperienceFormVisible);
        break;
    }
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
      case "schoolName":
        setSchoolName(e.target.value);
        break;
      case "titleOfStudy":
        setTitleOfStudy(e.target.value);
        break;
      case "dateOfStudy":
        setDateOfStudy(e.target.value);
        break;
      case "companyName":
        setCompanyName(e.target.value);
        break;
      case "positionTitle":
        setPositionTitle(e.target.value);
        break;
      case "resposibilityForJob":
        setResponsibilityForJob(e.target.value);
        break;
      case "workFromDate":
        setworkFromDate(e.target.value);
        break;
      case "workTillDate":
        setWorkTillDate(e.target.value);
      default:
        break;
    }
  }

  let data = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    schoolName: schoolName,
    titleOfStudy: titleOfStudy,
    dateOfStudy: dateOfStudy,
    companyName: companyName,
    positionTitle: positionTitle,
    resposibilityForJob: resposibilityForJob,
    workFromDate: workFromDate,
    workTillDate: workTillDate,
  };

  return (
    <div className="resume-form">
      <h1>Resume Form</h1>

      <div className="forms-container">
        <div className="general-information-container section-container">
          <div className="general-information-heading-container section-heading-container">
            <h2>General Information</h2>
            {!isGeneralFormVisible && (
              <button
                className="edit-button"
                id="general-information-edit-button"
                onClick={handleFormVisibility}
              >
                Edit
              </button>
            )}
          </div>
          {isGeneralFormVisible && (
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

        <div className="education-information-container section-container">
          <div className="education-information-heading-container section-heading-container">
            <h2>Education Information</h2>
            {!isEducationFormVisible && (
              <button
                className="edit-button"
                id="education-information-edit-button"
                onClick={handleFormVisibility}
              >
                Edit
              </button>
            )}
          </div>
          {isEducationFormVisible && (
            <div className="education-information-form-container">
              <EducationInformationForm
                data={data}
                handleChange={handleChange}
                onSetData={onSetData}
                handleFormVisibility={handleFormVisibility}
              />
            </div>
          )}
        </div>

        <div className="experience-information-container section-container">
          <div className="experience-information-heading-container section-heading-container">
            <h2>Experience Information</h2>
            {!isExperienceFormVisible && (
              <button
                className="edit-button"
                id="experience-information-edit-button"
                onClick={handleFormVisibility}
              >
                Edit
              </button>
            )}
          </div>
          {isExperienceFormVisible && (
            <div className="experience-information-form-container">
              <ExperienceInformationForm
                data={data}
                handleChange={handleChange}
                onSetData={onSetData}
                handleFormVisibility={handleFormVisibility}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
