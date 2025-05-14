import React from 'react';
import styled from 'styled-components';


const Bar = styled.div`
  height: 60px;
  background-color: #2a2a40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const EmergencyButton = styled.button`
  background-color: #ff3b3b;
  color: white;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const TopBar = () => {
  return (
    <Bar>
      <Title>TEKNOFEST 2025 Görev Paneli</Title>
      <EmergencyButton>Acil Durdur</EmergencyButton>
    </Bar>
  );
};

export default TopBar;
