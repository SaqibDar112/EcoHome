import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { emailVerify } from '../api/UserApi.js';
import Navbar from '../components/Navbar';

const EmailConfirmation = () => {
    let params = useParams();
    let token = params.token;
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    useEffect(()=>{
        setError('')
        setSuccess('')
        emailVerify(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
        .catch(err=>{
            console.log("error in emailVerify function",err)
        })
    },[])

  return (
    <>
    <Navbar/>
    <div className='card'>
                    {success && (
                        <div className='alert alert-success'>{success} <Link to="/login">Login</Link>.</div>
                    )}
                    {error && !success && (
                        <div className='alert alert-danger'>{error}</div>
                    )}
                </div>

    </>
  )
}

export default EmailConfirmation;