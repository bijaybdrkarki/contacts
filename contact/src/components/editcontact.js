import React, {useState} from 'react';
import './contactform.css'
import axios from 'axios'

const Editcontact = ({user}) =>  {

console.log(user)
    const [email, setemail]= useState(`${user.email}`);
    const [first, setfirst]= useState(`${user.first}`);
    const [last, setlast]= useState(`${user.last}`);
    const [phone, setphone]= useState(`${user.phone}`);

console.log(email, first, last, phone)
const handleSubmit = e => {
        e.preventDefault();        
        
        const updateuser = {
            id: user.id,
            email: email,
            first: first,
            last: last,
            phone: phone
        }
        axios.post(`http://localhost:5000/edit/${user.id}`, updateuser)
        .then((res) =>{
            if (res.status === 200)
            {
                window.location.href= "/"
            }
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
        <div className="center">
        <div className="signupBy">
            
            <form className="input-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="input-icons">      
                    <i className="fa fa-envelope icon-signup"> </i> 
                    <input className="input-field" type="email" name="email" onChange={(e)=>setemail(e.target.value)} defaultValue={user.email}/>
                    <br />
    
                    <i className="far fa-user icon-signup"> </i> 
                    <input className="input-field" type="text" name="firstName" onChange={(e)=>setfirst(e.target.value)} defaultValue={user.first} />
                    <br />
    
                    <i className="far fa-user icon-signup"> </i> 
                    <input className="input-field" type="text" name="lastName" onChange={(e)=>setlast(e.target.value)} defaultValue={user.last}/>
                    <br />
                    
                    <i className="fas fa-mobile-alt icon-signup"></i>
                    <input className="input-field" type="tel"  name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>setphone(e.target.value)} defaultValue={user.phone}/>
                   
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

    export default Editcontact