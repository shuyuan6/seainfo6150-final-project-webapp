import React from 'react'
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import styles from "./Weather.module.css";

const Weather = (props) => {
    const [fetchedData, setFetchedData] = useState([]);

    
    useEffect(() => {
        
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch(
                "http://demo7298209.mockable.io/weather"
            );
            //console.log(response)
            const responseJson = await response.json();
            console.log("Log from weather component")
            console.log(responseJson)
            setFetchedData(responseJson);
            //setFetchedData(Object.values(responseJson));
        }
        
        if (fetchedData.length === 0) {
            console.log("Calling fetech data")
            fetchData();
        }
        
    }, [fetchedData]);
    
    let displayContent;

    if (!isEmpty(fetchedData)) {
        displayContent = (
        <div className = {styles.weather}> 
            <b >Weather forecast</b>&nbsp;&nbsp;&nbsp;&nbsp;{fetchedData.city} : {fetchedData.weather}
            </div>
        );
    } else {
        displayContent = (<div>Weather Data not available</div>);
    }

    return displayContent
}

export default Weather