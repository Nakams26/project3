//EventInfo component

const EventInfo = (props) => {
    return (
       <li>
        <p>{props.league}</p>
        <p>{props.tournament}</p>
       </li>
    )
}

export default EventInfo