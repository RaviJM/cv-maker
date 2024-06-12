function GeneralInformationForm(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phoneNumber = document.querySelector("#phoneNumber").value;

    let data = { name: name, email: email, phoneNumber: phoneNumber };

    props.onSetData(data);

    props.handleFormVisibility("generalForm");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={props.data.name}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={props.data.email}
          onChange={props.handleChange}
          autoComplete="on"
        ></input>
        <br></br>

        <label htmlFor="phoneNumber">Phone Number: </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          value={props.data.phoneNumber}
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

export default GeneralInformationForm;
