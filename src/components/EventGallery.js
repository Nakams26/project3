//EventGallery Component. This component display the UL that receive every data and return LI

//Import Event infos (children component)
import EventInfo from "./EventInfo";

const EventGallery = (props) => {
  return (
    <section>
      <div className="wrapper">
        {/* Creating UL */}
        <ul className="events">
          {/* In case that the API call return an error, I alert the user to try again later */}
          {props.apiError ? (
            <h2 className="error">
              <strong>Sorry an incident occurs, please try again later!</strong>
            </h2>
          ) : null}
          {/* Mapping through every results received as I receive it as an array */}
          {props.currentEvent.map((results) => {
            // Creating a variable for every events (Events are array as well)
            const events = results.Events;
            //Mapping through every events. Adding index to use it as Key, because I don't have any consistent id in the API response. I tried multiple but always had errors because of identical key
            return events.map((event) => {
              return (
                <EventInfo
                  // Using props to pass every data that I need on my page
                  // Passing the individual key for each LI
                  key={event.Eid}
                  // Passing league infos
                  league={results.Cnm}
                  tournament={results.Snm}
                  // Passing team infos. I didn't map through teams as there is only 2 teams, didn't seem necessary for me
                  nameTeam1={event.T1[0].Nm}
                  imageTeam1={event.T1[0].Img}
                  nameTeam2={event.T2[0].Nm}
                  imageTeam2={event.T2[0].Img}
                  // Passing global scores
                  scoreTeam1={event.Tr1}
                  scoreTeam2={event.Tr2}
                  //Passing set scores for tennis
                  set1ScoreTeam1={event.Tr1S1}
                  set2ScoreTeam1={event.Tr1S2}
                  set3ScoreTeam1={event.Tr1S3}
                  set1ScoreTeam2={event.Tr2S1}
                  set2ScoreTeam2={event.Tr2S2}
                  set3ScoreTeam2={event.Tr2S3}
                  // Passing times infos
                  time={event.Eps}
                  hour={event.Esd}
                  //Passing the sports selected through props because I need it for styling purposes
                  sport={props.sportSelected}
                />
              );
            });
          })}
        </ul>
      </div>
    </section>
  );
};

export default EventGallery;
