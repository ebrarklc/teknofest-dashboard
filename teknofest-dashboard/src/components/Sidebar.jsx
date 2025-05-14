import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  background-color: #151521;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: #00ffd5;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <h2>Panel</h2>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Harita</MenuItem>
      <MenuItem>Görevler</MenuItem>
      <MenuItem>Loglar</MenuItem>
      <MenuItem>Ayarlar</MenuItem>
    </Container>
  );
};

export default Sidebar;
