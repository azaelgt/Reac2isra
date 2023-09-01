import React, { useState, useEffect } from 'react';
import './LeftSection.css';

const LeftSection = ({ onAddPerson }) => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    getRandomData();
  }, []);

  const getRandomData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      setName(`${user.name.first} ${user.name.last}`);
      setPhotoUrl(user.picture.large);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddClick = async () => {
    await getRandomData(); 

    const newPerson = { name, photoUrl };
    onAddPerson(newPerson);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <div className="left-section">
      <div className="card">
        <h2>Agregar Persona</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          readOnly
        />
        <input
          type="text"
          placeholder="URL de la Foto"
          value={photoUrl}
          readOnly
        />
        <button onClick={handleAddClick}>Agregar Persona</button>
      </div>
    </div>
  );
};

export default LeftSection;
