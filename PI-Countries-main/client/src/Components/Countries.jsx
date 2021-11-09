import React from 'react';
import style from './CSS/Countries.module.css';
import { Link } from 'react-router-dom';
import Country from './Country.jsx';

export default function Countries({ filterState  }){
    let countries= {name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" }
    if(countries){
        return(
            <div className={style.noCountrie} >
                <Country
                    Name= { countries.name }
                    Flag= { countries.flag }
                    Continent= { countries.continent }
                    Code= { countries.code }
                    filterState = {filterState}
                />
            </div>
        )
    } else{
        return(
            <div className={style.noCountrie}>Not countries found</div>
        )
    }
};