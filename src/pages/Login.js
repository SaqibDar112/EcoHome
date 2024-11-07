import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { authenticate, isAuthenticated, login} from '../api/UserApi'

const Login = () => {
    const user_info = isAuthenticated();
    const [user , setUser]= useState({
        email:'',
        password:'',
        error:'',
        success:false
    })
    let navigate  = useNavigate();

    const {email,password,error,success}=user;

    const handleLogin=e=>{
       
        e.preventDefault()
        login(user)
        .then(data=>{
            if(data.error){
               setUser({...user,error:data.error})
            }else{
                setUser({success:true})
                authenticate(data)
            }
        })
    }
    const showError=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const redirect = ()=>{
        if(success){
            console.log(user_info)
            if(user_info && user_info.user.role===1){
                navigate('/admin/dashboard')
            }
            else{
                navigate('/')
            }
        }
    }
    return (
        <>
            <div className='container-fluid'>
                <Navbar/>
                {showError()}
                {redirect()}
                <div className='d-flex flex-column justify-content center align-items-center py-5'>
                    <div className='col col-md-8 col-12 px-lg-5'>
                        <div className='card shadow-lg px-1 px-lg-5'>
                            <div className='card-body w-100'>
                                <div className='d-flex flex-column justify-content center align-items-center py-3'>
                                    <span><i className='bi bi-person-circle  ' style={{ fontSize: '50px' }}></i></span>
                                </div>

                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='email' className='form-control' onChange={e=>setUser({...user,email:e.target.value})}
                                            id='email' placeholder='Enter your last email' />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>


                                <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control' id='password' placeholder='Enter your password' 
                                        onChange={e=>setUser({...user,password:e.target.value})}></input>
                                        <label for='password'>password</label>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn custom-bg my-5 w-50 ' type='button' onClick={handleLogin}>Login</button>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <div>
                                        Do not have an account?<Link to="/register" >Register</Link>
                                    </div>
                                    <div>
                                        <Link to="/forgetpassword">forget Password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;