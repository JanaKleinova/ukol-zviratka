import React from 'react';
import './style.css';

const Animal = ({nazev, latin, foto, id, onSelect}) => {

    return(

        <>
            <div className="animal" onClick={() => onSelect(id)}>
				<div className="animal__image">
					<img src={foto} alt={nazev} />
				</div>
				<div className="animal__desc">
					<div className="animal__name">{nazev}</div>
					<div className="animal__latin">{latin}</div>
				</div>
			</div>
        </>
    )
}

export default Animal;