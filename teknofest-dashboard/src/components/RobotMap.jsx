import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mapImage from '../assets/map.png';

const MapContainer = styled.div`
  position: relative;
  flex: 1;
  background-image: url(${mapImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #444;
`;


const Robot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #00ffd5;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const RobotMap = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Dummy veri: konum rastgele değişiyor
      setPosition({
        x: Math.floor(Math.random() * 500),
        y: Math.floor(Math.random() * 500),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer>
      <Robot style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </MapContainer>
  );
};

export default RobotMap;
