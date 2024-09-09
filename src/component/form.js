import React, { useState } from 'react'

const Form = () => {
    const [userName, setUserName] = useState("");
    const [emailId, setEmailId] = useState("");
    const onSubmitClick = (e) => {
        e.preventDefault();
        
    }
    console.log("onSubmitClick", userName, emailId);
  return (
    <div>
        <form onSubmit={onSubmitClick}>
        <label>user name :</label>
        <input type='text' onChange={(e) => setUserName(e.target.value)} />
        {userName.length === 0 &&
        <p style={{color: 'red'}}>Please enter the user name</p>
        }
        <label>Email address :</label>
        <input type='email' onChange={(e) => setEmailId(e.target.value)} />
        {emailId.length === 0 &&
        <p style={{color: 'red'}}>Please enter the email id</p>
        }
        <button type='submit' value="Submit"> Submit ! </button>
        </form>
    </div>
  )
}

export default Form