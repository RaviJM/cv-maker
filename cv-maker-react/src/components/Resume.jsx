import "../styles/Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <div className="resume-sheet">
        <h1>Resume</h1>

        <div className="resume-section" id="general-information">
          <h2>{props.formData.name || "Ravi Jamanbhai Makwana"}</h2>
          <h3 id="emaill">
            {" "}
            Email: {props.formData.email || "ravi.mak2003@gmail.com"}
          </h3>
          <h3 id="phone">
            Phone No: {props.formData.phoneNumber || "987654321"}
          </h3>
        </div>

        <div className="resume-section">
          <h3>Education:</h3>
          <p>School Name: {props.formData.schoolName || "K.D.A.R.F.S."}</p>
          <p>Title: {props.formData.titleOfStudy || "12th"}</p>
          <p>Date of Study: {props.formData.dateOfStudy || "2021-07-30"}</p>
        </div>

        <div className="resume-section">
          <h3>Experience:</h3>
          <p>Company Name: {props.formData.companyName || "BrainyBeam"}</p>
          <p>
            Position Title: {props.formData.positionTitle || "Web Developer"}
          </p>
          <p>
            Responsibility For Job:
            {props.formData.resposibilityForJob ||
              "Making websites for clients as per their needs"}
          </p>
          <p>Work From Date: {props.formData.workFromDate || "2024-05-15"}</p>
          <p>Work Till Date: {props.formData.workTillDate || "2024-06-30"}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
