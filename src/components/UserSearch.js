//Import useState
import { useEffect, useState } from "react";
//Import axios
import axios from "axios";
//Import Component
import Form from "./Form";
import EventGallery from "./EventGallery";

const UserSearch = () => {
  //Initialize state to keep track of the even returned by the API
  const [event, setEvent] = useState([]);
  //Initialize state to keep track of the sport selection by the user
  const [sportValue, setSportValue] = useState(null);
  //Initialize state to keep track of the sport selection by the user
  const [dateValue, setDateValue] = useState(null);

  useEffect(()=>{
    axios({
      //URL endpoint
      url: "https:/", //https://livescore6.p.rapidapi.com/matches/v2/list-by-date
      params: { 
        Category: sportValue,
         Date: dateValue, 
         Timezone: "-7" },
      headers: {
        "X-RapidAPI-Key": "f41054b742msh9578c6817557443p1785aajsna650c985541f",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    }).then((apiData) => {
      console.log(apiData.data.Stages);
      setEvent(apiData.data.Stages);
    });
      },[sportValue])

//New function to handle the form submission
const userChoices = (e, userChoices) => {
  e.preventDefault();
  setSportValue(userChoices[0])

  //Reformatting the date to respect the formats asked by the API documentation
  const date = new Date(userChoices[1])
  // console.log(date)
  const formattedDate = `${date.getFullYear()}${'0'+ (date.getMonth()+1)}${date.getDate()+1}`;
  // console.log(dateMDY)
   setDateValue(formattedDate)
}


  return (
    <main>
      <Form handleSubmit={userChoices}/>
      <EventGallery currentEvent={event}/>
    </main>
  );
};

export default UserSearch;
