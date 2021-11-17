import React from 'react';
// import { connect } from 'react-redux';
import style from './CSS/Countries.module.css';
// import { Link } from 'react-router-dom';
import Country from './Country.jsx';
import TableBar from './TableBar.jsx';
export default function Countries(){
    let countries= []
    // [{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" },,{name:'Mexico', flag:"https://flagcdn.com/w320/mx.png", continent:'America', code:"MEX" }]
    if(countries){
        return(
            <div className={style.noCountrie} >
                <TableBar/>
                {countries.map( countrie => 
                    <Country
                    Name= { countrie.name }
                    Flag= { countrie.flag }
                    Continent= { countrie.continent }
                    Code= { countrie.code }
                    /> 
                )
                }
            </div>
        )
    } else{
        return(
            <div className={style.noCountrie}>Not countries found</div>
        )
    }
};