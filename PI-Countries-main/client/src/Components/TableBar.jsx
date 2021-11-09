import React from 'react';
import style from './CSS/TableBar.module.css';
import ordenar from '../img/Ordenar.png';
import Filter from './Filter.jsx'
import FilterImg from '../img/Filter.png'



export default function TableBar(){
    return(
        <div className={style.bar}>
            <div className={style.topBar}>
                
                <div className={style.divOrder}>
                    <p>Country flag</p>
                </div>
                <div className={style.divOrder}>
                    <p>Name</p>
                    <button className={style.btn}>
                        <img className={style.order} alt={''} src={ordenar}/>
                    </button>
                </div>
                <div className={style.divOrder}>
                    <p>Contentinent</p>
                </div>
            </div>
        </div>
    );
};

