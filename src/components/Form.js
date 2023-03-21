//Form component
//import useState
import { useState } from "react";

const Form = () => {
  //Initialize state to keep track of the sports selected by the user 
  const [sportSelected, setSportSelected] = useState("placeholder");
    //Initialize state to keep track of the date selected by the user 
  const [dateSelected, setDateSelected] = useState("");

  //Creating a function to follow every change in the sport selection
  const handleChangeSport = (e) => {
     console.log(e.target.value);
    setSportSelected(e.target.value);
  };


  //Creating a function to follow every change in the date selection
  const handleChangeDate = (e) => {
    console.log(e.target.value);
    setDateSelected(e.target.value);
  };

  
  return (
    
    <section className="formSection wrapper">
      <h2>
        Please select above a sport and a date to display the related event
      </h2>
      <form action="">
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
          <option value="soccer">Soccer</option>
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
        >

        </input>
      </form>
    </section>
  );
};

export default Form;
