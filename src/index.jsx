import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {


  const [animals, setAnimals] = useState([]);

  const [selectedAnimalId, setSelectedAnimalId] = useState('');

  useEffect(
    () => {
        fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
        .then(response => response.json())
        .then(data => {
        setAnimals(data.zvirata);
        setSelectedAnimalId(data.zvirata[0])
        })
    },
    []
    );
  
  
    const selectAnimal = (id) => {
      const animal = animals.find ((animal) => animal.id === id)
      setSelectedAnimalId(animal);
    }

 

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {/* zde budou jednotlivé komponenty */}
      
         <AnimalList 
              animals={animals} selectAn={selectAnimal}/>
        
        <AnimalDetail detailAnimal={selectedAnimalId} />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
