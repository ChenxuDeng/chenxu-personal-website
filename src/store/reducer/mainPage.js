import * as actionType from '../action/actionType'

const initialState={
    animation:false
}

const mainPageReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionType.ANIMATION_HANDLER:
            return{
                ...state,
                animation: true
            }
        default:
            return state
    }
}

export default mainPageReducer