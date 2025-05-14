import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoCard from './InfoCard';

const Container = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
`;

const StatusPanel = () => {
  const [battery, setBattery] = useState(78);
  const [speed, setSpeed] = useState(0.5);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery(Math.floor(Math.random() * 100));
      setSpeed((Math.random() * 1).toFixed(2));
      setProgress(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <InfoCard title="Şarj Durumu" value={`${battery}%`} />
      <InfoCard title="Anlık Hız" value={`${speed} m/s`} />
      <InfoCard title="Görev İlerlemesi" value={`${progress}%`} />
    </Container>
  );
};

export default StatusPanel;
