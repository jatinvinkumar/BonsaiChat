export const updateSession = (id) => {
    return {
      type: 'UPDATE_SESSION',
      id
    }
  }

  export const updateConversationIDS = (id) => {
    return {
      type: 'UPDATE_CONVERSATION_IDS',
      id
    }
  }

  export const updateConversation = (id, message) => {
    return {
      type: 'UPDATE_CONVERSATION',
      id: id,
      message: message
    }
  }

  export const updateClientMeta = (headerHome, headerDesc, starter, logo, color) => {
    return {
      type: 'UPDATE_CLIENT_META',
      headerHome: headerHome,
      headerDesc: headerDesc,
      starterConvo: starter,
      logo: logo, 
      color: color
    }
  }