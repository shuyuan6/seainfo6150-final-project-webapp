import React, { useState } from "react";
import styles from "./signup.module.css";

const SignUp = () => {
    const [submittedForm, setSubmittedForm] = useState();

    // the email of the user
    const [userEmail, setUserEmail] = useState();

	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		setSubmittedForm(data);
	};

	return (
	<div className = {styles.container}>
	  <h2> Want to get up to date information? Subscribe now!</h2>
	  {
	    submittedForm ? (
        <div><h3>You got it, {submittedForm.get("username")}! we'll send updates to {submittedForm.get("email")} at the frequency of {submittedForm.get("myDropdown")}!</h3></div>
	    ) : (
	      <form onSubmit={onSubmit} className = {styles.content}>
            <div className="container">
                <p>Please fill in this form to subscribe, fields with * are required.</p>

              
                <label htmlFor="username"><b>*Username: </b></label>
                <div><input id = "username" type="text" placeholder="Enter Username" name="username" required></input></div>
                <p></p>

                <label htmlFor="preferedname"><b>Preferred name: </b></label>
                <div><input id = "preferedname" type="text" placeholder="Enter Preferred Name" name="preferedname"></input></div>
                <p></p>

                <label htmlFor="email"><b>*Email: </b></label>
                <div><input id = "email" type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must follow the valid email format like local-part@domain."name="email" required></input></div>
                <p></p>

                <label htmlFor="myDropdownId"><b>How frequent would you like to hear from us? </b></label>
                <div>
	            <select name="myDropdown" id="myDropdownId">
	                <option value="everyday">Every Day</option>
	                <option value="everyweek">Every Week</option>
	                <option value="everymonth">Every Month</option>
	             </select>
                 </div>
                 <p></p>

                <label htmlFor="zip"><b>*Zip code: </b></label>
                <div><input id = "zip" type="text" placeholder="Enter Zip Code" pattern="[0-9]{5}" title="Zip code is in five-digit format" name="zip" required></input></div>
                <p></p>

                <label htmlFor="tel"><b>Phone Number: </b> </label>
                <div><input id = "tel" type="text" placeholder="Enter Phone Number" name="tel" pattern="[0-9]{10}" title="Phone number is in ten-digit format"></input></div>
                <p></p>

                <div><b>Would you like to receive text messages from us? </b></div>
                <input type="radio" id="yes" name="yn" value="yes"></input>
                <label htmlFor="yes">Yes</label><br/>
                <input type="radio" id="no" name="yn" value="no"></input>
                <label htmlFor="no">No</label>
                <p></p>

                <div><b>What fields are you interested in (please select all)?</b></div>
                <input type="checkbox" name="checkbox1" value="FDANews"></input>
                <label htmlFor="checkbox1"> FDA news </label><br />
                <input id = "checkbox1" type="checkbox" name="checkbox2" value="ClinicalTrial"></input>
                <label htmlFor="checkbox2"> New medication clinical trial</label><br/>
                <input id = "checkbox2" type="checkbox" name="checkbox3" value="Approval"></input>
                <label htmlFor="checkbox3"> New drug approvalt</label><br/>
                <input id = "checkbox3" type="checkbox" name="checkbox4" value="COVID-19"></input>
                <label htmlFor="checkbox3"> COVID-19 news</label>
                <p></p>

                <label htmlFor="howDidYouHearAboutUs"><b>How did you hear about us? </b></label>
                <div>
	            <select name="myDropdownHowDidYouHearAboutUs" id="howDidYouHearAboutUs">
	                <option value="SearchEngine">Search engine</option>
	                <option value="GoogleAds">EGoogle Ads</option>
	                <option value="YoutubeAds">Youtube Ads</option>
                    <option value="Twitter post">Twitter post</option>
                    <option value="OtherSocialMedia">Other social media</option>
                    <option value="Radio">Radio</option>
                    <option value="TV">TV</option>
                    <option value="Newspaper">Newspaper</option>
                    <option value="WordOfMouth">Word of mouth</option>
	             </select>
                 </div>
                 <p></p>
                <button type="submit" className="signupbtn">Subscribe</button>
                
            </div>

	      </form>
	    )
	  }
	</div>
  )
}

export default SignUp