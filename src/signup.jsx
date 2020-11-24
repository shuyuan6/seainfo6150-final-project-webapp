import React, { useState } from "react";

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
	<div>
	  <p> Want to get up to date information? Sign up!</p>
	  {
	    submittedForm ? (
	      <div>You got it! we'll send updates to {submittedForm.get("myText")} at the frequency of {submittedForm.get("myDropdown")}</div>
	    ) : (
	      <form onSubmit={onSubmit}>
	        <label htmlFor="myTextId">Your email</label>
	        <input type="text" name="myText" id="myTextId"/>

	        <label htmlFor="myDropdownId">Email Frequency</label>
	        <select name="myDropdown" id="myDropdownId">
	          <option value="everyday">Every Day</option>
	          <option value="everyweek">Every Week</option>
	          <option value="everymonth">Every Month</option>
	        </select>
	        <input type="submit" value="Sign up" />
	      </form>
	    )
	  }
	</div>
  )
}

export default SignUp