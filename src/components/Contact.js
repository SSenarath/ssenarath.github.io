import React from "react";
import Email from "../images/contact/email.png"
import Call from "../images/contact/call.png"
import LinkedIn from "../images/contact/linkedin.png"

export default function Contact(){
    return(
        <section id="contact">
        
                <div className="container">
                    <h1 className="section-title">GET IN TOUCH</h1>
                    <div className="contact-options">
                        <div className="option">
                            <div className="icon-box">
                                <img src={Call}/>
                            </div>
                            <a href="#">647-458-0135</a>
                        </div>
                        <div className="option">
                            <div className="icon-box">
                            <a href="mailto: sanduni.senarath@outlook.com"><img src={Email}/></a>
                            </div>
                            <a href="mailto: sanduni.senarath@outlook.com">sandunisenarath@gmail.com</a>
                        </div>
                        <div className="option">
                            <div className="icon-box">
                            <a href="https://www.linkedin.com/in/ssenarath/"><img src={LinkedIn}/></a>
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/ssenarath/">linkedin.com/in/ssenarath</a>
                        </div>
                    </div>
              
            </div>
        </section>
    )
}