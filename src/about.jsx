import React from 'react'
import ContactInfo from './ContactInfo.jsx'
import WhoWeAre from './WhoWeAre.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import Certifications from './Certifications.jsx'

const About = () => {

    return (
        <div>
            <WhoWeAre />
            <PrivacyPolicy />
            <ContactInfo />
            <Certifications />
        </div>
    )
}

export default About
