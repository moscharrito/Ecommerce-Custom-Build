import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const Login = () => {
  return (
    <>
        <Meta title= {'Login'} />
        <BreadCrumb title='Login' />

        <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Login</h3>
                            <form className='d-flex flex-column gap-15 mb-3' action="">
                                <CustomInput type="email" name='email' placeholder='Email' />
                                <CustomInput ttype="password" name='password' placeholder='Password' />
                                <Link to='/forgot-password'>Forgot Your Password</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit '>Login</button>
                                    <Link to='/signup' className='button signup'>SignUp</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Login