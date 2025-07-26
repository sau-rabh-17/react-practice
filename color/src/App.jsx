import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const colors = [
    { name: 'Red', code: '#f87171' },
    { name: 'Green', code: '#34d399' },
    { name: 'Blue', code: '#60a5fa' },
    { name: 'Yellow', code: '#fde047' },
    { name: 'Purple', code: '#c084fc' },
    { name: 'Black', code: '#000000' },
    { name: 'White', code: '#ffffff' },
  ];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Change Background Color</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setBgColor(color.code)}
            style={{
              backgroundColor: color.code,
              color: color.code === '#ffffff' ? '#000' : '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
