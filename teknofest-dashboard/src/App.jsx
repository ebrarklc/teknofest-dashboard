// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e2f;
  color: #ffffff;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
      </MainContent>
    </Layout>
  );
}

export default App;
