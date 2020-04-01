import React from 'react'
import {Link} from 'react-router-dom'
export default function Notfound(){
    return(
        <div style={{margin:"200px auto"}}>
            <h1> Not Found </h1>
            <Link to='/login' className='notfount-btn'>Please login</Link>
        </div>
    )
}