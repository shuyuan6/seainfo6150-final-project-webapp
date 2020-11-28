import React from 'react'
import styles from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
    return (
        <div className = {styles.container}>
            <h1>Privacy Policy</h1>
            <br />
            <h2>What information is collected?</h2>
            <p>We collects information about you from the following sources: First is what you may provide us when you interact with Medications Dictionary. 
                Second is certain data that is collected automatically as you use the Sites. Third, are inferences we may generate about you. 
                Please see below for more details.
            </p>
            <h3>A. Personal information you provide directly</h3>
            <p>You may provide us with certain personal information when making a subscription, signing up for email updates, participating in a survey, interacting with us (via mail, email or phone).</p>

            <h3>B. Personal information collected automatically</h3>
            <p>Certain personal information is collected automatically when you use our Sites. This personal information generally falls into these categories:</p>
            <ul>
                <li>Device data: For example, when you visit our website, we collect your IP address. If you access our website from a mobile device, we collect unique device IDs.</li>
                <li>Location data: We collect location data, which helps us understand where our customers are located.</li>
                <li>Interactions data: We maintain a record of your activity on our online Sites, including how you use our website, which madications you view, and which emails you receive. We also collect information about the site you visited before navigating to our website.</li>
            </ul>
            <p>Some of this information is collected via cookies, as described below. 
                We may connect personal information collected automatically with data we already have about you, so we can identify you as a customer. 
                This allows us to provide the best experience possible.</p>

            <h3>C. Inferences</h3>
            <p>We also generate inferences about you based on information we collect about you.</p>
            <br />
            <br />

            <h2>What are cookies and how does we use them?</h2>
            <p>We and our trusted business partners employ technology features known as cookies and tags to understand 
                how you interact with our websites and email messages.</p>

        </div>
    )
}

export default PrivacyPolicy