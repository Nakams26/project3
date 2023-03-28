//EventInfo component: This component display LI created with the API data

const EventInfo = (props) => {
  // Transforming the date received in a 12hours format time (I receive YYYYMMDDHHMMSS,  need to transform it in HH:MM AM or PM)
  const dateReceived = `${props.hour}`;
  // Isolating hours and minutes and storing it in a variable
  const formattedDate = dateReceived.substring(8, 12);
  const hour = parseInt(formattedDate.substring(0, 2));
  const minute = formattedDate.substring(2);
  // Defining a variable PM if hours sup or equal 12
  const isPm = hour >= 12;
  // Formatting to 12 hours format
  const formattedHour = hour % 12 || 12;
  // Formatting the hours, if isPm is true I add PM, else I add AM
  const formattedTime = `${formattedHour}:${minute} ${isPm ? "PM" : "AM"}`;

  return (
    // Returning an LI for every event, with a class of the sport value selected by the user
    <li className={`${props.sport}`}>
      {/* Adding competition infos */}
      <div className="leagueInfo">
        <p className="leagueName">{props.league}</p>
        <p className="eventName">{props.tournament}</p>
      </div>
      {/* Adding competition date/hours. If date/time is not Full Time, Not Started, Walk off, cancelled, retired or overtime, then I display a red dot to show that the event is live */}
      <div className="eventTime">
        {props.time !== "FT" &&
        props.time !== "NS" &&
        props.time !== "W.O." &&
        props.time !== "OT" &&
        props.time !== "Canc." &&
        props.time !== "Ret." ? (
          <div>
            <div className="liveBlock">
              <div className="dot liveEvent"></div>
              <p className="gameTime">{props.time}</p>
            </div>
          </div>
        ) : // if time = Full Time, overtime, retired or cancelled, event is done. Then I display only FT, OT or cancelled and I remove the hour as the event is done or didn't happened
        props.time === "FT" ||
          props.time === "OT" ||
          props.time === "Canc." ||
          props.time === "Ret." ? (
          <p className="gameTime">{props.time}</p>
        ) : (
          // If the time is Non started, then I display the hour
          <>
            <p className="gameTime">{props.time}</p>
            <p className="time">{`${formattedTime}`}</p>
          </>
        )}
      </div>
      {/* Adding team 1 infos and scores. */}
      <div className="team1Stats">
        <div className="setScore">
          {/* Adding set scores if they exist (only for tennis) */}
          {props.set1ScoreTeam1 ? (
            <div className="setBox">
              <p className="set">{props.set1ScoreTeam1}</p>
              <p className="set">{props.set2ScoreTeam1}</p>
              <p className="set">{props.set3ScoreTeam1}</p>
            </div>
          ) : null}
        </div>
        {/* Adding team 1 name */}
        <div className="teamInfos">
          {/* If the sport is tennis, then I don't display images of the team (I don't receive image from the api for tennis). Else I display the team logo */}
          {props.sport === "tennis" ? (
            <p className="teamName">{props.nameTeam1}</p>
          ) : (
            <>
              <div className="teamImageContainer">
                <img
                  className="teamImage"
                  src={`https://lsm-static-prod.livescore.com/medium/${props.imageTeam1}`}
                  alt={`logo of ${props.nameTeam1}`}
                />
              </div>
              <p className="teamName">{props.nameTeam1}</p>{" "}
            </>
          )}
        </div>
        <div className="score">
          {/* Adding team 1 global score */}
          <p>{props.scoreTeam1}</p>
        </div>
      </div>
      {/* Adding team 2 infos and scores. */}
      <div className="team2Stats">
        <div className="setScore">
          {/* Adding set scores if they exist (only for tennis) */}
          {props.set1ScoreTeam2 ? (
            <div className="setBox">
              <p className="set">{props.set1ScoreTeam2}</p>
              <p className="set">{props.set2ScoreTeam2}</p>
              <p className="set">{props.set3ScoreTeam2}</p>
            </div>
          ) : null}
        </div>
        {/* Adding team 2 name */}
        <div className="teamInfos">
          {/* If the sport is tennis, then I don't display images of the team. Else I display the team logo */}
          {props.sport === "tennis" ? (
            <p className="teamName">{props.nameTeam2}</p>
          ) : (
            <>
              <div className="teamImageContainer">
                <img
                  className="teamImage"
                  src={`https://lsm-static-prod.livescore.com/medium/${props.imageTeam2}`}
                  alt={`logo of ${props.nameTeam2}`}
                />
              </div>
              <p className="teamName">{props.nameTeam2}</p>{" "}
            </>
          )}
        </div>
        <div className="score">
          {/* Adding team 2 global score */}
          <p>{props.scoreTeam2}</p>
        </div>
      </div>
    </li>
  );
};

export default EventInfo;
