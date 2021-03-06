import falcon1 from './images/falcon1.png'
import falcon9 from './images/falcon9.png'
import falconHeavy from './images/falcon_heavy.png'
import starship from './images/starship.png'

const rocketSummary =
  [{
    name: 'Falcon 1',
    image: falcon1,
    imageWidth: '30px',
    imageHeight: '90px'
  },
  { name: 'Falcon 9', image: falcon9, imageWidth: '60px', imageHeight: '180px' },
  { name: 'Falcon Heavy', image: falconHeavy, imageWidth: '58px', imageHeight: '174px' },
  { name: 'Starship', image: starship, imageWidth: '90px', imageHeight: '270px' }]

export default rocketSummary
