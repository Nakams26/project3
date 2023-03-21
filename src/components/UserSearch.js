//Import useState
import { useState } from "react";

//Import axios
import axios from "axios";

import Form from "./Form";

const UserSearch = () => {
  //Initialize state to keep track of the even returned by the API
  const [event, setEvent] = useState([]);

    //test API
    axios({
      //URL endpoint
      url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date",
      params: { Category: "soccer", Date: "20230321", Timezone: "-7" },
      headers: {
        "X-RapidAPI-Key": "f41054b742msh9578c6817557443p1785aajsna650c985541f",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    }).then((apiData) => {
      console.log(apiData.data.Stages);
      setEvent(apiData.data.Stages);
    });


  return (
    <main>
   <Form/>
  </main>
  )
};

export default UserSearch;
