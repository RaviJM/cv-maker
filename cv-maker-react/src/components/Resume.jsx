import "../styles/Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>{props.formData.name}</h2>
      <h3>{props.formData.email}</h3>
      <h4>{props.formData.phoneNumber}</h4>
      <br></br>
      <br></br>

      <h4>{props.formData.schoolName}</h4>
      <h4>{props.formData.titleOfStudy}</h4>
      <h4>{props.formData.dateOfStudy}</h4>
      <br></br>
      <br></br>

      <h4>{props.formData.companyName}</h4>
      <h4>{props.formData.positionTitle}</h4>
      <h4>{props.formData.resposibilityForJob}</h4>
      <h4>{props.formData.workFromDate}</h4>
      <h4>{props.formData.workTillDate}</h4>
    </div>
  );
}

export default Resume;
