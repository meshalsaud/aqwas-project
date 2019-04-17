import * as actionType from './actionType';
import axios from 'axios';

const url ='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value'

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

// Fetch data 

export const fetchResturant = ()=>{
    return dispatch =>{
        dispatch(authStart())
        axios.get(url)
        .then(res=>{
            dispatch(fetchResturantStart(res.data))
        })
        .catch(error=> dispatch(fetchResturantFail(error)))
    }
}