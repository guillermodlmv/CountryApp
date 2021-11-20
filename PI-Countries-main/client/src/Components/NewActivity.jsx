import React, {useState, useEffect} from 'react';
import style from './CSS/NewActivity.module.css';
import { connect } from 'react-redux';
import  { getCountryNames, createActivity} from '../actions/actions.js'
const { div, form, subDiv, inputClass, btn, inputClass2, inputClass3, btnAdd, countriesDiv, countryBtn } = style;

export function NewActivity(props) {
    const [countries, setCountries] = useState([])
    const [data, setData] = useState({
        activityName : '',
        difficulty : 1,
        duration:1,
        season:'Summer',
        countrie : 'Afghanistan'
    })

    useEffect(() =>  {
            props.getCountryNames()
        },[])
    function changeSeason(event){
        setData({...data, season: event.target.value})
    }

    function changeDifficulty(event){
        setData({...data, difficulty: event.target.value})
    }

    function changeCountry(event){
            setData({...data, countrie: event.target.value})
    }

    function onClose(e){
        let index = countries.indexOf(e.target.value)
        setCountries([...countries.slice(0, index).concat(...countries.slice(index+1, countries.length))])
    }

    function onClick(){
        if(countries.indexOf(data.countrie) === -1){
        setCountries([...countries, data.countrie])
        }
    }

    let activity = {name: data.activityName, difficulty: data.difficulty, duration: data.duration, season: data.season, countryName: countries.toString()}

    return (
        <div className={div}  >
            <form className={form}>
                <div className={subDiv}>
                    <label for="name">Activity Name: </label>
                    <input 
                    className={inputClass} 
                    type="text"
                    onChange={e => {setData({...data, activityName: e.target.value})}} 
                    />
                </div>
                <div className={subDiv}>
                    <label for="difficulty">Difficulty: </label>
                    <select 
                    className={inputClass2} 
                    name="difficulty"
                    onChange={changeDifficulty}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className={subDiv}>
                    <label for="duration">Activity Duration (Minutes):</label>
                    <input 
                    className={inputClass} 
                    type="number" 
                    onChange={e => {setData({...data, duration: e.target.value})}}
                    />
                </div>
                <div className={subDiv}>
                <label for="season">Season: </label>
                    <select 
                    className={inputClass2} 
                    name="season"
                    onChange={changeSeason}
                    >
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
                            <select 
                            className={inputClass3}
                            onChange={changeCountry}
                            >
                            {props.names.map(e => {
                                return (<option>{e}</option>)
                            })
                            }
                            </select>
                            <input 
                            onClick={onClick} 
                            className={btnAdd} 
                            type="button" 
                            value="+" 
                            />
                        </div>
                        <div className={countriesDiv}>
                            {countries.map(e => {
                                return(
                                <input type="button" value={e} className={countryBtn} onClick={onClose} />
                                )
                                
                                })}
                        </div>
                    </div>
                </div>
                <input className={btn} onClick={createActivity(activity)} type="button" value="Add Activity" />
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