import Resume from "./Resume";
import ResumeForm from "./ResumeForm";
import "../styles/Container.css";

function Container() {
  return (
    <div className="container">
      <ResumeForm />
      <Resume />
    </div>
  );
}

export default Container;
