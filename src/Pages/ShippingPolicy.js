import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import Container from '../Components/Container'

const ShippingPolicy = () => {
  return (
    <>
        <Meta title= {'Shipping Policy'} />
        <BreadCrumb title='Shipping Policy' />

        <Container className="policy-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <div className="policy"></div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default ShippingPolicy