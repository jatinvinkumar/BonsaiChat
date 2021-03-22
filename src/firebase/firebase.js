// firebase.js
// contains the Firebase context and provider

import React, { createContext, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import app from 'firebase/app'
import 'firebase/database';
import { useDispatch } from 'react-redux';
import { updateSession, updateConversationIDS, updateConversation, updateClientMeta, updateSessionMeta } from '../actions/Actions'


// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

var start_conversation;
var client_id;
var session_id;

export default ({ children }) => {
    let firebase = {
        app: null,
        database: null
    }

    const dispatch = useDispatch();

    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
    if (!app.apps.length) {
        app.initializeApp(firebaseConfig);
        firebase = {
            app: app,
            database: app.database(),

            api: {
                initConversationListener,
                initSession,
                addMessage,
                createConversation,
                setMetaData,
            }
        }
    }
    var con;
    //Start a listener to check for any new conversations 
    function initSession(id){
        //Check & attatch conversation Listeners for new convos
        session_id = id;
        firebase.database.ref('sessions/' + id).once('value', (snapshot) => {
            const vals = snapshot.val();
            dispatch(updateSession(id))
            console.log("Sup bits: ", vals)
            // dispatch Redux action that would update the store
            client_id = vals.clientID;
            getClientMeta(vals.clientID)

            
        })

        firebase.database.ref('sessions/' + id + '/conversations').on('child_added', (snapshot) => {
            const vals = snapshot.val();

            if (Array.isArray(vals)){
                vals.conversations.forEach(convoID => {
                    console.log("lookieHere", convoID);
                    initConversationListener(convoID)
                });
            }


            console.log("convoAdded: Firebase")
            console.log(vals);
            // dispatch Redux action that would update the store
            initConversationListener(vals)
            dispatch(updateConversationIDS(vals));
        })
    }

    async function createConversation(){
        var newConversationKey = firebase.database.ref().child('conversations/').push().key;
        firebase.database.ref('conversations/' + newConversationKey).set({
            sessionID: session_id,
            history: start_conversation,
            clientID: client_id
          }).then((snapshot) => {
            console.log("New COnversation Created", session_id);
            firebase.database.ref('sessions/' + session_id + '/conversations').push(
                newConversationKey
            )
            
          })  
          return newConversationKey;
    }

    function addMessage(pointer, id, message){
        //var newPostKey = firebase.database().ref().child('posts').push().key;

        var newPostKey = firebase.database.ref().child('conversations/' + id + '/history').push().key;

        var selectedDate = new Date();
        var currentDate = selectedDate;
        var currentTime = currentDate.getTime();
        var localOffset = (-1) * selectedDate.getTimezoneOffset() * 60000;
        var stamp = Math.round(new Date(currentTime + localOffset).getTime() / 1000);

        console.log("fb: ", stamp)
        var updates = {};
        var postData = {
            data: message,
            type: "message",
            sender: "user",
            timestamp: stamp
          };
        updates['conversations/' + id + '/history/' + newPostKey] = postData;
        return firebase.database.ref().update(updates);
    }

    //Gets once the metaData of the 
    function getClientMeta(id){
        firebase.database.ref('clients/' + id).once('value').then((snapshot) => {
            const vals = snapshot.val();
            // dispatch Redux action that would update the store
            console.log("clientFirebase: ", vals)
            firebase.database.ref('startConvo/' + vals.startConvo).once('value').then((snapshot) => {
                console.log("StarterCOnversationDATA: ", snapshot.val())
                const starterConvo = snapshot.val();
                start_conversation = starterConvo;
                dispatch(updateClientMeta(vals.HeaderHome, vals.HeaderDesc, starterConvo, vals.logo, vals.themeColor))
            })
            
        })
    }

    function setMetaData(data){
        var updates = {};
        updates['sessions/' + session_id + '/meta'] = data;
        firebase.database.ref().update(updates).then((snapshot) => {
            console.log("sucessfuly added session meta")
            dispatch(updateSessionMeta(data))
        })
    }

    function initConversationListener(id){
        firebase.database.ref('conversations/' + id + '/history').on('child_added', (snapshot) => {
            const vals = snapshot.val();
            console.log("ConvoMessages: Firebase")
            console.log(id);
            console.log(vals);
            // dispatch Redux action that would update the store
            dispatch(updateConversation(id, vals));
        })
    }



    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}