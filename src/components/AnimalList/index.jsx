import React, {useState, useEffect} from 'react';
import './style.css';

import Animal from '.././Animal';

const AnimalList = ({animals, selectAn}) => {
    

    const [selectedAnimalId, setSelectedAnimalId] = useState('');

    const selectAnimal = (id) => {
        setSelectedAnimalId(id);
      }


    return(

        <>
            <div className="animal-list">

                    {animals.map(animal =>

                    <div className='id_animal'>
                        <Animal key={animal.id} id={animal.id} nazev={animal.nazev} latin={animal.nazevLatinsky} foto={animal.foto} onSelect={selectAn}/>
                    </div>
                    

                    )}

              

            </div>
        </>
    )
}

export default AnimalList;