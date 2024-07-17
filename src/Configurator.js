import React, { useState } from 'react';
import './Configurator.css';

const Configurator = () => {
  const [cpu, setCpu] = useState('');
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCpuChange = (event) => {
    const value = event.target.value.split('-');
    setCpu(value[0]);
    setTotalPrice(totalPrice + parseInt(value[1], 10));
  };

  const handleGpuChange = (event) => {
    const value = event.target.value.split('-');
    setGpu(value[0]);
    setTotalPrice(totalPrice + parseInt(value[1], 10));
  };

  const handleRamChange = (event) => {
    const value = event.target.value.split('-');
    setRam(value[0]);
    setTotalPrice(totalPrice + parseInt(value[1], 10));
  };

  const handleStorageChange = (event) => {
    const value = event.target.value.split('-');
    setStorage(value[0]);
    setTotalPrice(totalPrice + parseInt(value[1], 10));
  };

  return (
    <div className="configurator">
      <h2>Advanced PC Configurator</h2>
      <div className="configurator-section">
        <h3>CPU</h3>
        <div className="configurator-ui">
          <div className="component-selector">
            <label htmlFor="cpu">Select CPU:</label>
            <select id="cpu" onChange={handleCpuChange}>
              <option value="">Select a CPU</option>
              <option value="Intel i5-12400-200">Intel i5-12400 - 200 CHF</option>
              <option value="Intel i7-12700K-350">Intel i7-12700K - 350 CHF</option>
              <option value="AMD Ryzen 5 5600-180">AMD Ryzen 5 5600 - 180 CHF</option>
              <option value="AMD Ryzen 7 5700X-270">AMD Ryzen 7 5700X - 270 CHF</option>
            </select>
          </div>
        </div>
      </div>

      <div className="configurator-section">
        <h3>GPU</h3>
        <div className="configurator-ui">
          <div className="component-selector">
            <label htmlFor="gpu">Select GPU:</label>
            <select id="gpu" onChange={handleGpuChange}>
              <option value="">Select a GPU</option>
              <option value="NVIDIA RTX 3060-350">NVIDIA RTX 3060 - 350 CHF</option>
              <option value="NVIDIA RTX 4060-500">NVIDIA RTX 4060 - 500 CHF</option>
              <option value="AMD RX 6650 XT-320">AMD RX 6650 XT - 320 CHF</option>
              <option value="AMD RX 7900 XT-900">AMD RX 7900 XT - 900 CHF</option>
            </select>
          </div>
        </div>
      </div>

      <div className="configurator-section">
        <h3>RAM</h3>
        <div className="configurator-ui">
          <div className="component-selector">
            <label htmlFor="ram">Select RAM:</label>
            <select id="ram" onChange={handleRamChange}>
              <option value="">Select RAM</option>
              <option value="8 GB-40">8 GB - 40 CHF</option>
              <option value="16 GB-70">16 GB - 70 CHF</option>
              <option value="32 GB-130">32 GB - 130 CHF</option>
              <option value="64 GB-250">64 GB - 250 CHF</option>
            </select>
          </div>
        </div>
      </div>

      <div className="configurator-section">
        <h3>Storage</h3>
        <div className="configurator-ui">
          <div className="component-selector">
            <label htmlFor="storage">Select Storage:</label>
            <select id="storage" onChange={handleStorageChange}>
              <option value="">Select Storage</option>
              <option value="256 GB SSD-50">256 GB SSD - 50 CHF</option>
              <option value="512 GB SSD-80">512 GB SSD - 80 CHF</option>
              <option value="1 TB SSD-120">1 TB SSD - 120 CHF</option>
              <option value="2 TB SSD-200">2 TB SSD - 200 CHF</option>
            </select>
          </div>
        </div>
      </div>

      <div className="configurator-summary">
        <h3>Configuration Summary:</h3>
        <p>CPU: {cpu}</p>
        <p>GPU: {gpu}</p>
        <p>RAM: {ram}</p>
        <p>Storage: {storage}</p>
        <p>Total Price: {totalPrice} CHF</p>
      </div>
    </div>
  );
};

export default Configurator;
