import React, { useState } from 'react';
import style from './CSS/Filter.module.css';
import { allArr } from './constants.js';

export default function Filter(){
    let {div, filter, filterBtn, subTitle, form} = style;
    const [ populationFilter, setPopulationFilter] = useState('No Filter') //State to sort population default checked

    return(
        <div className={div}>
            <div className={filter}>
                <div>
                    {
                        allArr.map(e => 
                        <div>
                            <p className={subTitle}>{e.title}</p>
                            <form className={form} >
                                {
                                    e.arr.map(result=>
                                        <div>
                                            <input 
                                            type={e.title === 'Sort by Population' ? "radio" : "checkbox" }
                                            value={result} 
                                            name="difficulty" 
                                            checked={e.title !== 'Sort by Population' ? null : result === populationFilter}
                                            onChange={e.title !== 'Sort by Population' ? 0 : (e) => setPopulationFilter(e.target.value)}
                                            style={{cursor:"pointer"}}
                                            />
                                            <span>{result}</span>
                                        </div>
                                    )       
                                }
                            </form>
                        </div>)
                    }
                </div>
                <button className={filterBtn}>Filter</button>
            </div>
        </div>
    );
};

