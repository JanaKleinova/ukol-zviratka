import React from 'react';
import './style.css';

import Animal from '../Animal';

const AnimalList = ({animals, selectAn}) => {
    
    return(

        <>
            <div className="animal-list">

                    {animals.map(item =>

                    <div className='id_animal'>
                        <Animal key={item.id} id={item.id} nazev={item.nazev} latin={item.nazevLatinsky} foto={item.foto} onSelect={selectAn}/>
                    </div>
                    

                    )}

              

            </div>
        </>
    )
}

export default AnimalList;