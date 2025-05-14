import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2a2a40;
  color: white;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 15px;
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 255, 213, 0.2);
`;

const Title = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 5px;
`;

const Value = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const InfoCard = ({ title, value }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

export default InfoCard;
