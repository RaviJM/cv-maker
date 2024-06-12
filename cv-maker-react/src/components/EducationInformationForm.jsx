function EducationInformationForm(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    let schoolName = document.querySelector("#schoolName").value;
    let titleOfStudy = document.querySelector("#titleOfStudy").value;
    let dateOfStudy = document.querySelector("#dateOfStudy").value;

    let data = {
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      dateOfStudy: dateOfStudy,
    };

    props.onSetData(data);

    props.handleFormVisibility("educationForm");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="schoolName">School Name: </label>
        <input
          id="schoolName"
          name="schoolName"
          type="text"
          value={props.data.schoolName}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="titleOfStudy">Title Of Study: </label>
        <input
          id="titleOfStudy"
          name="titleOfStudy"
          type="text"
          value={props.data.titleOfStudy}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="dateOfStudy">Date Of Study: </label>
        <input
          id="dateOfStudy"
          name="dateOfStudy"
          type="date"
          value={props.data.dateOfStudy}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <div className="submit-button-container">
          <button type="submit" className="section-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationInformationForm;
