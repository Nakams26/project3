//EventInfo component

const EventInfo = (props) => {
    return (
       <li>
        <p>{props.league}</p>
        <p>{props.tournament}</p>
        <p>{props.nameTeam1}</p>
        <p>{props.scoreTeam1}</p>
        <p>{props.nameTeam2}</p>
        <p>{props.scoreTeam2}</p>
        <p>{props.time}</p>
       </li>
    )
}

export default EventInfo