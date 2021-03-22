const initState = {
    sessionID: "",
    conversations: {},
    conversationIDS: [],
    sessionMeta: []
  }
  
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'UPDATE_SESSION'){
     return {
       ...state,
       sessionID: action.id
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
        console.log("clientData: ", action)
        return {
            ...state,
            headerDesc: action.headerDesc,
            headerHome: action.headerHome,
            starterConvo: action.starterConvo,
            logo: action.logo, 
            themeColor: action.color
        }
    } else if (action.type === 'UPDATE_SESSION_META'){
        console.log("SessionMeta: ", action)
        return {
            ...state,
            sessionMeta : action.data
        }
    }
    return state;
  }
  
  export default rootReducer