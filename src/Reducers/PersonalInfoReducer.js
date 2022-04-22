export const PersonalInfoReducer = (state=null,action)=>{
    switch(action.type){
        case"ADD_PERSONAL":
            return action.payload;
        case"LOGOUT":
            return action.payload;
        default:
            return state;
    }
}