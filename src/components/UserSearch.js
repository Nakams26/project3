//Import useState
import { useEffect, useState } from "react";
//Import axios
import axios from "axios";
//Import Component
import Form from "./Form";
import EventGallery from "./EventGallery";

const UserSearch = () => {
  //Initialize state to keep track of the even returned by the API
  const [results, setResults] = useState([]);
  //Initialize state to keep track of the sport selection by the user
  const [sportValue, setSportValue] = useState("placeholder");
  //Initialize state to keep track of the sport selection by the user
  const [dateValue, setDateValue] = useState("");

  useEffect(() => {
    axios({
      //URL endpoint
      url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date", //https://livescore6.p.rapidapi.com/matches/v2/list-by-date
      params: {
        Category: sportValue,
        Date: dateValue,
        Timezone: "-5",
      },
      headers: {
        "X-RapidAPI-Key": "f41054b742msh9578c6817557443p1785aajsna650c985541f",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    }).then((apiData) => {
      console.log(apiData.data.Stages);
      setResults(apiData.data.Stages);
    });
  }, [sportValue, dateValue]);

  //New function to handle the form submission
  const userChoices = (e, userChoices) => {
    e.preventDefault();
    //Alert user that he has to select a sport first before submit
    if (userChoices[0] !== "placeholder") {
      //Assign the input value to the sport value
      setSportValue(userChoices[0]);
    } else alert("Please select a sport");
    //Reformatting the date to respect the format asked by the API documentation
    const date = new Date(userChoices[1]);
    const formattedDate = `${date.getFullYear()}${"0" + (date.getMonth() + 1)}${
      date.getDate() + 1
    }`;
    //Assign the reformatted date to the date value
    setDateValue(formattedDate);
  };

  return (
    <main>
      {/* Running  the function when submitting the form */}
      <Form handleSubmit={userChoices} />
      <EventGallery currentEvent={results} />
    </main>
  );
};

export default UserSearch;
