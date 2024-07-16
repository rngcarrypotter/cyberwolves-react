import React, { useState } from 'react';
import './styles.css';

const Configurator = () => {
  const [cpu, setCpu] = useState('');
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');

  const handleCpuChange = (event) => setCpu(event.target.value);
  const handleGpuChange = (event) => setGpu(event.target.value);
  const handleRamChange = (event) => setRam(event.target.value);
  const handleStorageChange = (event) => setStorage(event.target.value);

  return (
    <div className="configurator">
      <h2>PC Configurator</h2>
      <div className="configurator-section">
        <label htmlFor="cpu">CPU:</label>
        <select id="cpu" value={cpu} onChange={handleCpuChange}>
          <option value="">Select a CPU</option>
          <option value="intel-i5">Intel i5</option>
          <option value="intel-i7">Intel i7</option>
          <option value="amd-ryzen5">AMD Ryzen 5</option>
          <option value="amd-ryzen7">AMD Ryzen 7</option>
        </select>
      </div>
      <div className="configurator-section">
        <label htmlFor="gpu">GPU:</label>
        <select id="gpu" value={gpu} onChange={handleGpuChange}>
          <option value="">Select a GPU</option>
          <option value="nvidia-rtx3060">NVIDIA RTX 3060</option>
          <option value="nvidia-rtx3080">NVIDIA RTX 3080</option>
          <option value="amd-rx6700">AMD RX 6700</option>
          <option value="amd-rx6800">AMD RX 6800</option>
        </select>
      </div>
      <div className="configurator-section">
        <label htmlFor="ram">RAM:</label>
        <select id="ram" value={ram} onChange={handleRamChange}>
          <option value="">Select RAM</option>
          <option value="8gb">8 GB</option>
          <option value="16gb">16 GB</option>
          <option value="32gb">32 GB</option>
          <option value="64gb">64 GB</option>
        </select>
      </div>
      <div className="configurator-section">
        <label htmlFor="storage">Storage:</label>
        <select id="storage" value={storage} onChange={handleStorageChange}>
          <option value="">Select Storage</option>
          <option value="256gb-ssd">256 GB SSD</option>
          <option value="512gb-ssd">512 GB SSD</option>
          <option value="1tb-ssd">1 TB SSD</option>
          <option value="2tb-ssd">2 TB SSD</option>
        </select>
      </div>
      <div className="configurator-summary">
        <h3>Configuration Summary:</h3>
        <p>CPU: {cpu}</p>
        <p>GPU: {gpu}</p>
        <p>RAM: {ram}</p>
        <p>Storage: {storage}</p>
      </div>
    </div>
  );
};

export default Configurator;
