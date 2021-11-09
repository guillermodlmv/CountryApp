import React from 'react';
import style from './CSS/Country.module.css';
import { Link } from 'react-router-dom';

export default function Country({ Name, Flag, Continent, Code,filterState}){
    return(
        <Link to={`/Country/${Code}` } style={{ textDecoration: 'none' }} className={style.link}>
        
            <div className={ style.country} >
                    <img src={Flag} alt={`${Name}Flag`} className={style.flag}/>
                    <h1>{Name}</h1>
                    <h1>{Continent}</h1>
            </div>
        </Link>
    );
};
