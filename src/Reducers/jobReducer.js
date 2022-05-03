export const jobReducer = (state=null,action)=>{
    switch(action.type){
        case"ADD_JOBS":
            return action.payload;
        case"REMOVE_JOBS":
            return action.payload;
        default:
            return state;
    }
}