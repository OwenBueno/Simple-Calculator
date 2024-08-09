import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { evaluate } from 'mathjs';

// Register the components with ChartJS
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function DiagramCalculator() {
  const [input, setInput] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleGenerate = () => {
    try {
      const points = generateDiagram(input);
      const data = {
        labels: points.map((point) => point.x),
        datasets: [
          {
            label: `y = ${input}`,
            data: points.map((point) => ({ x: point.x, y: point.y })),
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1, // Makes the line smooth
          },
        ],
      };
      setChartData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const generateDiagram = (formula) => {
    const points = [];
    for (let x = -10; x <= 10; x += 0.1) {
      const y = evaluate(formula, { x });
      points.push({ x, y });
    }
    return points;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxHeight: "10.65rem"
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
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#fff' }}>Graphical Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter formula, e.g., x^2"
        style={inputStyle}
      />
      <button onClick={handleGenerate} style={buttonStyle}>Generate</button>
      {chartData && (
        <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  type: 'linear',
                  position: 'bottom',
                  grid: {
                    color: '#444',  // Grid color
                  },
                },
                y: {
                  type: 'linear',
                  position: 'left',
                  grid: {
                    color: '#444',  // Grid color
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#fff',  // Label color
                  },
                },
              },
              elements: {
                point: {
                  radius: 0,  // Removes point markers for a cleaner line
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
