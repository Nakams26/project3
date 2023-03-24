//EventGallery Component
//Import Event infos
import EventInfo from "./EventInfo";
const EventGallery = (props) => {
  return (
    <section>
      <ul className="events">
        {props.currentEvent.map((results) => {
          const events = results.Events;
          return events.map((event) => {

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
                // key={results.Sid}
                league={results.Cnm}
                tournament={results.Snm}
                 nameTeam1={teamName1}
                 nameTeam2={teamName2}
                 scoreTeam1={event.Tr1}
                 scoreTeam2={event.Tr2}
                 time={event.Eps}
              />
            );
          });
          
        })}
      </ul>
    </section>
  );
};

export default EventGallery;
