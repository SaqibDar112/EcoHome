
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import { register } from '../api/UserApi.js'

const Register = () => {
    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    const handleRegister = (e) => {
        setError('');
        setSuccess(false);
        e.preventDefault();

        register({ firstname, lastname, email, password })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setSuccess(true)
                }
            })

    };

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>Congratulations!, you have registered successfully.Check email for verification.</div>
        }
    }
    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                {showError()}
                {showSuccess()}
                <div className='d-flex flex-column justify-content center align-items-center py-5'>
                    <div className='col col-md-8'>
                        <div className='card shadow-lg'>
                            <div className='card-body w-100'>
                                <div className='d-flex flex-column justify-content center align-items-center py-3'>
                                    <span><i className='bi bi-person-circle  ' style={{ fontSize: '50px' }}></i></span>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'>F</span>
                                    <div className='form-floating me-2 shadow-lg'>
                                        <input type='text' className='form-control' id='First Name' placeholder='Enter your first name'
                                            onChange={e => {
                                                return setFirstname(e.target.value)
                                            }} />
                                        <label htmlFor='First Name'>First Name</label>
                                    </div>
                                    <span className='input-group-text'>L</span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='lastname' placeholder='Enter your last name'
                                            onChange={e => {
                                                return setLastname(e.target.value)
                                            }} />
                                        <label htmlFor='lastname'>lastname</label>
                                    </div>
                                </div>
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='email' className='form-control' id='email' placeholder='Enter your last email'
                                            onChange={e => {
                                                return setEmail(e.target.value)
                                            }} />
                                        <label htmlFor='email'>Email</label>
                                    </div>
                                </div>
                                <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='password' placeholder='Enter your password'
                                            onChange={e => {
                                                return setPassword(e.target.value)
                                            }}></input>
                                        <label htmlFor='password'>password</label>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn custom-bg my-5 w-50 ' type='submit' onClick={handleRegister}>Register</button>
                                </div>
                                <p>Already have an account?<Link to='/login'>Sign in Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;