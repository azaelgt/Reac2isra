import React, { useState } from 'react';
import './App.css';
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection';
import TeamSection from './components/TeamSection'; 

function App() {
  const [people, setPeople] = useState([]); 
  const [team, setTeam] = useState([]); 

  const addPerson = (person) => {
    
    setPeople([...people, person]);
  };

 
  const addToTeam = (personName) => {
    
    if (team.length >= 3) {
      alert('Solo se aceptan 3 personas en el equipo Wey');
    } else {
     
      setTeam([...team, personName]);
    }
  };

  return (
    <div className="App">
      <LeftSection onAddPerson={addPerson} />
      <RightSection people={people} onAddToTeam={addToTeam} /> {}
      <TeamSection team={team} /> {}
    </div>
  );
}

export default App;