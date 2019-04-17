import * as actionType from './actionType';
import axios from 'axios';

export const authStart = ()=>{
    return {
        type:actionType.AUTH_START
    }
}

export const fetchResturantStart = ()=>{
    return {
        type:actionType.FETCH_RESTURANT_START
    }
}

export const fetchResturantSuccess = (restuarnt)=>{
    return {
        type:actionType.FETCH_RESTURANT_SUCCESS,
        restuarnt:restuarnt
    }
}

export const fetchResturantFail = (error)=>{
    return {
        type:actionType.FETCH_RESTURANT_FAIL,
        error:error
    }
}