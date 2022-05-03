export const ProfessionalInfoReducer = (state=null,action)=>{
    switch(action.type){
        case"ADD_PROFESSIONAL":
            return action.payload;
        case"LOGOUT":
            return action.payload;
        default:
            return state;
    }
}