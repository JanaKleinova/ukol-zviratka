import React from 'react';
import './style.css';

const AnimalDetail = ({detailAnimal}) => {

    return(

        
        
        <div className="detail">

            <div className="detail__content">

                <div className="detail__header">
                    <img className="detail__image" src={detailAnimal.foto} alt="xxx" />
                    <div className="detail__title">
                        <h2 className="detail__name"><span>{detailAnimal.nazev}</span></h2>
                        <div className="detail__latin"><span>{detailAnimal.nazevLatinsky}</span></div>
                    </div>
                </div>

                <div className="detail__info">
                    <p className="detail__desc">
                    {detailAnimal.popis}
                    </p>

                    <div className="detail__items">
                        <div className="detail__item">
                            <h3>Domovina</h3>
                            <p>{detailAnimal.domovina}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Biotop</h3>
                            <p>{detailAnimal.biotop}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Potrava</h3>
                            <p>{detailAnimal.potrava}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Velikost</h3>
                            <p>{detailAnimal.velikost}</p>
                        </div>
                    </div>

                    <div className="detail__zoo">
                        <h3>Najdete v těchto ZOO</h3>
                        <p>{detailAnimal.zoo}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AnimalDetail;