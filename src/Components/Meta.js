import {Helmet} from "react-helmet";

import React from 'react'

export const Meta = (props) => {
  return (
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
  )
}
