import axios from "axios";
import {GET_COUNTRIES_NAMES, GET_DB, GET_TEN_COUNTRIES, GET_NINE_COUNTRIES, GET_BY_NAME, GET_ALL,GET_ALL_ACTIVITIES, GET_BY_ID, FILTER} from '../Const/Const';
//Get all DB
export const getDB = () => {
    return async () => {
        const db = await axios.get('http://localhost:3001/countries/showAll')
        return {
            type: GET_DB,
            payload: db.data
        }
    }

}
let obj = {
    "id": "AFG",
    "name": "Afghanistan",
    "imgFlag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    "continent": "Asia",
    "capital": "Kabul",
    "subRegion": "Southern Asia",
    "area": 652230,
    "population": 2837743,
    "activities": [
    {
        "id": 2,
        "name": "VOLAR",
        "difficulty": "2",
        "duration": "30",
        "season": "Winter",
        "Tourism": {
        "actualizado": "2021-11-17T07:05:25.984Z",
        "countryId": "AFG",
        "activityId": 2
        }
    }
    ]
}
//filters
//Object.values(e.activities)
export const filters =  (difficulty, season) => async dispatch =>{
        const db = await axios.get('http://localhost:3001/countries/showAll')
        let aux = [obj];     
            if(difficulty){//look at looked difficulty
                if(aux.length < 1){     
                    for(let i=0; i < difficulty.length; i++){
                        db.data.map(e => {
                            if(e.activities.length > 0  ){// validator for look countries with ativities without repeat
                                for(let j = 0; j < e.activities.length; j++){
                                    if(parseInt(e.activities[j].difficulty) === difficulty[i] && aux.indexOf(e) === -1){
                                        aux.push(e)
                                    } 
                                }
                            }
                            return 0;
                        })
                    }
                }else{
                    
                    for(let i=0; i < difficulty.length; i++){// recorre [1, 2, 3, 4, 5]
                        for(let j=0; j < aux.length; j++){// recorre los paises que ya se filtraron
                            let boolean = false // auxiliar para validar existencia de actividad
                            if((aux[j].activities.length > 0)){ //validar que tengan actividades
                                for(let k = 0; k < aux[j].activities.length;k++){// recorrer actividades
                                    if(parseInt(aux[j].activities[k].difficulty) === parseInt(difficulty[i])){ //validacion si existe acitividad con dificultad en pais
                                        boolean = true // setear true si el pais tiene alguna actividad con la dificultad
                                    }
                                }
                            }

                            if(boolean=== false){
                                console.log('me volvi true w')
                            }
                            
                        }
                        
                    }
                }
                
            }if(season){
                if(aux.length < 1){
                    for(let i=0; i < season.length; i++){
                        db.data.map(e => {
                            if(e.activities.length > 0  ){// validator for look countries with ativities without repea  
                                for(let j = 0; j < e.activities.length; j++){
                                    if(e.activities[j].season === season[i] && aux.indexOf(e) === -1){
                                        aux.push(e)
                                    } 
                                }
                            }
                            return 0;
                        })
                    }
                }
                
            }
            
        // else{
        //     if(difficulty && aux.length === 0){//look at looked difficulty
        //         for(let i=0; i < difficulty.length; i++){
        //             aux.data.map(e => {
        //                 if(e.activities.length > 0  ){// validator for look countries with ativities without repeat
        //                     for(let j = 0; j < e.activities.length; j++){
        //                         if(parseInt(e.activities[j].difficulty) === difficulty[i] && aux.indexOf(e) === -1){
        //                             aux.push(e)
        //                         } 
        //                     }
        //                 }
        //             })
        //         }
        //     } 
        // }
            
            dispatch({
                type:FILTER,
                payload: aux
            }) 
    
}

// Get ten countries 2 to last page
export const tenCountries = () => {
    return async (dispatch) => {
        const ten = await axios.get('http://localhost:3001/countries/showAll')
        dispatch({
            type: GET_TEN_COUNTRIES,
            payload: ten.data
        })
    }
}

export const getCountryNames = () => async (dispatch) => {
    const db = await axios.get('http://localhost:3001/countries/showAll')
    const names = db.data.map(e => e.name)
    dispatch({
        type: GET_COUNTRIES_NAMES,
        payload: names
    })
}

// Get Nine countries to first Page
export const nineCountries = () => {
    return async dispatch => {
        const nineCountries = await axios.get('http://localhost:3001/countries/showAll')
        dispatch({
            type: GET_NINE_COUNTRIES,
            payload: nineCountries.data
        })
    }
}

//Get country with the name input from user
export const getByName = (name) => {
    return async dispatch => {
        if(name){
            const getCountry = await axios.get(`http://localhost:3001/countries?name=${name}`)
            let err = [{name: 'Country Not Found'}]
            if(getCountry.status === 200 ){
                dispatch({
                    type: GET_BY_NAME,
                    payload: getCountry.data,
                })
            }else{
                dispatch({
                    type: GET_BY_NAME,
                    payload: err,
                })
            }
        }
        

    }
}

export const getById = (id) => {
    return async dispatch =>{
        if(id){
            const getById = await axios.get(`http://localhost:3001/countries/${id}`)
            let err = [{name: 'ID Not Found'}]
            if(getById.status === 200 ){
                dispatch({
                    type: GET_BY_ID,
                    payload: getById.data,
                })
            }else{
                dispatch({
                    type: GET_BY_ID,
                    payload: err,
                })
            }
        }
    }
}
export const getAll = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:3001/countries/showAll')
            dispatch({ type:GET_ALL, payload: response.data})
    }
}
export const getAllActivities = () => {
    return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/activities')
        dispatch({type: GET_ALL_ACTIVITIES, payload: response.data })
    }
}

