import React, {useState, useEffect} from 'react';
import style from './CSS/NewActivity.module.css';
import { connect } from 'react-redux';
import  { getCountryNames} from '../actions/actions.js'
const { div, form, subDiv, inputClass, btn, inputClass2, inputClass3, btnAdd, countriesDiv } = style;
export function NewActivity(props) {
    
    useEffect(() =>  {
        props.getCountryNames()
    },[])

    
    return (
        <div className={div}  >
            <form className={form}>
                <div className={subDiv}>
                    <label for="name">Activity Name: </label>
                    <input className={inputClass} type="text" />
                </div>
                <div className={subDiv}>
                    <label for="difficulty">Difficulty: </label>
                    <select className={inputClass2} name="difficulty">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className={subDiv}>
                    <label for="duration">Activity Duration:</label>
                    <input className={inputClass} type="number" />
                </div>
                <div className={subDiv}>
                <label for="season">Season: </label>
                    <select className={inputClass2} name="season">
                        <option>Summer</option>
                        <option>Autumn</option>
                        <option>Winter</option>
                        <option>Spring</option>
                    </select>
                </div>
                <div>
                    <div className={subDiv}>
                        <label for="name">Select Countries:</label>
                        <div>
                            <select className={inputClass3}>
                            {props.names.map(e => {
                                return (
                                    <option>{e }                     
                                    </option>
                                )
                            })
                                
                            }
                            </select>
                            <button className={btnAdd}>+</button>
                        </div>
                        <div className={countriesDiv}>AQUI SE AGREGA</div>
                    </div>
                </div>
                <input className={btn} type="button" value="Add Activity" />
            </form>
        </div>
    );
};
function mapStateToProps(state) {
    return{
        names:state.countriesNames,
    }
}

export default connect(mapStateToProps, {getCountryNames})(NewActivity)