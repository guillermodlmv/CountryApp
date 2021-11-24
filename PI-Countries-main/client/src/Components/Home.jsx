import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './CSS/Home.module.css';
import  { filters,} from '../actions/actions.js'
import TableBar from './TableBar.jsx';
import Filter from './Filter.jsx';
import Countries from './Countries.jsx';

export function Home(props){
    useEffect(() => {
        props.filters(props.dataByName,props.difficulty, props.season, props.continent, props.sortByName, props.sortByPopulation)
    }, [props.sortByName, props.sortByPopulation,props.difficulty, props.season, props.continent,props.dataByName])

    return(
        <div>
            <div className={style.home}>
                <Filter/> 
                <div className={style.filters}>                       
                        <TableBar/>
                        <Countries/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>  {
    return {
        sortByName:state.filterState.sortByName,
        sortByPopulation:state.filterState.sortByPopulation,
        difficulty:state.filterState.difficulty,
        season:state.filterState.season,
        continent:state.filterState.continent,
        dataByName:state.getByName,
        country: state.filter
    }
}
export default connect(mapStateToProps,{filters})(Home)