import React from 'react';
import './style.css';

import Animal from '../Animal';

const AnimalList = ({animals, selectAn, zprava}) => {
    
    return(

        <>
            <div className="animal-list" onClick={() => { selectAn()}}>

                    {animals.map(item =>

                    <Animal key={item.id} nazev={item.nazev} latin={item.nazevLatinsky} foto={item.foto}/>

                    )}

              

            </div>
        </>
    )
}

export default AnimalList;