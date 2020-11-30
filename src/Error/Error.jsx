import React from 'react'
import styles from "./Error.module.css"
import error from "../images/error.png"
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className = {styles.container}>
            <h1>The page you are looking for is not found!</h1>
            
            <img src={error} alt="Error" />
            <br />
            <p>You can click <Link to="/">here</Link> to go to the home page!</p>

        </div>
    )
}

export default Error
