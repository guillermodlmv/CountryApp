import axios from "axios";
import {GET_COUNTRIES_NAMES, GET_BY_NAME, GET_ALL_ACTIVITIES, GET_BY_ID, FILTER, SEARCH_STATE,SWAP_TO_CARDS} from '../Const/Const';
export const filters =  (name, difficulty, season, continent, sortByName, SortByPopulation) => async dispatch =>{
        const url = (name.length > 0) ? `http://localhost:3001/countries/showAll?name=${name}` :'http://localhost:3001/countries/showAll'
        axios.get(url)
        .then(response => {
        const db = response.data
        //**********************FILTER BY DIFFICULTY ***********************/
        let aux = db.filter(e=> {
            if(difficulty.length === 0){ //difficUlty =[] O SI NO FILTRAN POR DIFICULTAD
                return e // REGRESA SIN FILTRAR
            }else{// SI HAY DIFICULTAD POR FILTRAR
                for(let i=0; i < difficulty.length; i++) {// RECORREMOS INPUT DE USUARIO DIFFICULTY = [1,2,5]
                    for(let j=0; j < e.activities.length; j++){//RECORRER NUESTRAS ACTIVIDADES
                            if(difficulty[i] === parseInt(e.activities[j].difficulty)){ // SI INPUT DE USUARIO ES IGUAL A DIFICULTAD DE DB ACEPTAR EN FILTRO
                                return e // FILTRO PASADO!
                            }
                    }
                }
            }
        })
        if(aux.length === 0){// SI YA SE SE RECORRIO PERO NO SE ENCONTRO NADA
            aux = [] // RETORNA UN ARR VACIO
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

export const createActivity = (details) => {
    return async function(){
        if(details.name !== undefined && details.name !== '' && details.countryName.length > 0){
            await axios.post('http://localhost:3001/activities', details)
            alert(`activity ${details.name} created!`)
        }if(details.countryName.length < 1){
            alert('Please insert Country')
        }
        if(details.duration < 1){
            alert('Please insert duration')
        }if(details.name < 1){
            alert('Please insert Name')
        }
        
        
    }
}

export const swapToCards = (state) =>{
    return async(dispatch) => {
        dispatch({
            type: SWAP_TO_CARDS, 
            payload: state })
    }
}