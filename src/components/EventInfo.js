//EventInfo component

const EventInfo = (props) => {
  return (
    <li>
      <div className="leagueInfo">
        <p>{props.league}</p>
        <p>{props.tournament}</p>
      </div>
      {props.time !== "FT" && props.time !== "NS" ? (
        <div>
          <div className="liveBlock">
            <div className="dot liveEvent"></div>
            <p>{props.time}</p>
          </div>
        </div>
      ) : (
        <>
        <p>{props.time}</p>
        <p>{props.hour}</p>
        </>
      )}
      <div className="team1Stats">
        <div className="setScore">
          {props.set1ScoreTeam1 ? (
            <div className="setBox">
              <p className="set">{props.set1ScoreTeam1}</p>
              <p className="set">{props.set2ScoreTeam1}</p>
              <p className="set">{props.set3ScoreTeam1}</p>
            </div>
          ) : null}
        </div>
        <p>{props.nameTeam1}</p>
        <div className="score">
          <p>{props.scoreTeam1}</p>
        </div>
      </div>

      <div className="team2Stats">
        <div className="setScore">
          {props.set1ScoreTeam2 ? (
            <div className="setBox">
              <p className="set">{props.set1ScoreTeam2}</p>
              <p className="set">{props.set2ScoreTeam2}</p>
              <p className="set">{props.set3ScoreTeam2}</p>
            </div>
          ) : null}
        </div>
        <p>{props.nameTeam2}</p>
        <div className="score">
          <p>{props.scoreTeam2}</p>
        </div>
      </div>
    </li>
  );
};

export default EventInfo;
