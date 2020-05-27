import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './contactlist.css';
import Allcontacts from './allcontacts'

const Contactlist = () => {

    const [sort, setsort]= useState('fAtoZ')
    const [search, setsearch]= useState ('')
    return (
        <>
        <div className="heading">
            <h1 >Contacts</h1>
            <Link to="/add"> + </Link>
        </div>
        <div className="inputIcons">
            <i className="fa fa-search icon-search"> </i> 
            <input className="input-search" type="text" placeholder="Search by name" name="search" onChange={(e)=>setsearch(e.target.value)} />
        </div>
        <fieldset className="sort">
              <label htmlFor="sort">Show</label>
              <select name="sort" onChange={(e)=> setsort(e.target.value)}>
                <option value="fAtoZ">fName A to Z</option>
                <option value="fZtoA">fName Z to A</option>
                <option value="lAtoZ">lName A to Z</option>
                <option value="lZtoA">lName Z to A</option>
              </select>
        </fieldset>

        <Allcontacts sort={sort} search={search}/>
        </>
    )
}

export default Contactlist