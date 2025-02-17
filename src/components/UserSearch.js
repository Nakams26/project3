// This component is the parent component for the form and EventGallery. I do my API call here and pass data through props

//Import react hooks
import { useEffect, useState } from "react";

//Import axios to do my api call
import axios from "axios";

//Import Component
import Form from "./Form";
import EventGallery from "./EventGallery";

const UserSearch = () => {
  //Initialize state to keep track of the even returned by the API
  const [results, setResults] = useState([]);
  //Initialize state to keep track of the sport selection by the user
  const [sportValue, setSportValue] = useState("placeholder");
  //Initialize state to keep track of the date selection by the user
  const [dateValue, setDateValue] = useState("");
  //Initialize message in case of error
  const [message, setMessage] = useState("")
    //Initialize loading 
    const [loading, setLoading] = useState("")

  //Doing my api call in a useEffect hook because I want it to happen depending on the date and sport value change.
  useEffect(() => {
    // Doing my api call only if a sport was selected.
    if (
      sportValue === "basketball" ||
      sportValue === "tennis" ||
      sportValue === "soccer" ||
      sportValue === "hockey"
    ) {
      // Set loading message
      setLoading("Loading results")
      // Resetting results to avoid the background display issue ()
      setResults([])
      setMessage("")
      axios({
        //URL endpoint
        url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date", //https://livescore6.p.rapidapi.com/matches/v2/list-by-date
        params: {
          Category: sportValue,
          Date: dateValue,
          Timezone: "-4",
        },
        headers: {
          "X-RapidAPI-Key":
            "f6b0e58575mshd91943dd7cf652bp154cb7jsn37f5c73866dd",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      })
        .then((apiData) => {
          setLoading("")
          // Checking if there is events
          if (apiData.data.Stages.length === 0) {
            // No event, I display a message
            setMessage("Sorry, there is no event to display for this date")
          } else {
            setResults(apiData.data.Stages);
          }
          //Updating state status of results and status of api call depending on the result of the call
  
        
        })
        //Catching errors
        .catch((error) => {
          // Error
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx >> Api error to true
            setLoading("")
            setMessage("Sorry an incident occurred, please try again later");
          } else if (error.request) {
            // The request was made but no response was received >> Api error to true
            setLoading("")
            setMessage("Sorry an incident occurred, please try again later");
          } else {
            // Something happened in setting up the request that triggered an Error >> Api error to true
            setLoading("")
            setMessage("Sorry an incident occurred, please try again later");
          }
        });
    }
  }, [sportValue, dateValue]);

  //New function to handle the form submission
  const userChoices = (e, userChoices) => {
    e.preventDefault();
    // If statement to be sure to avoid submission if the user didn't select a sport
    if (userChoices[0] !== "placeholder") {
      //Assign the input value to the sport value
      setSportValue(userChoices[0]);
      //Alert the user if he didn't select a sport.
    } else alert("Please select a sport");

    //Reformatting the date to respect the format asked by the API documentation (need to send YYYYMMDD.I receive YYYY-MM-DD)
    const date = userChoices[1]
    // Using replace method to remove the "-" in my date
    const newDate = date.replace(/-/g,'');
    //Assign the reformatted date to the date value
    setDateValue(newDate);

  };

  return (
    <main>
      {/* Running  the function when submitting the form. Passing the api error as props */}
      <Form handleSubmit={userChoices} message={message} loading={loading}/>
      {/* Passing the results and sport value (I need it for the styling) through props*/}
      <EventGallery
        currentEvent={results}
        sportSelected={sportValue}
      />
    </main>
  );
};

export default UserSearch;
