
import React from 'react';

import Tilt from 'react-parallax-tilt';
import magic from './magic.png';

const Logou = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150, background: 'linear-gradient(86deg, #cce50d 0%, #13d913 50%, #0b582b 100%)' }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={magic}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logou;