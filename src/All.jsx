import React from 'react'
import { Switch, Route, Link, useLocation } from "react-router-dom";
import {medications} from './MedicationData.jsx'
import styles from "./All.module.css";


const All = () => {

	let items = []

	Object.keys(medications).map(function(type) {
		medications[type].map(function(item) {
			items.push(item)
		})
	})


	items.sort((a, b) => {
		if(a.name < b.name) 
			{ return -1; }
    	if(a.name > b.name) 
    		{ return 1; }
    	return 0;
	});

    return (
        <div className = {styles.allContainer}>{
			items.map(function(item, idx) {
				return (
					<div className = {styles.medicationContainer} key={idx}>
					<h2>{item.name}</h2>
					<div>{item.discription}</div>
					<Link to={"/browse/" + item.id}> See more</Link>
					<br />
					<br />
					</div>
				)
			})
	        
        }
        </div>
    )
}
export default All