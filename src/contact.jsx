import { useState } from 'react'
import './contact.css';
function Contactpage(){
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("")
    let [email, setEmail] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess]= useState("")
    function handlesubmit(event){
        event.preventDefault()
        if(firstname === "" || lastname === "" || email === ""){
            setError("Empty!, user should fill in the gaps");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }
        if(!email.includes("@" || ".")){
            setError("User should put the correct input for validation");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }
        setEmail("");
        setLastname("");
        setFirstname("");
        setSuccess("Validation Successful");
        setTimeout(()=>{
            setSuccess("")
        },3000)
        return
    }
    return(
            <div className='form-container'>
            <div className="contact-header">
                <h1 className="contact-heading">Contact</h1>
            </div>
                <div className="form-content">
            <form onSubmit={handlesubmit}>
                <div className="contact-informer">
                    {
                        error !== "" && (<div className="error">{error}</div>)
                    }
                    {
                        success !== "" && (<div className="success">{success}</div>)
                    }
                </div>
                <div className="contact-form">
                <div className="names">
                <div className="first-name">
                    <span className="first-text">First Name</span>
                    <input type="text" className="input" value={firstname} onChange={(event) => {
                        setFirstname(event.target.value)
                    }} />
                </div>

                <div className="last-name">
                <span className="first-text">Last Name</span>
                    <input type="text" className="input" value={lastname} onChange={(event)=>{
                        setLastname(event.target.value)
                    }}/>
                </div>
                </div>

                <span className="first-text">Email</span>
                <div className="email">
                    <input type="text" className="inputs" value={email} onChange={(event)=>{
                        setEmail(event.target.value)
                    }} />
                </div>

                <span className="first-text">Subject</span>
                <div className="subject">
                    <input type="text" className="inputs" />
                </div>

                <span className="first-text">Message</span>
                <div className="message">
                    <input type="textarea"  className="message-input" placeholder='Write your note or questions here...'/>
                </div>
            </div>
                <button type="submit" className="submit" >Send Message</button>
            </form>
            <div className="sub-container">
                <div className="subtext">
                        <span className="texts">Address</span>
                        <p className="text2">203 Fake St. Mountain View, San <br />Francisco, California, USA</p>
                    </div>
                <div className="subtext">
                        <span className="texts">Phone</span>
                        <p className="second-text">+1 232 3235 324 </p>
                    </div>
                    <div className="subtext">
                        <span className="texts">Email Address</span>
                        <p className="second-text">youremail@domain.com</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Contactpage