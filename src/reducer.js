export const initialState = {
    user:null,
};

//whenever we sign in ,we going to dispatch an action which says go ahead & push this user into the data layer

export const actionTypes ={
    SET_USER:"SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
           console.log(action);
            return {
                ...state,
                user:action.user
            };

            default:
                return state;
        }
        
    };
    
    export default reducer;