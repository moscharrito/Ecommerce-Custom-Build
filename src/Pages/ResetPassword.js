import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const ResetPassword = () => {
  return (
    <>
        <Meta title= {'Reset Password'} />
        <BreadCrumb title='Reset Password' />

        <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Reset Password</h3>
                        <form className='d-flex flex-column gap-15 mb-3' action="">
                          <CustomInput type="password" name='password' placeholder='Password' /> 
                          <CustomInput type="password" name='confpassword' placeholder='Confirm Password' /> 
                          <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Ok</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ResetPassword