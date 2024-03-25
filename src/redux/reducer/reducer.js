let initialState = {
    count: 0
}

function reducer(state=initialState, action){

    if(action.type === "INCREAMENT"){
        return {...state, count: state.count + action.payload.num};
    }
    else if (action.type === "DECREMENT"){
        return {...state, count: state.count - action.payload.num};
    }
    else if (action.type === "RESET"){
        return {...state, count: 0};
    }

    return {...state};
}

export default reducer;