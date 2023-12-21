import React from 'react';
import '../App.css'

export default function Form() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    const id = React.useId()

    function handleChange(event) {
       const {name, type, checked, value} = event.target

        setFormData((prevData) =>{
         return {   ...prevData,
            [name] :type === "checkbox"? checked : value
         }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            alert("Thanks for signing up for our newsletter!")
        }
    }


    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor={id + "-email"} className ="form-label"> Email</label>
                    <input 
                        type="email" 
                        placeholder="Email address"
                        className="form--input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        id = {id + "-email"}
                    />
                </div>

                <div className='inputs'>
                    <label htmlFor={id + "-password"} className ="form-label">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password"
                        className="form--input"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        id={id + '-password'}
                    />
                </div>
                <div className='inputs'>
                   <label htmlFor={id + "-confirmPassword"} className = "form-label" >Confirm password</label>
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        className="form--input"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={formData.passwordConfirm}
                        id= {id + "-confirmPassword"}
                    />
                </div>
                
                <div className="form--marketing">
                        <input
                            id="okayToEmail"
                            type="checkbox"
                            name="joinedNewsletter"
                            onChange={handleChange}
                            checked={formData.joinedNewsletter}
                        />
                        <label htmlFor="okayToEmail">I want to join the newsletter</label>
                    </div>
                    <button 
                        className="form--submit"
                    >
                        Sign up
                    </button>
            </form>
        </div>
    )

}