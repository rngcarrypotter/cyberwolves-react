import React, { useState } from 'react';
import './Configurator.css';
import { Modal, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const steps = [
  { title: "CPU", options: [
      { label: "Intel i5-12400", value: "Intel i5-12400", price: 200, img: "cpu1.jpg", description: "A budget-friendly option with solid performance for most tasks." },
      { label: "Intel i7-12700K", value: "Intel i7-12700K", price: 350, img: "cpu2.jpg", description: "A high-performance CPU for gaming and heavy workloads." },
      { label: "AMD Ryzen 5 5600", value: "AMD Ryzen 5 5600", price: 180, img: "cpu3.jpg", description: "A mid-range CPU offering great value for money." },
      { label: "AMD Ryzen 7 5700X", value: "AMD Ryzen 7 5700X", price: 270, img: "cpu4.jpg", description: "A powerful CPU suitable for gaming and content creation." }
    ]
  },
  { title: "GPU", options: [
      { label: "NVIDIA RTX 3060", value: "NVIDIA RTX 3060", price: 350, img: "gpu1.jpg", description: "Great for 1080p and 1440p gaming." },
      { label: "NVIDIA RTX 4060", value: "NVIDIA RTX 4060", price: 500, img: "gpu2.jpg", description: "Excellent performance for 1440p and entry-level 4K gaming." },
      { label: "AMD RX 6650 XT", value: "AMD RX 6650 XT", price: 320, img: "gpu3.jpg", description: "Good for 1080p gaming with high frame rates." },
      { label: "AMD RX 7900 XT", value: "AMD RX 7900 XT", price: 900, img: "gpu4.jpg", description: "Top-tier performance for 4K gaming and beyond." }
    ]
  },
  { title: "RAM", options: [
      { label: "8 GB", value: "8 GB", price: 40, img: "ram1.jpg", description: "Suitable for basic tasks and light multitasking." },
      { label: "16 GB", value: "16 GB", price: 70, img: "ram2.jpg", description: "Ideal for most users, including gamers and professionals." },
      { label: "32 GB", value: "32 GB", price: 130, img: "ram3.jpg", description: "Great for heavy multitasking and professional applications." },
      { label: "64 GB", value: "64 GB", price: 250, img: "ram4.jpg", description: "Overkill for most, but essential for extreme workloads." }
    ]
  },
  { title: "Storage", options: [
      { label: "256 GB SSD", value: "256 GB SSD", price: 50, img: "storage1.jpg", description: "Fast storage suitable for the operating system and essential apps." },
      { label: "512 GB SSD", value: "512 GB SSD", price: 80, img: "storage2.jpg", description: "More storage for apps and a few games." },
      { label: "1 TB SSD", value: "1 TB SSD", price: 120, img: "storage3.jpg", description: "Ample space for most users, including gamers and professionals." },
      { label: "2 TB SSD", value: "2 TB SSD", price: 200, img: "storage4.jpg", description: "Huge storage for extensive libraries of games, media, and projects." }
    ]
  },
  { title: "Optical Drive", options: [
      { label: "DVD Drive", value: "DVD Drive", price: 20, img: "optical1.jpg", description: "Basic DVD drive for reading and writing DVDs." },
      { label: "Blu-ray Drive", value: "Blu-ray Drive", price: 50, img: "optical2.jpg", description: "High-definition Blu-ray drive for reading and writing Blu-ray discs." }
    ]
  },
  { title: "Sound Card", options: [
      { label: "Basic Sound Card", value: "Basic Sound Card", price: 30, img: "sound1.jpg", description: "Basic sound card for improved audio quality." },
      { label: "Advanced Sound Card", value: "Advanced Sound Card", price: 70, img: "sound2.jpg", description: "Advanced sound card for audiophiles and professional audio work." }
    ]
  },
  { title: "PSU", options: [
      { label: "500W", value: "500W", price: 60, img: "psu1.jpg", description: "500W power supply unit, suitable for most builds." },
      { label: "750W", value: "750W", price: 90, img: "psu2.jpg", description: "750W power supply unit for more power-hungry builds." },
      { label: "1000W", value: "1000W", price: 130, img: "psu3.jpg", description: "1000W power supply unit for high-end builds." }
    ]
  }
];

const Configurator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [configuration, setConfiguration] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOptionChange = (value, price, title) => {
    const previousPrice = configuration[title] ? configuration[title].price : 0;
    setConfiguration({
      ...configuration,
      [title]: { value, price }
    });
    setTotalPrice(totalPrice - previousPrice + price);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const openModal = (option) => {
    setModalContent(option);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const editStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="configurator">
      <h2>Advanced PC Configurator</h2>
      <ProgressBar now={(currentStep / steps.length) * 100} className="progress-bar-custom" />
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`progress-step ${index <= currentStep ? 'active' : ''}`}
            onClick={() => editStep(index)}
          >
            {step.title}
          </div>
        ))}
      </div>
      {currentStep < steps.length ? (
        <div className="configurator-step">
          <h3>Step {currentStep + 1}: {steps[currentStep].title}</h3>
          <div className="configurator-options">
            {steps[currentStep].options.map((option) => (
              <div key={option.value} className="configurator-option">
                <input 
                  type="radio" 
                  id={option.value} 
                  name={steps[currentStep].title} 
                  value={option.value} 
                  data-price={option.price} 
                  checked={configuration[steps[currentStep].title]?.value === option.value}
                  onChange={() => handleOptionChange(option.value, option.price, steps[currentStep].title)} 
                />
                <label htmlFor={option.value} onClick={() => openModal(option)}>
                  <img src={option.img} alt={option.label} className="option-img" />
                  <div className="option-info">
                    <div className="option-label">{option.label}</div>
                    <div className="option-price">{option.price} CHF</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="configurator-navigation">
            {currentStep > 0 && <Button variant="secondary" onClick={prevStep}>Previous</Button>}
            {currentStep < steps.length - 1 && <Button variant="primary" onClick={nextStep}>Next</Button>}
          </div>
        </div>
      ) : (
        <div className="configurator-summary">
          <h3>Configuration Summary:</h3>
          {Object.keys(configuration).map((key) => (
            <p key={key}>{key}: {configuration[key].value} - {configuration[key].price} CHF</p>
          ))}
          <p>Total Price: {totalPrice} CHF</p>
          <Button variant="success" onClick={() => setCurrentStep(0)}>Start Over</Button>
        </div>
      )}
      
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent.img} alt={modalContent.label} className="option-img-modal" />
          <p>{modalContent.description}</p>
          <p>Price: {modalContent.price} CHF</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Configurator;
