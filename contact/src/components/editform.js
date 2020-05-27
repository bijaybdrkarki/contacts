import React, {useState ,useEffect} from 'react'
import Editcontact from './editcontact'

const Editform = () => {

    const [user, setuser] = useState([])
    useEffect(() => {
        newData();
    }, []);
    const newData = async ()=> {
        const data = await fetch('http://localhost:5000/');
        const jsonData = await data.json();
        console.log(jsonData);
        const userid = parseInt(window.location.pathname.split('/')[2]);
        console.log(userid)
        for (let i=0; i<jsonData.length; i++)
        {
            if (jsonData[i].id === userid)
            {
                console.log(jsonData[i])
                setuser(jsonData[i]);
                break;
            }
        }
        
    }
    
    return (
        <Editcontact user={user} />
    )
}


export default Editform