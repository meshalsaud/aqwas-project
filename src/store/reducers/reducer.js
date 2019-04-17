import * as actionType from '../actions/actionType';
import {updateObject} from '../reducers/utility';

const initialState = {
    loading:false,
    data:[],
    error:null
}

const fetchStart = (state, action) =>{
    return updateObject(state, {
        loading:true,
    })
}

const fetchSuccess = (state, action) =>{
    return updateObject(state, {
        loading:false,
        data:action.data,
    })
}

const fetchFail= (state, action) =>{
    return updateObject(state, {
        error:action.error
    })
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.FETCH_RESTURANT_START: return fetchStart(state, action);
        case actionType.FETCH_RESTURANT_SUCCESS: return fetchSuccess(state, action);
        case actionType.FETCH_RESTURANT_FAIL: return fetchFail(state, action);
        default:
            return state;
    }
}

export default reducer;