import React from 'react'
import styles from "./Certifications.module.css"

const Certifications = () => {
    return (
        <div className = {styles.container}>
            <h1>Certifications</h1>
            <ul>
                <li>
                Certified by Cerner Multum Information Services: medications information database.
                </li>
                <br/>
                <li>
                Certified by Micromedex: Advanced Consumer Information database, Care Guide and Image Database.

                </li>
                <br/>

                <li>
                Certified by Physicians' Desk Reference: medications information database.

                </li>
                <br/>

                <li>
                Certified by Wolters Kluwer Health: facts and Comparisons Integrated MedFacts consumer medications information.

                </li>

            </ul>
        </div>
    )
}

export default Certifications