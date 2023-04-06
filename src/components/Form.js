//Form component. This contain the form and some explanation text
//import useState
import { useState } from "react";

const Form = (props) => {
  //Initialize state to keep track of the sports selected by the user
  const [sportSelected, setSportSelected] = useState("placeholder");
  //Initialize state to keep track of the date selected by the user
  const [dateSelected, setDateSelected] = useState("");

  //Creating a function to follow every change in the sport selection
  const handleChangeSport = (e) => {
    setSportSelected(e.target.value);
  };

  //Creating a function to follow every change in the date selection
  const handleChangeDate = (e) => {
    setDateSelected(e.target.value);
  };

  return (
    <section className="formSection">
      <div className="wrapper flexForm">
        <div className="form">
          <h3>How to get my scores?</h3>
          <p>
            Please fill the form below! Select a sport, a date and click on "Get
            me scores"!
          </p>
          {/* On submit I apply the handleSubmit function passed through props from the UserSearch component. */}
          <form
            action=""
            onSubmit={(event) => {
              props.handleSubmit(event, [sportSelected, dateSelected]);
            }}
          >
            {/* Menu sport selection */}
            <label htmlFor="sportSelection" className="sr-only">
              Select a sport
            </label>
            {/* Updating the value on the select menu with the sport selected, apply the handle change function when the select value change */}
            <select
              onChange={handleChangeSport}
              value={sportSelected}
              name="sportSelection"
              id="sportSelection"
            >
              <option value="placeholder" disabled>
                Select a sport
              </option>
              <option value="basketball">Basket-Ball</option>
              <option value="soccer">Soccer</option>
              <option value="hockey">Hockey</option>
              <option value="tennis">Tennis</option>
            </select>
            <label htmlFor="dateSelection" className="sr-only">
              Select a date
            </label>
            {/* Updating the value on the date  with the date selected, apply the handle change date function when the date value change */}
            <input
              type="date"
              onChange={handleChangeDate}
              value={dateSelected}
              name="dateSelection"
              id="dateSelection"
              required
            ></input>
            <button type="submit">Get me scores!</button>
          </form>
          <p className="loading">{props.loading}</p>
          <p className="errorMessage">{props.message}</p>
        </div>
        {/* Adding text explanation to help read results */}
        <div className="textForm">
          <h3>How to read my scores?</h3>
          <div className="flexText">
            <div className="textExplainOne">
              <p>
                <strong>NS:</strong> Not started
              </p>
              <p>
                <strong>HT:</strong> Half time
              </p>
              <p>
                <strong>FT:</strong> Full time
              </p>
              <p>
                <strong>OT:</strong> Overtime
              </p>
              <p>
                <strong>Canc:</strong> Cancelled
              </p>
              <p>
                <strong>Int.:</strong> Interrupted
              </p>
              <p>
                <strong>Postp: </strong> Postponed
              </p>
            </div>

            <div className="textExplainTwo">
              <p>
                <strong>W.O.:</strong> Walk off
              </p>
              <p>
                <strong>Ret: </strong> Retired
              </p>
              <p>
                <strong>ToFi: </strong> To finish
              </p>
              <p>
                <strong>🎾 S1:</strong> First set
              </p>
              <p>
                <strong>🏒 P1:</strong> First period
              </p>
              <p className="quarter">
                <strong> 🏀 1Q:</strong> First Quarter
              </p>
              <div className="live">
                <div className="dot liveEvent"></div>Live event
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
