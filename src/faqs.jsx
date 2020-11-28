import React from 'react'
import styles from "./faqs.module.css";

const Faqs = () => {
    return (
        <div className = {styles.allContainer}>
            <h1>Frequently Asked Questions</h1>
            <p>We've tried to make using and searching as simple and efficient as possible - and we'll keep refining the features and processes as we find better ways to help you get maximum benefit from the site.
                 Please check the following FAQ's for possible answers to your queries. If you don't find the answer here, or have a site-related suggestion that you'd like us to consider, please contact us here.</p>
            <br />
            <br />

            <h2>How can I find out about a particular medication?</h2>
            <p>You can use the navigation to "Browse the medications by system", or "Browse all medications from A to Z".</p>
            <br />
            <br />

            <h2>Does Medications Dictionary have medical professionals available for an online consultation?</h2>
            <p>No. The aim of us is to provide accurate information to consumers and medical professionals about prescription medications and over-the counter (OTC) medications sold in the USA. We do not offer online consultations.</p>
            <br />
            <br />

            <h2>How up-to-date is the information on this site?</h2>
            <p>Information supplied by Multum and Wolters Kluwer is updated monthly and information supplied by Micromedex and PDR is updated quarterly.</p>
            <br />
            <br />

            <h2>Can I buy prescription nedications through Medications Dictionary?</h2>
            <p>No. we do not sell prescription (or non-prescription) medications online. Buying medication online can be risky as not all online pharmacies are regulated by the FDA.</p>
            <br />
            <br />

            <h2>How can I subscribe for messages from Medication Dictionary?</h2>
            <p>You can use the navigation to "Subscribe for newsletter", and fill the form to subscribe, we will send messages to your subscribed email on the frequncy you submitted.</p>
            <br />
            <br />

            <h2>How can I unsubscribe for messages from Medication Dictionary?</h2>
            <p>You can find "Unsubscribe" button in each email we send you, and click it to unsubscribe.</p>

        </div>
    )
}

export default Faqs