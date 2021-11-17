import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/Home.module.css';
import Countries from './Countries.jsx';
import Filter from './Filter.jsx';
import  { filters, getCountryNames} from '../actions/actions.js'

export function Home(props){
    
    useEffect(() => {
        props.filters([ 1], [ 'Summer'])
    },)
    useEffect(() => {
        props.getCountryNames()
    },)


    return(
        <div className={style.home}>
            <div className={style.filters}>
                <Filter onClick={props.onClick} filterState={props.filterState}  />
                <Countries filterState={props.filterState} />
            </div>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return{
        filters: (difficulty, season) => dispatch(filters(difficulty, season)),
        getCountryNames: () => dispatch(getCountryNames())
    }
}

export default connect(null, mapDispatchToProps)(Home)