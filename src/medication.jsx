import React from 'react'

import {medications} from './MedicationData.jsx'
import {useEffect} from "react"
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Error from "./Error/Error.jsx"
import styles from "./medication.module.css";

const Medication = (props) => {

    let obj

	Object.keys(medications).forEach(function(type) {
		medications[type].forEach(function(item) {
			if (item.id.toString() === props.id) {
				obj = item
			}		
		})
    })
    
    let location = useLocation()
    useEffect(() => {
        if (obj == undefined) {
            document.title = "Not Found"
        }
        else if (location.pathname == ("/browse/" + obj.id)) {
          document.title = obj.name
        } 
     }, [location]);

    return obj === undefined ? (<Error />) : (
        <div className = {styles.medication}>
            <h1>{obj.name}</h1>
            <p><b>Hi, you are viewing detailed information for medication {obj.name}.</b></p>
            <br/>
            <h2>Description</h2>
            <p>{obj.discription}</p>
            <br/>

            <h2>Usage</h2>
            <p>{obj.usage}</p>
            <br/>

            <h2>Dosage</h2>
            <p>{obj.dosage}</p>
            <br/>

            <h2>Side Effects</h2>
            <p>{obj.sideEffects}</p>
        </div>
    )
}

export default Medication