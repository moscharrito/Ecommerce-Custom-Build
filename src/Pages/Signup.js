import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const Signup = () => {
  return (
    <>
      <Meta title= {'Signup'} />
        <BreadCrumb title='Signup' />

        <Container class1="login-wrapper home-wrapper-2 py-5">
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className='text-center'>Sign Up</h3>
                          <form className='d-flex flex-column gap-15 mb-3' action="">
                            <CustomInput type="text" name='name' placeholder='Name'/> 
                            <CustomInput type="email" name='email' placeholder='Email' />
                            <CustomInput type="tel" name='mobile' placeholder='Mobile Number' />
                            <CustomInput type="password" name='password' placeholder='Password' /> 
 
                              <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                  <button className='button border-0'>Signup</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
      </Container>
    </>
  )
}

export default Signup