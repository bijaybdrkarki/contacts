import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './contactlist.css'

const Allcontacts = ({sort, search}) => {

    const [users, setusers] = useState([])
    let filteredUsers = []
    let listUsers = []
    useEffect(() => {
        newData();
    }, []);
    
    const newData = async ()=> {
        const data = await fetch('http://localhost:5000/');
        const jsonData = await data.json();
        console.log(jsonData);
        setusers(jsonData);
    }
if (sort === 'fAtoZ')
{
    users.sort((a,b) => a.first.localeCompare(b.first));   
}
if (sort === 'fZtoA')
{
    users.sort((a,b) => b.first.localeCompare(a.first));   
}
if (sort === 'lAtoZ')
{
    users.sort((a,b) => a.last.localeCompare(b.last));   
}
if (sort === 'lZtoA')
{
    users.sort((a,b) => b.last.localeCompare(a.last));   
}

if (search !== '')
{
    filteredUsers = users.filter(p => p.first.toLowerCase().includes(search) ||  p.last.toLowerCase().includes(search))
}
    

    if (search === '')
    {
        listUsers = users.map((user) => 
                <div className="user" key={user.id}> 
               <p> Name: <Link to={`/edit/${user.id}`}>  {user.first} {user.last} </Link></p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                </div>)
    }
    else
    {
        listUsers = filteredUsers.map((user) => 
                <div className="user" key={user.id}> 
                <p> Name: <Link to={`/edit/${user.id}`}>  {user.first} {user.last} </Link></p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                </div>) 
    }

    return (
        <>
                {listUsers}
        </>
    )  
}


export default Allcontacts;