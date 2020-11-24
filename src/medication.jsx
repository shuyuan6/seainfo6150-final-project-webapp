import React from 'react'

import {medications} from './MedicationData.jsx'

const Medication = (props) => {

	let obj = {}

	Object.keys(medications).forEach(function(type) {
		medications[type].forEach(function(item) {
			if (item.id === parseInt(props.id)) {
				obj = item
			}		
		})
	})


    return (
        <div>
            <h1>{obj.name}</h1>
            Hi you are viewing detailed information for medication {obj.name}.
            <h2>Description</h2>
            <p>{obj.discription}</p>
            <h2>Usage</h2>
            <p>{obj.usage}</p>
            <h2>Dosage</h2>
            <p>{obj.dosage}</p>
            <h2>Side Effects</h2>
            <p>{obj.sideEffects}</p>
        </div>
    )
}

export default Medication