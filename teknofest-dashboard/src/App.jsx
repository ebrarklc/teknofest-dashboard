// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RobotMap from './components/RobotMap';
import StatusPanel from './components/StatusPanel';
import SensorPanel from './components/SensorPanel';
import LogPanel from './components/LogPanel';
import ScenarioPanel from './components/ScenarioPanel';





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
        <SensorPanel />
        <LogPanel />
        <ScenarioPanel />
      </MainContent>
    </Layout>
  );
}

export default App;
