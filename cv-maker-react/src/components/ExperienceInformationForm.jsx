function ExperienceInformationForm(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    let companyName = document.querySelector("#companyName").value;
    let positionTitle = document.querySelector("#positionTitle").value;
    let resposibilityForJob = document.querySelector(
      "#resposibilityForJob"
    ).value;
    let workFromDate = document.querySelector("#workFromDate").value;
    let workTillDate = document.querySelector("#workTillDate").value;

    let data = {
      companyName: companyName,
      positionTitle: positionTitle,
      resposibilityForJob: resposibilityForJob,
      workFromDate: workFromDate,
      workTillDate: workTillDate,
    };

    props.onSetData(data);

    props.handleFormVisibility("experienceForm");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="companyName">Company Name: </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={props.data.companyName}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="positionTitle">Position Title: </label>
        <input
          id="positionTitle"
          name="positionTitle"
          type="text"
          value={props.data.positionTitle}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="resposibilityForJob">Responsibility For Job: </label>
        <textarea
          id="resposibilityForJob"
          name="resposibilityForJob"
          cols={40}
          rows={7}
          value={props.data.resposibilityForJob}
          onChange={props.handleChange}
        ></textarea>
        <br></br>

        <label htmlFor="workFromDate">Worked From: </label>
        <input
          id="workFromDate"
          name="workFromDate"
          type="date"
          value={props.data.workFromDate}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="workTillDate">Worked Till: </label>
        <input
          id="workTillDate"
          name="workTillDate"
          type="date"
          value={props.data.workTillDate}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExperienceInformationForm;
