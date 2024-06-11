import "../styles/Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>{props.data.name}</h2>
      <h3>{props.data.email}</h3>
    </div>
  );
}

export default Resume;
