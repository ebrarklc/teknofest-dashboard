// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RobotMap from './components/RobotMap';
import StatusPanel from './components/StatusPanel';



const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;


const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


function App() {
  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <TopBar />
        <div style={{ padding: '20px' }}>
          {/* Buraya map, kartlar, log paneli vs. gelecek */}
          İçerik alanı
        </div>
        <RobotMap />
        <StatusPanel />
      </MainContent>
    </Layout>
  );
}

export default App;
