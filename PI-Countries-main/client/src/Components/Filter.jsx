import React from 'react';
import style from './CSS/Filter.module.css';
import FilterImg from '../img/Filter.png'
export default function Filter({onClick, filterState}){
    let {div, filter, hide, filterBtn, btnImg, filterBtn2, filterBtn3} = style;

    return(

        <div className={div}>
            <div className={filter}>
                <div>
                </div>
                <div className={style.allFilters}>
                    <div className={style.Activityfilter}>
                        <p className={style.subTitle}>Activity Difficulty</p>
                        <div className={style.dificulty}>
                            <form >
                                <label for="1">
                                    <input id="1" type="checkbox" name="difficulty" />
                                    1
                                </label>
                                <label for="2">
                                    <input id="2" type="checkbox" name="difficulty"/>
                                    2
                                </label>
                                <label for="3">
                                    <input id="3" type="checkbox" name="difficulty"/>
                                    3
                                </label>
                                <label for="4">
                                    <input id="4" type="checkbox" name="difficulty"/>
                                    4
                                </label>
                                <label for="5">
                                    <input id="5" type="checkbox" name="difficulty"/>
                                    5
                                </label>
                            </form>
                        </div>
                        <div className={style.seasonDiv}>
                            <p className={style.subTitle}>Activity Season</p>
                            <form className={style.season}>
                                <label for="Summer">
                                    <input id="Summer" type="checkbox" name="difficulty"/>
                                    Summer
                                </label>
                                <label for="Autumn">
                                    <input id="Autumn" type="checkbox" name="difficulty"/>
                                    Autumn
                                </label>
                                <label for="Winter">
                                    <input id="Winter" type="checkbox" name="difficulty"/>
                                    Winter
                                </label>
                                <label for="Spring">
                                    <input id="Spring" type="checkbox" name="difficulty"/>
                                    Spring
                                </label>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className = {style.regionDiv}>
                            <p className={style.subTitle}>Region Filters</p>
                            <form className={style.regionForm}>
                                <label for="Africa">
                                    <input id="Africa" type="checkbox" name="difficulty"/>
                                    Africa
                                </label>
                                <label for="Americas">
                                    <input id="Americas" type="checkbox" name="difficulty"/>
                                    Americas
                                </label>
                                <label for="Asia">
                                    <input id="Asia" type="checkbox" name="difficulty"/>
                                    Asia
                                </label>
                                <label for="Europe">
                                    <input id="Europe" type="checkbox" name="difficulty"/>
                                    Europe
                                </label>
                                <label for="Oceania">
                                    <input id="Oceania" type="checkbox" name="difficulty"/>
                                    Oceania
                                </label>
                            </form>
                            
                        </div>
                        
                    </div>
                    <div className={style.population}>
                        <p className={style.subTitle}>Sort by Population</p>
                        <form className= {style.population}>
                            <label for="noFilter">
                                <input id="noFilter" type="radio" name="population" checked/>
                                No Filter
                            </label>
                            <label for="smallerPopulation">
                                <input id="smallerPopulation" type="radio" name="population"/>
                                Smaller Population
                            </label>
                            <label for="longerPopulation">
                                <input id="longerPopulation" type="radio" name="population"/>
                                Longer Population
                            </label>
                        </form>
                    </div>
                </div>
                <button className={filterBtn2}>Filter</button>
            </div>
        </div>
    );
};

