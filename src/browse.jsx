import React from 'react'
import {medications} from './MedicationData.jsx'
import styles from "./browse.module.css";


const Browse = () => {

    return (
        <div>{
            Object.keys(medications).map(function(type, idx) {
            	return (
            		<div key={idx}>
	            		<h2> {type} </h2>
						<div className = {styles.systemContainer}>
	            		{
	            			medications[type].map(function(item, idx) {
	            				return (
	            					<div className = {styles.medicationContainer} key={idx}>
	            					<h3>{item.name}</h3>
	            					<div>{item.discription}</div>
	            					<a href={"/browse/" + item.id}> See more </a>
	            					<br />
	            					<br />
                                    <br />
	            					</div>
	            				)
	            			})
	            		}
						</div>	
    				</div>
    			)
			})
        }</div>
    )
}

export default Browse