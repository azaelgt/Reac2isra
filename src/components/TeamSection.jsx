import React from 'react';

const TeamSection = ({ team }) => {
  return (
    <div className="card">
      <h2>Equipo</h2>
      <div>
        {team.map((person, index) => (
          <p key={index}>{person}</p>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
