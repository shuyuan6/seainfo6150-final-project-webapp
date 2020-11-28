import React from 'react'
import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
    return (
        <div className = {styles.allContainer}>
            <h1>About Us</h1>
            <h2>Mission Statement</h2>
            <cite>"To empower patients with the knowledge to better manage their own healthcare and to improve consumer safety by assisting in the reduction of medication errors." </cite>
            <p>Medications Dictionary is the independent medicine information website available on the Internet. Our aim is to be the Internet’s most trusted resource for drug and related health information. We will achieve this aim by presenting independent, objective, comprehensive and up-to-date information in a clear and concise format for both users and healthcare professionals.
            </p>

            <h2>Database</h2>
            <p>The Information Database is powered by several independent leading medical-information suppliers, including: American Society of Health-System Pharmacists, Cerner Multum and IBM Watson Micromedex. Individual drug (or drug-class) content compiled by these sources is peer reviewed.
            </p>
        </div>
    )
}

export default WhoWeAre