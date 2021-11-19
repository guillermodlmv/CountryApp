import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/Home.module.css';
import  { filters,} from '../actions/actions.js'
import TableBar from './TableBar.jsx';
import Filter from './Filter.jsx';
import Countries from './Countries.jsx';
export function Home(props){
    const [sortByName, setSortByName] = useState(true)
    const [sortByPopulation, setSortByPopulation] = useState(true)
    const [difficulty, setDifficulty] = useState({
        one: false,
        two:false,
        three:false,
        four: false,
        five: false,
    });
    const [season, setSeason] = useState({
        Summer:false,
        Autumn: false,
        Winter: false,
        Spring:false,
    })
    const [continent, setcontinent] = useState({
        Africa: false,
        America:false,
        Asia:false,
        Europe: false,
        Oceania: false,
    });
    const [page, setPage] = useState(0)

    function onNext(){
        setPage(prev => prev+1 )
    }
    function onAfter(){
        setPage(prev => prev-1 )
    }
    function onSort(){
        sortByName ?  setSortByName(() => false) : setSortByName(() => true)
    }

    function onSortByPopulation(){
        setSortByName(() => null)
        if(sortByPopulation){
            setSortByPopulation(() => false)
            
        }else{
            setSortByPopulation(() => true)
        }
    }

    const difficultyArr = Object.values(difficulty).filter(e =>{ 
        if(!isNaN(e)) return e
    })
    const seasonArr = Object.values(season).filter(e =>{ 
        if(typeof(e) === 'string')return e
    })
    const continentArr = Object.values(continent).filter(e =>{ 
        if(typeof(e) === 'string')return e
    })
    function handleChangeDifficulty(dif){
        setPage(0)
        if(dif === 1){
            setDifficulty({...difficulty, one:difficulty.one !== 1 ? 1 : ''})
        }else if(dif === 2){
            setDifficulty({...difficulty, two:difficulty.two !== 2 ? 2 : ''})
        }else if(dif === 3){
            setDifficulty({...difficulty, three:difficulty.three !== 3 ? 3 : ''})
        }else if(dif === 4){
            setDifficulty({...difficulty, four:difficulty.four !== 4 ? 4 : ''})
        }else if(dif === 5){
            setDifficulty({...difficulty, five:difficulty.five !== 5 ? 5 : ''})
        }
    }
    function handleChangeSeason(seas){
        setPage(0)
        console.log(seas === 'Summer')
        if(seas === 'Summer'){
            setSeason({...season, Summer: (season.Summer === false ? seas : false)})
        }else if(seas === 'Autumn'){
            setSeason({...season, Autumn:(season.Autumn === false ? seas : false)})
        }else if(seas === 'Winter'){
            setSeason({...season, Winter:(season.Winter === false ? seas : false)})
        }else if(seas === 'Spring'){
            setSeason({...season, Spring:(season.Spring === false ? seas : false)})
        }
    }
    function handleChangeContinent(cont){
        setPage(0)
        if(cont === 'Africa'){
            setcontinent({...continent, Africa: (continent.Africa === false ? cont : false)})
        }else if(cont === 'America'){
            setcontinent({...continent, America:(continent.America === false ? cont : false)})
        }else if(cont === 'Asia'){
            setcontinent({...continent, Asia:(continent.Asia === false ? cont : false)})
        }else if(cont === 'Europe'){
            setcontinent({...continent, Europe:(continent.Europe === false ? cont : false)})
        }else if(cont === 'Oceania'){
            setcontinent({...continent, Oceania:(continent.Oceania === false ? cont : false)})
        }
    }
// console.log("props: ",props.country)

    useEffect(() => {
        props.filters(difficultyArr, seasonArr, continentArr, sortByName, sortByPopulation)
    }, [sortByName, sortByPopulation,difficulty, season, continent])


    return(
        <div>
            <div className={style.home}>
                <Filter handleChangeC={handleChangeContinent} handleChangeS={handleChangeSeason} handleChangeD={handleChangeDifficulty} onSortByPopulation={onSortByPopulation} onSort={onSort}/> 
                <div className={style.filters}>                       
                        <TableBar/>
                        <Countries page={page} onNext={onNext} onAfter={onAfter} data ={props.country.map(e =>e)}/>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) =>  {
    return {
        country: state.filter
    }
}

export default connect(mapStateToProps,{filters})(Home)