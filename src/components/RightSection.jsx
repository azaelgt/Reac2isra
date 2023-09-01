import React from 'react';
import './RightSection.css';

const RightSection = ({ people, onAddToTeam }) => {
  return (
    <div className="right-section">
      {people.map((person, index) => (
        <div className="person-card" key={index}>
          <img src={person.photoUrl} alt={person.name} />
          <h3>{person.name}</h3>
          <button onClick={() => onAddToTeam(person.name)}>Agregar al Equipo</button>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
