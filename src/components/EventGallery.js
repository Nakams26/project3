//EventGallery Component
//Import Event infos
import EventInfo from "./EventInfo"
const EventGallery = (props) => {


    return (
        <section>
      <ul className="events">
    {props.currentEvent.map((events)=>{
        return (
            <EventInfo league={events.Cnm} tournament={events.Snm}/>
        )
    })}
      </ul>
        </section>
    )
}

export default EventGallery