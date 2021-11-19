import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/Filter.module.css';
import { allArr } from './constants.js';
import { Link } from 'react-router-dom';


export default function Filter({onSort, onSortByPopulation, handleChangeD, handleChangeS, handleChangeC}){
    let {div, filter, filterBtn, subTitle, form} = style;

    
    // console.log(filtered)
    return(
        <div className={div}>
            <div className={filter}>
                <div>
                    <p className={subTitle}>Activity Difficulty</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='1'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeD(1)}
                            />
                            <span>1</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='2'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeD(2)}
                            />
                            <span>2</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='3'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeD(3)}
                            />
                            <span>3</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='4'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeD(4)}
                            />
                            <span>4</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='5'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeD(5)}
                            />
                            <span>5</span>
                        </div>
                    </form>
                    <p className={subTitle}>Activity Season</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Summer'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeS("Summer")}
                            />
                            <span>Summer</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Autumn'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeS('Autumn')}
                            />
                            <span>Autumn</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Winter'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeS('Winter')}
                            />
                            <span>Winter</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Spring'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeS('Spring')}
                            />
                            <span>Spring</span>
                        </div>
                    </form>
                    <p className={subTitle}>Filter By Continent</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Africa'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeC("Africa")}
                            />
                            <span>Africa</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='America'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeC("America")}
                            />
                            <span>America</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Asia'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeC("Asia")}
                            />
                            <span>Asia</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Europe'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeC("Europe")}
                            />
                            <span>Europe</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Oceania'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeC("Oceania")}
                            />
                            <span>Oceania</span>
                        </div>
                    </form>
                </div>
                <button onClick={onSort} className={filterBtn}>Sort By Name (A-Z)</button>

                <button onClick={onSortByPopulation} className={filterBtn}>Sort By Lower Population</button>               
            </div>
        </div>
    );
};

