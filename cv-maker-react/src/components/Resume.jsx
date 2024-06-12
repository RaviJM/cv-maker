import "../styles/Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>{props.formData.name || "Ravi Jamanbhai Makwana"}</h2>
      <h3>{props.formData.email || "ravi.mak2003@gmail.com"}</h3>
      <h4>{props.formData.phoneNumber || "987654321"}</h4>
      <br></br>
      <br></br>

      <h4>{props.formData.schoolName || "K.D.A.R.F.S."}</h4>
      <h4>{props.formData.titleOfStudy || "12th"}</h4>
      <h4>{props.formData.dateOfStudy || "2021-07-30"}</h4>
      <br></br>
      <br></br>

      <h4>{props.formData.companyName || "BrainyBeam"}</h4>
      <h4>{props.formData.positionTitle || "Web Developer"}</h4>
      <h4>
        {props.formData.resposibilityForJob ||
          "Making websites for clients as per their needs"}
      </h4>
      <h4>{props.formData.workFromDate || "2024-05-15"}</h4>
      <h4>{props.formData.workTillDate || "2024-06-30"}</h4>
    </div>
  );
}

export default Resume;
