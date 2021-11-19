import axios from "axios";
import {GET_COUNTRIES_NAMES, GET_DB, GET_ALL_ACTIVITIES, GET_BY_ID, FILTER} from '../Const/Const';
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

//filters
//Object.values(e.activities)
export const filters =  (difficulty, season, continent, sortByName, SortByPopulation) => async dispatch =>{
        axios.get('http://localhost:3001/countries/showAll')
        .then(response => {
            const db = response
        let aux = [];
        let paso = false     
            if(difficulty.length > 0){//look at looked difficulty
                if(aux.length === 0){  
                    for(let i=0; i < difficulty.length; i++){
                        for(let j = 0; j < db.data.length; j++){
                            let e = db.data[j]
                            
                            if(e.activities.length > 0  ){// validator for look countries with ativities without repeat
                                for(let j = 0; j < e.activities.length; j++){//entra a for pero no pasa if
                                    if(parseInt(e.activities[j].difficulty) === difficulty[i] && aux.indexOf(e) === -1){
                                        aux.push(e)
                                        console.log(aux)
                                    }else if(j === parseInt(e.activities[j].difficulty) -1){  
                                        paso = true
                                    }
                                }
                            }
                            else if(e.activities.length === 0 && j === db.data.length - 1){
                                paso = true
                            }
        
                        }
                        
                    }
                }else{
                    console.log(1.2)  
                    let aux2 = []
                    for(let i=0; i < difficulty.length; i++){// recorre [1, 2, 3, 4, 5]
                        console.log('difficulty to filter :' + difficulty[i])
                            for(let j=0; j < aux.length; j++){// recorre los paises que ya se filtraron
                            if(aux[j].activities.length > 0){ //validar que tengan actividades                                                         
                                for(let k = 0; k < aux[j].activities.length; k++){// recorrer actividades
                                    console.log( )
                                    if(parseInt(aux[j].activities[k].difficulty) === difficulty[i] && aux2.indexOf(aux[j]) === -1 ){
                                         //validacion si existe acitividad con dificultad en pais
                                        aux2.push(aux[j])
                                    }
                                }
                            }
                        }
                    }
                    aux = [...aux2]
                    console.log(aux)
                }
            }
            if(season.length > 0){//look at looked difficulty
                if(aux.length === 0 && paso === false){  
                    for(let i=0; i < season.length; i++){
                        // eslint-disable-next-line no-loop-func
                        for(let j = 0; j < db.data.length; j++){
                            let e = db.data[j]
                            
                            if(e.activities.length > 0  ){// validator for look countries with ativities without repeat
                                for(let j = 0; j < e.activities.length; j++){//entra a for pero no pasa if
                                    if(parseInt(e.activities[j].difficulty) === difficulty[i] && aux.indexOf(e) === -1){
                                        aux.push(e)
                                    }else if(j === parseInt(e.activities[j].difficulty) -1){  
                                        paso = true
                                    }
                                }
                            }
                            else if(e.activities.length === 0 && j === db.data.length - 1){
                                paso = true
                            }
        
                        }
                    }
                }else{
                    let aux2 = []
                    for(let i=0; i < season.length; i++){// recorre [1, 2, 3, 4, 5]
                            for(let j=0; j < aux.length; j++){// recorre los paises que ya se filtraron
                            if(aux[j].activities.length > 0){ //validar que tengan actividades                                                         
                                for(let k = 0; k < aux[j].activities.length; k++){// recorrer actividades
                                    console.log( )
                                    if(aux[j].activities[k].season === season[i] && aux2.indexOf(aux[j]) === -1 ){
                                         //validacion si existe acitividad con dificultad en pais
                                        aux2.push(aux[j])
                                    }
                                }
                            }
                        }
                    }
                    aux = aux2
                    console.log(aux)
                }
            }
            if(continent.length > 0 && paso === false){//look at looked difficulty
                if(aux.length === 0){
                    for(let i=0; i < continent.length; i++){
                        // eslint-disable-next-line no-loop-func
                        db.data.map(e => {
                            if(e.continent.length > 0){// validator for look countries with ativities without repeat
                                    if(e.continent === continent[i] && aux.indexOf(e) === -1){
                                        aux.push(e)
                                    } 
                            }
                        })
                    }
                }else{

                    let aux2 = []
                    for(let i=0; i < continent.length; i++){// recorre continentes                                                                    
                            if(aux[i].continent){ //validar que tenga continente
                                for(let j = 0; j < aux.length; j++){// recorrer paises    
                                    if(aux[j].continent === continent[i] && aux2.indexOf(aux[j]) === -1 ){
                                         //validacion si existe acitividad con dificultad en pais
                                        aux2.push(aux[j])
                                        
                                    }
                                }
                            }
                    }
                    
                    aux = aux2
                }
            }
            if(continent.length === 0 && season.length === 0 && difficulty.length === 0){
                aux = db.data
            }
            let order = aux
            
            if(sortByName === true){
                order = aux.sort(function (a, b) {
                    if (a.name > b.name) {
                        
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                        return 0;
                });
            }else if(sortByName === false){
                order  = aux.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                        return 0;
                });
            }else if(SortByPopulation === false){
                order  = aux.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population) {
                        return 1;
                    }
                        return 0;
                });
            }else if(SortByPopulation === true){
                order  = aux.sort(function (a, b) {
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
            // let err = [{name: 'ID Not Found'}]
            // if(getById.status === 200 ){
            //     dispatch({
                   
            //     })
            // }else{
            //     dispatch({
            //         type: GET_BY_ID,
            //         payload: err,
            //     })
            // }
    }
}
// export const getAll = () => {
//     return async dispatch => {
//         const response = await axios.get('http://localhost:3001/countries/showAll')
//             dispatch({ type:GET_ALL, payload: response.data})
//     }
// }

export const getAllActivities = () => {
    return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/activities')
        dispatch({type: GET_ALL_ACTIVITIES, payload: response.data })
    }
}

