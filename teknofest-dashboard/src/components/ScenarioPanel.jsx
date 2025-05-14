// ScenarioPanel.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  background-color: #2a2a40;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 255, 213, 0.2);
  max-width: 400px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  background-color: #00ffd5;
  color: #000;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #00e6c0;
  }
`;

const List = styled.ul`
  margin-top: 10px;
  max-height: 150px;
  overflow-y: auto;
`;

const ScenarioPanel = () => {
  const [scenario, setScenario] = useState([]);
  const [selectedQ, setSelectedQ] = useState('');

  const handleQClick = (q) => {
    setSelectedQ(q);
  };

  const handleAction = (action) => {
    if (selectedQ) {
      const step = { [selectedQ]: action };
      setScenario((prev) => [...prev, step]);
      setSelectedQ('');
    }
  };

  const handleSend = async () => {
  console.log('Gönderilen senaryo:', scenario);

  try {
    const response = await fetch('http://localhost:8080/api/rota', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rota: scenario }),
    });

    if (response.ok) {
      const result = await fetch('http://localhost:8080/api/route');
      const data = await result.json();

      // Başarı mesajı
      alert('✅ Rota Onaylandı!');

      // Konsola yaz
      console.log('Sunucudan gelen rota:', data);
    } else {
      alert('❌ Gönderim başarısız!');
    }
  } catch (error) {
    console.error('Sunucu hatası:', error);
    alert('❌ Sunucuya ulaşılamadı!');
  }
};


  const handleClear = () => {
    setScenario([]);
    setSelectedQ('');
  };

  return (
    <Panel>
      <h3>Senaryo Oluştur</h3>
      <ButtonRow>
        {['Q50', 'Q45', 'Q38', 'Q33'].map((q) => (
          <Btn key={q} onClick={() => handleQClick(q)}>
            {q}
          </Btn>
        ))}
      </ButtonRow>
      <ButtonRow>
        <Btn onClick={() => handleAction('AL')}>AL</Btn>
        <Btn onClick={() => handleAction('BIRAK')}>BIRAK</Btn>
      </ButtonRow>
      <div>🧠 Seçilen: {selectedQ || 'Yok'}</div>

      <ButtonRow>
        <Btn onClick={handleSend}>📤 Gönder</Btn>
        <Btn onClick={handleClear}>🧹 Temizle</Btn>
      </ButtonRow>

      <List>
        {scenario.map((step, index) => (
          <li key={index}>➡️ {Object.keys(step)[0]}: {Object.values(step)[0]}</li>
        ))}
      </List>
    </Panel>
  );
};

export default ScenarioPanel;
