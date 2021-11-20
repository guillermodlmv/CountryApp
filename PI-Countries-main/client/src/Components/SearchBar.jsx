import React, {useState, useEffect} from 'react';
import style from './CSS/SearchBar.module.css';
import  {getByName} from '../actions/actions.js'
import { connect } from 'react-redux';

export  function SearchBar(props){
    const[country, setCountry] =useState('')
    useEffect(() =>  {
        props.getByName(country)
    },[onSearch])

    function onSearch(countryByName) {
        //Llamado a la API del clima
        setCountry(countryByName);
    }

    return(
        <form 
        className={style.divBar} 
        onSubmit={e => {
            e.preventDefault();
            onSearch(country);
            setCountry(country)
        }}>
            <input
                type="text"
                placeholder=" Insert Country Name"
                value={country}
                onChange={e => {
                    setCountry(e.target.value)
                }}
                className={style.input}
            />
        </form>
    );
};
function mapStateToProps(state) {
    console.log(state.getByName)
    return{
        countryByName: state.getByName
    }
}

export default connect(mapStateToProps, {getByName})(SearchBar)