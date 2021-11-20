import axios from "axios";
import {GET_COUNTRIES_NAMES, GET_BY_NAME, GET_ALL_ACTIVITIES, GET_BY_ID, FILTER, SEARCH_STATE} from '../Const/Const';


export const filters =  (name, difficulty, season, continent, sortByName, SortByPopulation) => async dispatch =>{
        const url = (name.length > 0) ? `http://localhost:3001/countries/showAll?name=${name}` :'http://localhost:3001/countries/showAll'
        console.log(url)
        axios.get(url)
        .then(response => {
        const db = response.data
        console.log(db)
        // console.log(db)
        //**********************FILTER BY DIFFICULTY ***********************/
        let aux = db.filter(e=> {
            if(difficulty.length === 0){ 
                return e
            }else{
                for(let i=0; i < difficulty.length; i++) {
                    for(let j=0; j < e.activities.length; j++){
                            if(difficulty[i] === parseInt(e.activities[j].difficulty)){
                                return e
                            }
                    }
                }
            }
        })
        if(aux.length === 0){
            aux = []
        }
        //**********************FILTER BY SEASON ***********************/
        
        let aux2 = aux.filter(e=> {
            if(season.length === 0){
                return e
            }else{
                for(let i=0; i < season.length; i++) {
                    for(let j=0; j < e.activities.length; j++){
                            if(season[i] === e.activities[j].season){
                                return e
                            }
                    }
                }
            }
        })
        if(aux2.length === 0){
            aux2 = []
        }
        //**********************FILTER BY CONTINENT ***********************/
        let aux3 = aux2.filter(e=> {
            if(continent.length === 0){ 
                return e
            }else{              
                for(let i=0; i < continent.length; i++) {
                            if(continent[i] === e.continent){
                                return e
                            }
                }
            }
        })
        if(aux2.length === 0){
            aux3 = []
        }
            let order = []
        //**********************FILTER BY NAME (A-Z OR Z-A)***********************/    
            if(sortByName === true){
                order = aux3.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                        return 0;
                });
            }else if(sortByName === false){
                order  = aux3.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                        return 0;
                });
        //**********************FILTER BY POPULATION BY HIGHER AND LOWER***********************/    
            }else if(SortByPopulation === false){
                order  = aux3.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population) {
                        return 1;
                    }
                        return 0;
                });
            }else if(SortByPopulation === true){
                order  = aux3.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (a.population < b.population) {
                        return -1;
                    }
                        return 0;
                });
            }
            console.log(order)
                dispatch({
                    type:FILTER,
                    payload: order
                }) 
        })

}


export const getCountryNames = () => async (dispatch) => {
    const db = await axios.get('http://localhost:3001/countries/showAll')
    const names = db.data.map(e => e.name)
    let order = names.sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    }
                    if (a < b) {
                        return -1;
                    }
                        return 0;
                });           
    dispatch({
        type: GET_COUNTRIES_NAMES,
        payload: names
    })
}

export const getById = (id) => {
    return  (dispatch, getState) =>{
            axios
            .get(`http://localhost:3001/countries/${id}`)
            .then(response => {
                const getById = response.data
                dispatch({
                    type: GET_BY_ID,
                    payload: getById,
                })
            })           
    }
}

export const getByName =(name) =>{
    return  (dispatch, getState) =>{
            dispatch({
                type: GET_BY_NAME,
                payload:name
            })
    }
}

export const getAllActivities = () => {
    return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/activities')
        dispatch({type: GET_ALL_ACTIVITIES, payload: response.data })
    }
}

export const searchName = (state) => {
    return async(dispatch) => {
            dispatch({type: SEARCH_STATE, payload: [state] })
    }
}