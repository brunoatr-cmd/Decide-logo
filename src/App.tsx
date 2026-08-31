
import React, { useState } from 'react';

export default function App() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const pickRandom = () => {
    if (items.length === 0) return;
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelected(items[randomIndex]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Decide Logo</h1>
      <p>Sorteador de Opções</p>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma opção..."
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
        />
        <button onClick={addItem} style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Adicionar
        </button>
      </div>

      <ul style={{ textAlign: 'left', paddingLeft: '20px', marginBottom: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
        ))}
      </ul>

      <button
        onClick={pickRandom}
        disabled={items.length === 0}
        style={{ width: '100%', padding: '12px', background: items.length > 0 ? '#16a34a' : '#6b7280', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px' }}
      >
        Sortear!
      </button>

      {selected && (
        <div style={{ marginTop: '20px', padding: '16px', background: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}>
          <h3>Opção sorteada:</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4ade80' }}>{selected}</p>
        </div>
      )}
    </div>
  );
}
