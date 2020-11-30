import React from 'react'
import homepageImage1 from "../images/homepageImage1.jpg";
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className = {styles.container}>
            <h1>Welcome to the Medications Dictionary!</h1>
        <img
            srcSet="
            /seainfo6150-final-project-webapp/static/media/homepageImage3.a935f9c1.jpg 300w,
            /seainfo6150-final-project-webapp/static/media/homepageImage2.c88681e9.jpg 600w,
            /seainfo6150-final-project-webapp/static/media/homepageImage1.0843378d.jpg 900w
            "
            sizes="
            (max-width: 320px) 100px,
            (max-width: 500px) 250px,
            (max-width: 600px) 440px,
            800px
            "
            src={homepageImage1}
            alt="Welcome to the Medications Dictionary!"
      ></img>

      </div>
    )
}

export default Home

