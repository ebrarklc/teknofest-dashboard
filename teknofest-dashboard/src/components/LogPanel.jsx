import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #1e1e2f;
  color: white;
  width: 400px;
  height: 150px;
  overflow-y: auto;
  border-radius: 10px;
  padding: 10px;
  font-size: 13px;
  box-shadow: 0 0 10px rgba(0, 255, 213, 0.1);
`;

const LogPanel = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const message = `🕒 ${timestamp} | Robot konumu güncellendi`;
      setLogs(prev => [message, ...prev.slice(0, 19)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </Container>
  );
};

export default LogPanel;
