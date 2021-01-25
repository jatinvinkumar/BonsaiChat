import React, { Component, useContext } from 'react';
import './App.css';
import { FirebaseContext } from './firebase/firebase';
import { Redirect } from "react-router-dom";

export default function Loader(props) {
    const { app, api } = useContext(FirebaseContext);
    console.log(props);
    api.initSession(props.match.params.id)
    // ...
    return(
        <Redirect to={"/home"} />
    )
}