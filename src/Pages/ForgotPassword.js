import React from 'react'
import { Meta } from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
 

const ForgotPassword = () => {
  return (
    <>
       <Meta title= {'Forgot Password'} />
        <BreadCrumb title='Forgot Password' />

        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Reset Password</h3>
                        <p className="text-center mt-2 mb-3">
                          We will send you an email to reset your password
                        </p>
                        <form className='d-flex flex-column gap-15 mb-3' action="">
                            <CustomInput type="password" name='password' placeholder='Password' className="form-control"/>
                            <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap-15'>
                                <button className='button border-0' type='submit'>Submit</button>
                                <Link to='/login'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ForgotPassword