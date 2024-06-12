import "../styles/Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>{props.formData.name}</h2>
      <h3>{props.formData.email}</h3>
      <h4>{props.formData.phoneNumber}</h4>
    </div>
  );
}

export default Resume;
