function GeneralInformationForm(props) {
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={props.data.name}
          onChange={props.handleChange}
        ></input>
        <br></br>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={props.data.email}
          onChange={props.handleChange}
        ></input>
        <br></br>

        <label htmlFor="phoneNumber">Phone Number: </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          value={props.data.phoneNumber}
          onChange={props.handleChange}
        ></input>
        <br></br>
      </form>
    </div>
  );
}

export default GeneralInformationForm;
