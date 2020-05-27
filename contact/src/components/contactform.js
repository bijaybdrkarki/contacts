import React, {useState} from 'react';
import './contactform.css'
import axios from 'axios'

const Contactform = () =>  {
        const [email, setemail]= useState('');
        const [first, setfirst]= useState('');
        const [last, setlast]= useState('');
        const [phone, setphone]= useState(''); 
    
    const handleSubmit = e => {
         e.preventDefault();
            const newuser = {
            email,
            first,
            last,
            phone
            };
    
            axios.post('http://localhost:5000/add', newuser)
            .then((res) =>{
                if (res.status === 200)
                {
                    window.location.href= "/"
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    
    return (
    <div className="center">
    <div className="signupBy">
        
        <form className="input-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="input-icons">      
                <i className="fa fa-envelope icon-signup"> </i> 
                <input className="input-field" type="email" placeholder="Email address" name="email" onChange={(e)=>setemail(e.target.value)} />
                <br />

                <i className="far fa-user icon-signup"> </i> 
                <input className="input-field" type="text" placeholder="First Name" name="firstName" onChange={(e)=>setfirst(e.target.value)} />
                <br />

                <i className="far fa-user icon-signup"> </i> 
                <input className="input-field" type="text" placeholder="Last Name" name="lastName" onChange={(e)=>setlast(e.target.value)} />
                <br />
                
                <i className="fas fa-mobile-alt icon-signup"></i>
                <input className="input-field" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex: 123-456-7890" onChange={(e)=>setphone(e.target.value)} />
               
            </div> 
            <div className="userProfile">
                <p className="profileImg"> choose profile pic</p>
                <input type="file" accept="image/*" name="userImg" />
            </div>
           
            <button type="submit" className="button save-btn"> Save</button>
        </form>
    </div>        
    </div>
    )
    
    
        
    

}

export default Contactform;