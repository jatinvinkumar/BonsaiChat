const initState = {
    sessionID: "",
    conversations: {},
    conversationIDS: []
  }
  
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'UPDATE_SESSION'){
     return {
       ...state,
       session: action
     }
    } else if(action.type === 'UPDATE_CONVERSATION_IDS'){
        return {
          ...state,
          conversationIDS: [...state.conversationIDS, action.id]
        }
       }
    else if(action.type === 'UPDATE_CONVERSATION'){
        var id = action.id
        console.log("yoyoyo");
        console.log(action)
        const myObjStr = action.message;
        const i = action.id
        if(state[i]){
            return {
                ...state,
                [action.id] : [...state[i], myObjStr]
            }
        } else {
            return {
                ...state,
                [action.id] : [myObjStr]
            }
        }
    
    } else if (action.type === 'UPDATE_CLIENT_META'){
        return {
            ...state,
            headerDesc: action.headerDesc,
            headerHome: action.headerHome,
            logo: action.logo
        }
    }
    return state;
  }
  
  export default rootReducer