import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import style from './CSS/CountryDetails.module.css';
import  { getById } from '../actions/actions.js'
// import { Link } from 'react-router-dom';
const {bar, CountryDetail, activities, activitiesDiv, spanText,div, subDiv } = style

export function CountryDetails(props){
    // console.log(({match}) => ())
    let actualId = window.location.pathname.slice(9)
    useEffect(() => {
        props.getById(actualId)
    },[])
    
    return(     

            <div className={ CountryDetail} >
                
                {props.byId.getById.map(e => {
                    return(
                <div className={ div}>
                    <div className={ subDiv}>
                        <img src={e.imgFlag} alt='Here is the Flag' />
                        <h1>{e.name}</h1>
                        <h2>Continent: {e.continent}</h2>
                        <h3>Capital: {e.capital}</h3>
                        <h3>Subregion: {e.subRegion}</h3>
                        <h3>Area: {e.area} KM2</h3>
                        <h3>Population: {e.population} habitants</h3>
                        <div>
                    </div>    
                        <h2>Activities</h2>
                        <div className={activitiesDiv}>
                            <div className={bar}>
                                <span className={spanText}>Activity Name</span>
                                <span className={spanText} >Difficulty</span>
                                <span className={spanText}>Duration</span>
                                <span className={spanText}>Season</span>
                                
                            </div>
                                {e.activities.map(e =>{
                                    return(
                                        <div className={activities}>
                                            <span className={spanText}>{e.name}</span>
                                            <span className={spanText}>{e.difficulty}</span>
                                            <span className={spanText}>{e.duration}</span>
                                            <span className={spanText}>{e.season}</span>                       
                                        </div>  
                                    )
                                })}
                        </div>     
                            
                    </div>
                </div> 
                    )
                
                })
                /* <img src={props.state[0].imgFlag} alt='Here is the Flag' />
                <h1>{props.state[0].name}</h1>
                <h2>Continent: {props.state[0].continent}</h2>
                <h3>Capital: {props.state[0].capital}</h3> */}
                
                
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