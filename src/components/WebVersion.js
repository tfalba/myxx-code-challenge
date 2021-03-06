const WebVersion = ({ spaceX, rocketSummary, rocket, show, showModal, rocketSpecs, hideModal, titleCase }) => {
  return (
    <div>
      {(show === false && (
        <div style={{ backgroundColor: 'black' }} className='body'>
          <div className='app-container'>
            <header className='app-banner'>
              <img width='250px' src={spaceX} alt='SpaceX' />
              <button className='nav-button'>Vehicles</button>
            </header>
            <div className='title'>Vehicles</div>
            <div className='sub-title'>Rockets that are shown below were created by SpaceX. Proportions between rockets are somewhat accurate. Click on a rocket to learn more.</div>
            <div className='rocket-container'>
              {rocketSummary.map((rocket, idx) =>
                <div key={idx} className='rocket-box'>
                  <p className='rocket-label' onClick={() => showModal(rocket.name)}>{rocket.name}</p>
                  <img onClick={() => showModal(rocket.name)} width={`${rocket.imageWidth}`} src={rocket.image} alt={rocket.name} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {rocket && rocketSpecs && show && (
        <div style={{ backgroundColor: 'black' }} className='body'>
          <div className='modal-container'>
            <div onClick={hideModal} className='close-icon'>x</div>
            <header className='app-banner'>
              <img width='250px' src={spaceX} alt='SpaceX' />
              <button onClick={hideModal} className='nav-button-modal'>Vehicles</button>
            </header>
            <div className='rocket-container-modal'>
              <div className='image-container'>
                <img width='160px' src={rocketSpecs.image} alt={rocket.name} />
                <div style={{ width: '800px' }}>
                  <div className='rocket-stats'>
                    <div className='title-stats'>{rocket.name}</div>
                    <button className='active-button'>Status: {rocket.status}</button>
                    <div className='description'>{rocket.description}</div>
                    <ul className='engine-details'>Engines
                      <li>Engines: {rocket.engines.number}</li>
                      <li>Type: {titleCase(rocket.engines.type)}</li>
                      <li>Thrust: {rocket.engines.thrust_sea_level.lbf.toLocaleString()} Lbs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebVersion
