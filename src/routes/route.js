import React from 'react'
import { Route } from 'react-router-dom'

const RouteWrapper = ({ component: Component, isPrivate = false, ...rest }) => {

  // if(signed && isPrivate) {
  //   return <Redirect to="/resume" />
  // }

  // if(!signed && isPrivate) {
  //   return <Redirect to="/" />
  // }

  return <Route {...rest} component={Component} />
}

export default RouteWrapper