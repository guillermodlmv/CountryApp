import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/CountryDetails.module.css';
import  { getById } from '../actions/actions.js'
const {bar, CountryDetail, activities, activitiesDiv, spanText,dataDiv } = style

export function CountryDetails(props){
    // console.log(({match}) => ())
    let actualId = window.location.pathname.slice(9)
    useEffect(() => {
        props.getById(actualId)
    },[])
    
    return(     
            <div className={ CountryDetail} >
                {props.byId.getById.map(e => {
                    const {imgFlag , name, continent, capital, subRegion, area, population} = e
                    return(
                        <div className={dataDiv}>
                            <div>
                                <img src={imgFlag} alt='Here is the Flag' />
                                <h1>{name}</h1>
                                <h2>Continent: {continent}</h2>
                                <h3>Capital: {capital}</h3>
                                <h3>Subregion: {subRegion}</h3>
                                <h3>Area: {area} KM2</h3>
                                <h3>Population: {population} habitants</h3>    
                            </div>
                            <div className={activitiesDiv}>
                                <h2>Activities</h2>
                                <div className={bar}>
                                    <span className={spanText}>Activity Name</span>
                                    <span className={spanText} >Difficulty</span>
                                    <span className={spanText}>Duration</span>
                                    <span className={spanText}>Season</span>
                                </div>
                                    {e.activities.map(e =>{
                                        const {name, difficulty, duration, season } = e
                                        return(
                                            <div className={activities}>
                                                <span className={spanText}>{name}</span>
                                                <span className={spanText}>{difficulty}</span>
                                                <span className={spanText}>{duration} Minutes</span>
                                                <span className={spanText}>{season}</span>                       
                                            </div>  
                                        )
                                    })}
                            </div>     
                        </div>
                    )
                
                })
                }
                
            </div>
    );
};


function mapStateToProps(state) {
    // console.log(state)
    return {
        byId: state
    }
}

export default connect(mapStateToProps, {getById})(CountryDetails)