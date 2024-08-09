import { useState } from 'react';
import { calculateIntegral, calculateDoubleIntegral, calculateTripleIntegral } from '../utils/calculateIntegral';
import Image from 'next/image';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function IntegralCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [integralType, setIntegralType] = useState('single');

  const handleCalculate = () => {
    try {
      let integral;
      if (integralType === 'single') {
        integral = calculateIntegral(input);
      } else if (integralType === 'double') {
        integral = calculateDoubleIntegral(input);
      } else if (integralType === 'triple') {
        integral = calculateTripleIntegral(input);
      }
      setResult(integral);
    } catch (error) {
      setResult('Invalid input. Unable to calculate integral.');
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

  const horizontalContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
  };

  const imageContainerStyle = {
    marginRight: '20px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    color: '#000',
  };

  const dropdownStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '10px',
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

  const getImageSrc = () => {
    switch (integralType) {
      case 'single':
        return '/single-integral.png';
      case 'double':
        return '/double-integral.png';
      case 'triple':
        return '/triple-integral.png';
      default:
        return '/single-integral.png';
    }
  };

  const formatResult = (result) => {
    // Replace * with \cdot for LaTeX style multiplication
    return result.replace(/\*/g, '\\cdot ');
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#fff' }}>Integral Calculator</h2>
      <div style={horizontalContainerStyle}>
        <div style={imageContainerStyle}>
          <Image src={getImageSrc()} alt={`${integralType} integral`} width={80} height={80} />
        </div>
        <div style={inputContainerStyle}>
          <select
            value={integralType}
            onChange={(e) => setIntegralType(e.target.value)}
            style={dropdownStyle}
          >
            <option value="single">Single Integral</option>
            <option value="double">Double Integral</option>
            <option value="triple">Triple Integral</option>
          </select>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter function, e.g., x^2"
            style={inputStyle}
          />
        </div>
      </div>
      <button onClick={handleCalculate} style={buttonStyle}>Calculate</button>
      <p style={resultStyle}>
        {result && <BlockMath math={formatResult(result)} />}
      </p>
    </div>
  );
}
