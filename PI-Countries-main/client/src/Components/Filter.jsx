import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import style from './CSS/Filter.module.css';
import {swapToCards, filterState} from '../actions/actions.js'


export  function Filter({ filterState, swapToCards}){

    let {div, filter, filterBtn, subTitle, btnDiv} = style;
    
    const [sortByName, setSortByName] = useState(true)
    const [cards, setCards] = useState(false)
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
        Antarctica: false,
    });

    const difficultyArr = Object.values(difficulty).filter(e =>{ 
        if(!isNaN(e)) return e
    })
    const seasonArr = Object.values(season).filter(e =>{ 
        if(typeof(e) === 'string')return e
    })
    const continentArr = Object.values(continent).filter(e =>{ 
        if(typeof(e) === 'string')return e
    })
    



    useEffect(() => {
        swapToCards(cards)
    }, [cards])

    useEffect(() => {
        filterState(sortByName, sortByPopulation, difficultyArr, seasonArr,continentArr)
    }, [sortByName, sortByPopulation, difficulty, season, continent])
    
    function changeStyle(){
        if(cards === true) {setCards(false)}
        else {setCards(true)}
    }
    function onSortByName(){
        sortByName === true ?  setSortByName(false) : setSortByName(() => true)
    }
    function onSortByPopulation(){
        setSortByName(() => null)
        if(sortByPopulation){
            setSortByPopulation(() => false)
            
        }else{
            setSortByPopulation(() => true)
        }
    }

    function handleChangeDifficulty(dif){
        
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
        // setPage(0)
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
        // setPage(0)
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
        }else if(cont === 'Antarctica'){
            setcontinent({...continent, Antarctica:(continent.Antarctica === false ? cont : false)})
        }
    }
    return(
        <div className={div}>
            <div className={filter}>
                <div>
                    <p className={subTitle}>Activity Difficulty</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='1'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeDifficulty(1)}
                            />
                            <span>1</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='2'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeDifficulty(2)}
                            />
                            <span>2</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='3'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeDifficulty(3)}
                            />
                            <span>3</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='4'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeDifficulty(4)}
                            />
                            <span>4</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='5'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeDifficulty(5)}
                            />
                            <span>5</span>
                        </div>
                    </form>
                    <p className={subTitle}>Activity Season</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Summer'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeSeason("Summer")}
                            />
                            <span>Summer</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Autumn'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeSeason('Autumn')}
                            />
                            <span>Autumn</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Winter'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeSeason('Winter')}
                            />
                            <span>Winter</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Spring'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeSeason('Spring')}
                            />
                            <span>Spring</span>
                        </div>
                    </form>
                    <p className={subTitle}>Filter By Continent</p>
                    <form>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Africa'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("Africa")}
                            />
                            <span>Africa</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='America'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("America")}
                            />
                            <span>America</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Asia'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("Asia")}
                            />
                            <span>Asia</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Europe'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("Europe")}
                            />
                            <span>Europe</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Oceania'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("Oceania")}
                            />
                            <span>Oceania</span>
                        </div>
                        <div>
                            <input 
                            type= "checkbox"
                            value='Oceania'
                            name="difficulty" 
                            style={{cursor:"pointer"}}
                            onChange={()=> handleChangeContinent("Antarctica")}
                            />
                            <span>Antarctica</span>
                        </div>
                    </form>
                </div>
                <div className={btnDiv}>
                    <input type={'button'} onClick={onSortByName} className={filterBtn} value={sortByName ? 'Sort By Name (Z-A)': 'Sort By Name (A-Z)'}  />
                    <input type={'button'} onClick={onSortByPopulation} className={filterBtn} value={!sortByPopulation ? 'Sort By Higer Population': 'Sort By Lower Population'}/>
                    <input type={'button'} onClick={changeStyle} className={filterBtn} value={cards ? 'Turn to rows':'Turn to cards '} /> 
                </div>          
            </div>
        </div>
    );
};
const mapStateToProps = (state) =>  {
    return {
        sortName: state.filterState,
        page:state.page,

    }
}

export default connect(mapStateToProps,{swapToCards, filterState})(Filter)
