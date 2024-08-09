"use client";
import { useState } from 'react';
import Image from 'next/image';  // Use 'next/image' for optimized image handling
import DerivativeCalculator from '@/app/components/DerivativeCalculator';
import IntegralCalculator from '@/app/components/IntegralCalculator';
import DiagramCalculator from '@/app/components/DiagramCalculator';

export default function Calculators() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const handleMenuClick = (calculator) => {
    setSelectedCalculator(calculator);
  };

  const menuStyle = {
    display: 'flex',
    backgroundColor: '#222',
    listStyleType: 'none',
    padding: '1rem 0.5rem',
    borderRadius: '15px',
    margin: '20px 0',
  };

  const menuItemStyle = {
    margin: '0 1rem',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    marginBottom: '5px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    width: "100vw",
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0 0 0',
    borderRadius: '10px',
  };

  const calculatorContainerStyle = {
    margin: "2rem 0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  };

  const calculatorStyle = {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    width: '50%',
    maxWidth: '600px',  // Set a maximum width for the calculator
    minWidth: '300px',  // Set a minimum width for the calculator
    color: '#fff',
  };

  return (
    <div style={{backgroundColor: "#0E0C0A", height: "100vh"}}>
      <div style={containerStyle}>
        <h1 style={{color: '#fff', fontSize: "24px"}}>Choose a Calculator</h1>
        <ul style={menuStyle}>
          <li style={menuItemStyle} onClick={() => handleMenuClick('derivative')}>
            Derivative Calculator
          </li>
          <li style={menuItemStyle} onClick={() => handleMenuClick('integral')}>
            Integral Calculator
          </li>
          <li style={menuItemStyle} onClick={() => handleMenuClick('diagram')}>
            Graphical Calculator
          </li>
        </ul>
      </div>

      <div style={calculatorContainerStyle}>
        {selectedCalculator === null && (
          <Image
            src="/image.jpg"  // Image path relative to the 'public' folder
            alt="Placeholder"
            layout="intrinsic"
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        )}
        {selectedCalculator === 'derivative' && <div style={calculatorStyle}><DerivativeCalculator /></div>}
        {selectedCalculator === 'integral' && <div style={calculatorStyle}><IntegralCalculator /></div>}
        {selectedCalculator === 'diagram' && <div style={calculatorStyle}><DiagramCalculator /></div>}
      </div>
    </div>
  );
}
