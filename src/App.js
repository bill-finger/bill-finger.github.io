import React, { useState } from 'react';
import DataMatrix from 'react-datamatrix-svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [modelNumber, setModelNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    setMsg(`${modelNumber}$${serialNumber}`);
  };

  const handleDropdownChange = (e) => {
    if (e.target.value === '3seriesW2A-A2L') {
      setMsg('W3AV036BD1A01CTL1A10$123456789');
    }
    else if (e.target.value === '5seriesW2A-A2L') {
      setMsg('W5AV036BD1A02CTL2D10$123456789')
    }
    else if (e.target.value === '7seriesW2A-A2L') {
      setMsg('W7AV024BV1A02CTL2D10$123456789')
    }
    else if (e.target.value === '5series3D') {
      setMsg('W5TV036BD1A22CTL2D11$123456789')
    }
  };

  const handleReset = () => {
    setModelNumber('');
    setSerialNumber('');
    setMsg('');
    document.querySelector('select').value = '';
  };

  return (    
    <div className="container mt-4">      
      <h1 className="mb-4">SCC DataMatrix Generator</h1>
      <div className="mb-3">
        <label className="form-label">Select Option:</label>
        <select className="form-select" onChange={handleDropdownChange}>
          <option value="">-- Select --</option>
          <option value="3seriesW2A-A2L">3 Series Water to Air (A2L)</option>
          <option value="5seriesW2A-A2L">5 Series Water to Air (A2L)</option>
          <option value="7seriesW2A-A2L">7 Series Water to Air (A2L)</option>
          <option value="5series3D">5 Series 3D</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Model Number:</label>
        <input
          type="text"
          className="form-control"
          value={modelNumber}
          onChange={(e) => setModelNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Serial Number:</label>
        <input
          type="text"
          className="form-control"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
      </div> 
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Generate DataMatrix
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="mt-4">
        <DataMatrix msg={msg} dim={200} />
      </div>
    </div>
  );
}

export default App;