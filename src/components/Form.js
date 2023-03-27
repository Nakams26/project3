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
      <h3>
        How to get my scores?
      </h3>
      <p>Please fill the form below! Select a sport, a date and click on "Get me scores"!</p>
      <form action="" onSubmit={(event)=>{props.handleSubmit(event,[sportSelected,dateSelected])}}>
      {props.formError ? (
        <h2 className="error">
          <strong>Sorry an incident occurs, please try again later!</strong>
        </h2>
      ) : null}
        <label htmlFor="sportSelection" className="sr-only">
          Select a sport
        </label>
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
          <option value="hockey">Hockey</option>
          <option value="tennis">Tennis</option>
        </select>
        <label htmlFor="dateSelection" className="sr-only">
          Select a date
        </label>
        <input
        type="date"
          onChange={handleChangeDate}
          value={dateSelected}
          name="dateSelection"
          id="dateSelection"
          required
        >

        </input>
        <button type="submit">Get me scores!</button>
      </form>
      </div>
      <div className="textForm">
      <h3>
        How to read my scores?
      </h3>
      <p><strong>FT:</strong> Full time <strong>HT:</strong> Half time <strong>NS:</strong> Non started <strong>W.O.:</strong> Walk off </p>
      <p> <strong>OT:</strong> Overtime <strong>🔴:</strong>  Live event</p>
      <p><strong>🎾 S1:</strong> Set number 1 | <strong>🏒 P1:</strong> Period number 1 | <strong> 🏀 1Q:</strong> First Quarter</p>
      </div>
      </div>
    </section>
  );
};

export default Form;
