import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/CountryDetails.module.css';
import  {  getCountryNames} from '../actions/actions.js'
// import { Link } from 'react-router-dom';
const {bar, CountryDetail, activities } = style

export function CountryDetails(props){
    useEffect(() => {
        props.getCountryNames()
    },[])
    console.log(props.getCountryNames())
    return(     

            <div className={ CountryDetail} >
                
                <img src={''} alt='Here is the Flag' />
                <h1>Here is the name(HERE IS CODE)</h1>
                <h2>Continent: Here is the Continent</h2>
                <h3>Capital: Here is the Capital</h3>
                <h3>Subregion: Here is the Subregion</h3>
                <h3>Area: Here is the Area KM2</h3>
                <h3>Population: Here is the Population KM2</h3>
                <div>
                    <h2>Activities</h2>
                    <div className={bar}>
                        <p>Name</p>
                        <p>Difficulty</p>
                        <p>Duration</p>
                        <p>Season</p>
                    </div>
                    <div className={activities}>
                        <p>HERE IS THE Name</p>
                        <p>HERE IS THE Difficulty</p>
                        <p>HERE IS THE Duration</p>
                        <p>HERE IS THE Season</p>
                    </div>
                </div>
            </div>
    );
};

function mapDispatchToProps(dispatch) {
    return{
        getCountryNames: payload => dispatch(getCountryNames(payload))
    }
}
function mapStateToProps(state) {
    return {
        names: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails)