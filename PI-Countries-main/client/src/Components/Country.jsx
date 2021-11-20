import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/Country.module.css';
import { Link } from 'react-router-dom';
import  { filters, getCountryNames} from '../actions/actions.js'
export default function Country(props){
    // console.log(Math.ceil(props.data.length/9))
    // console.log(props.data)
    
    const a = props.page;
    return(
        <div>
        {props.data.map((e, index) => {
            if(a === 0){
                if(index < 9 ){
                    return(
                        <Link  to={`/Country/${e.id}` } style={{ textDecoration: 'none' }} className={style.link}>
                            <div  className={ style.country} >
                                <div className={ style.subDiv}> 
                                    <img src={e.imgFlag} alt={`${props.Name} Flag`} className={style.flag}/>
                                </div>
                                <div className={ style.subDiv}>
                                    <h1>{e.name}</h1>
                                </div>
                                <div className={ style.subDiv}>
                                    <h1>{e.continent}</h1>
                                </div>
                            </div>
                        </Link>
                    ) 
                }
            }else{
                if(index > (9*a) && index <= (a*9 + 10)){
                return(
                    <Link to={`/Country/${e.id}` } style={{ textDecoration: 'none' }} className={style.link}>
                        <div className={ style.country} >
                        <div className={ style.subDiv}> 
                            <img src={e.imgFlag} alt={`${props.Name}Flag`} className={style.flag}/>
                        </div>
                        <div className={ style.subDiv}>
                            <h1>{e.name}</h1>
                        </div>
                        <div className={ style.subDiv}>
                            <h1>{e.continent}</h1>
                        </div>
                        </div>
                    </Link>
                ) 
            }
            }
        })
        }
        
        </div>
    );
};

