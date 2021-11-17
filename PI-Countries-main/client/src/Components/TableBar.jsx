import React from 'react';
import style from './CSS/TableBar.module.css';
// import ordenar from '../img/Ordenar.png';
// import Filter from './Filter.jsx'
// import FilterImg from '../img/Filter.png'
export default function TableBar(){
    return(
        <div className={style.bar}>
            <div className={style.topBar}>
                
                <div className={style.divOrder}>
                    <p>Country flag</p>
                </div>
                <div className={style.divOrder}>
                    <button className={style.btn}>
                        <p>Name ↕</p>
                    </button>
                </div>
                <div className={style.divOrder}>
                    <p>Contentinent</p>
                </div>
            </div>
        </div>
    );
};

