import React from 'react'

import {medications} from './MedicationData.jsx'



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

	console.log("Sort done")
	items.forEach(element => console.log(element));

    return (
        <div>{
			items.map(function(item, idx) {
				return (
					<div key={idx}>
					<h2>{item.name}</h2>
					<div>{item.discription}</div>
					<a href={"/browse/" + item.id}> See more </a>
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