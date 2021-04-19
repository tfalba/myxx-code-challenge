const MobileVersion = ({ spaceX, rocketSummary, rocket, show, showModal, rocketSpecs, hideModal, titleCase }) => {
  return (
    <div>
      {(show === false && (
        <div style={{ backgroundColor: 'black' }} className='body'>
          <div className='app-container-mobile'>
            <header className='app-banner-mobile'>
              <img height='30px' width='150px' src={spaceX} alt='SpaceX' />
            </header>
            <div className='title-mobile'>Vehicles</div>
            <div className='sub-title-mobile'>Rockets that are shown below were created by SpaceX. Proportions between rockets are somewhat accurate. Click on a rocket to learn more.</div>
            <div className='rocket-container-mobile'>
              {rocketSummary.map((rocket, idx) =>
                <div key={idx} className='rocket-box-mobile'>
                  <p className='rocket-label' onClick={() => showModal(rocket.name)}>{rocket.name}</p>
                  <img onClick={() => showModal(rocket.name)} height={`${2 * rocket.imageWidth}`} width={`${rocket.imageWidth}`} src={rocket.image} alt={rocket.name} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {rocket && rocketSpecs && show && (
        <div style={{ backgroundColor: 'black' }} className='body'>
          <div className='modal-container-mobile'>
            <div onClick={hideModal} className='close-icon-mobile'>x</div>
            <header className='app-banner-mobile'>
              <img height='30px' width='150px' src={spaceX} alt='SpaceX' />
            </header>
            <div className='rocket-container-modal-mobile'>
              <div className='image-container-mobile'>
                <img width='140px' src={rocketSpecs.image} alt={rocket.name} />
                <div style={{ width: '200px' }}>
                  <div className='rocket-stats-mobile'>
                    <div className='title-stats-mobile'>{rocket.name}</div>
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

export default MobileVersion
