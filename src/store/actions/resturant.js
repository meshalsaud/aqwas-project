import * as actionType from './actionType';
import axios from 'axios';


const headers = {
    'Accept': 'application/json',
}
//using herku proxy when no Access-control-allow-origin
const proxyurl = "https://cors-anywhere.herokuapp.com/"
const api ='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'

export const fetchResturantStart = ()=>{
    return {
        type:actionType.FETCH_RESTURANT_START
       
    }
}

export const fetchResturantSuccess = data =>{
    return {
        type:actionType.FETCH_RESTURANT_SUCCESS,
        data:data
    }
}

export const fetchResturantFail = error =>{
    return {
        type:actionType.FETCH_RESTURANT_FAIL,
        error:error
        
    }
}

// Fetch data 

export const fetchResturant = () => {
    return dispatch => {
        dispatch(fetchResturantStart());
        axios.get(proxyurl+api,{headers})
        
        .then(res=>{
            dispatch(fetchResturantSuccess(res.data))
        })
        .catch(error=>{
            dispatch(fetchResturantFail(error))
        })
    }
}