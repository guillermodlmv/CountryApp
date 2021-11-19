import {GET_COUNTRIES_NAMES, GET_DB, GET_TEN_COUNTRIES, GET_NINE_COUNTRIES, GET_BY_NAME, GET_ALL, GET_BY_ID, GET_ALL_ACTIVITIES, FILTER} from '../Const/Const';
export const initialState ={
    getDB : [],
    getTenCountries: [],
    getNineCountries: [],
    getByName : [],
    getAll: [],
    getAllActivities: [],
    getById: [],
    filter : [],
    countriesNames: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DB:
            return {
                ...state,
                getDB:action.payload
            }
        case GET_TEN_COUNTRIES:
            return {
                ...state,
                getTenCountries: action.payload
            }
            case GET_NINE_COUNTRIES:
                return {
                    ...state,
                    getNineCountries: action.payload
            }
            case  GET_BY_NAME:
                return {
                    ...state,
                    getByName: action.payload
            }
            case  GET_ALL:
                return {
                    ...state,
                    getAll: action.payload
            }
            case   GET_ALL_ACTIVITIES:
                return {
                    ...state,
                    getAllActivities: action.payload
            }
            case  GET_BY_ID :
                return{
                    ...state,
                    getById: action.payload
            }
            case  FILTER :
            return{
                ...state,
                filter: action.payload
            }
            case GET_COUNTRIES_NAMES:
                return{
                    ...state,
                    countriesNames : action.payload
                }

            default:
            return {
                ...state
            }
    }
}

export default rootReducer 