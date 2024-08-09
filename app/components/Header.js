import React from 'react';

export default function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '2px solid #007bff',
  };

  const textStyle = {
    margin: 0,
    padding: 0,
  };

  return (
    <div style={headerStyle}>
      <p style={textStyle}>© 2024 Team Insano. All rights reserved.</p>
      <p style={textStyle}>Developed by Team Insano</p>
    </div>
  );
}
