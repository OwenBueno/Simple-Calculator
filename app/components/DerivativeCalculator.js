import { useState } from 'react';
import { calculateDerivative } from '../utils/calculateDerivative';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function DerivativeCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const derivative = calculateDerivative(input); // Default to variable 'x'
      setResult(derivative);
    } catch (error) {
      setResult('Invalid input. Unable to calculate derivative.');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: 'auto',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    color: '#000',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const resultStyle = {
    marginTop: '10px',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#fff' }}>Derivative Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter function, e.g., x^2 + y^2 + z^2"
        style={inputStyle}
      />
      <button onClick={handleCalculate} style={buttonStyle}>Calculate</button>
      <p style={resultStyle}>
        {result && <BlockMath math={result.replace(/\*/g, '\\cdot ')} />}
      </p>
    </div>
  );
}
