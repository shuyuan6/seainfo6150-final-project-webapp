import React from 'react'
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
    return (
        <div className = {styles.container}>
            <h1>Contact Us</h1>
            <br />
            <p>
                <b>&nbsp;&nbsp;Email Address: </b><br /> 
                <br />
                <span>&nbsp;&nbsp;medService@medications.com</span>
            </p>
            <br />

            <p>
                <b>&nbsp;&nbsp;Address: </b> <br />
                <br />
                <span>&nbsp;&nbsp;1234 S 9th Ave N</span> <br />
                <span>&nbsp;&nbsp;Seattle, WA 98123</span> 
            </p>
            <br />


            <p>
                <b>&nbsp;&nbsp;Phone Number: </b> <br />
                <br />
                <span>&nbsp;&nbsp;123-456-7890</span> <br />
            </p>
            <br />


        </div>
    )
}

export default ContactInfo