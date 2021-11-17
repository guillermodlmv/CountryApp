import React from 'react';
import style from './CSS/NewActivity.module.css';
const { div, form, subDiv, inputClass, btn } = style;
export default function newActivity() {
    
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
                    <label for="name">Activity Season:</label>
                    <input className={inputClass} type="text" />
                </div>
                <div>
                    <select>
                    { 
                        
                    }
                    </select>
                </div>
                <input className={btn} type="button" value="Add Activity" />
            </form>
        </div>
    );
};
