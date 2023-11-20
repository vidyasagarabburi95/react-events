import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {setRegistrationStatus} = props

  const renderNoActiveView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const yetToRegistrationView = () => (
    <div className="item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <div>
        <p className="live-p">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
      </div>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationClosedView = () => (
    <div className="item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="stay-tuned">
        Stay tuned. We will reopen
        <br />
        the registration soon!
      </p>
    </div>
  )

  const renderActiveRegistrationStatus = () => {
    switch (setRegistrationStatus()) {
      case registrationStatus.yetToRegister:
        return yetToRegistrationView()
      case registrationStatus.registered:
        return registeredView()
      case registrationStatus.registrationClosed:
        return registrationClosedView()
      default:
        return renderNoActiveView()
    }
  }

  return <div>{renderActiveRegistrationStatus()}</div>
}

export default ActiveEventRegistrationDetails
