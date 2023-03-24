//EventGallery Component
//Import Event infos
import EventInfo from "./EventInfo";
const EventGallery = (props) => {
  return (
    <section>
      <div className="wrapper">
      <ul className="events">
        {props.currentEvent.map((results) => {
          const events = results.Events;
          return events.map((event, index) => {

            const firstTeam = event.T1;
            let teamName1;
            let teamName2;

            firstTeam.map((team1) => {
               teamName1 = team1.Nm;

            });
            event.T2.map((team2) => {
               teamName2 = team2.Nm;
            });
            return (
              <EventInfo
                key={index}
                league={results.Cnm}
                tournament={results.Snm}
                 nameTeam1={teamName1}
                 nameTeam2={teamName2}
                 scoreTeam1={event.Tr1}
                 scoreTeam2={event.Tr2}
                 set1ScoreTeam1={event.Tr1S1}
                 set2ScoreTeam1={event.Tr1S2}
                 set3ScoreTeam1={event.Tr1S3}
                 set1ScoreTeam2={event.Tr2S1}
                 set2ScoreTeam2={event.Tr2S2}
                 set3ScoreTeam2={event.Tr2S3}
                 time={event.Eps}
                 hour={event.Esd}
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
