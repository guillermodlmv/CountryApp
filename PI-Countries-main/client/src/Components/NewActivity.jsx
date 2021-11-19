import React, {useState, useEffect} from 'react';
import style from './CSS/NewActivity.module.css';
import { connect } from 'react-redux';
import  { getCountryNames} from '../actions/actions.js'
const { div, form, subDiv, inputClass, btn } = style;
export function NewActivity(props) {
    console.log(props.names)
    
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
                    <select className={inputClass} name="difficulty">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className={subDiv}>
                    <label for="duration">Activity Duration:</label>
                    <input className={inputClass} type="text" />
                </div>
                <div className={subDiv}>
                    <label for="season">Activity Season:</label>
                    <input className={inputClass} type="text" />
                </div>
                <div>
                    <div className={subDiv}>
                        <label for="name">Select Countries:</label>
                        <div>
                            <select>
                            {props.names.map(e => {
                                return (
                                    <option>{e }                     
                                    </option>
                                )
                            })
                                
                            }
                            </select>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <input className={btn} type="button" value="Add Activity" />
            </form>
        </div>
    );
};
function mapStateToProps(state) {
    return{
        names:state.countriesNames
    }
}

export default connect(mapStateToProps, {getCountryNames})(NewActivity)