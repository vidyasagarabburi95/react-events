import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {id, name, location, imageUrl} = eventDetails
  const buttonActive = isActive ? 'active' : 'event-image'

  const buttonClicked = () => {
    setActiveId(id)
  }

  return (
    <li key={id}>
      <button type="button" onClick={buttonClicked} className={buttonActive}>
        <img src={imageUrl} alt="event" className="button-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
