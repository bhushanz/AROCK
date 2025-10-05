import React from 'react';
import Tilt from 'react-parallax-tilt';

const MyTiltCard = () => (
  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    glareEnable={true}
    glareMaxOpacity={0.5}
    scale={1.05}
    perspective={1000}
  >
    <div className="card">
      {/* your content */}
      <h1>Hover me!</h1>
    </div>
  </Tilt>
);

export default MyTiltCard;
