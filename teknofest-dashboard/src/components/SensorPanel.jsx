import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #2a2a40;
  padding: 15px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 255, 213, 0.2);
  width: 200px;
`;

const Line = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

const SensorPanel = () => {
  const [qr, setQr] = useState('QR0');
  const [rfid, setRfid] = useState('RFID0');

  useEffect(() => {
    const interval = setInterval(() => {
      const newQr = `QR${Math.floor(Math.random() * 100)}`;
      const newRfid = `RFID${Math.floor(Math.random() * 100)}`;
      setQr(newQr);
      setRfid(newRfid);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Panel>
      <Line>📷 QR Bilgisi: {qr}</Line>
      <Line>🧲 RFID Bilgisi: {rfid}</Line>
    </Panel>
  );
};

export default SensorPanel;
