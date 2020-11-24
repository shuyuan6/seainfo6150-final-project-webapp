import React from 'react'

import {medications} from './MedicationData.jsx'



const Browse = () => {

    return (
        <div>{
            Object.keys(medications).map(function(type, idx) {
            	return (
            		<div key={idx}>
	            		<h2> {type} </h2>
	            		{
	            			medications[type].map(function(item, idx) {
	            				return (
	            					<div key={idx}>
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
    			)
			})
        }</div>
    )
}

export default Browse