import React from 'react'
import { Link } from 'react-router-dom'

function Logo({width}) {
  return (
    <div className="logo">
        <Link to={"/"}><img src="/img/logo.png" alt="Logo" width={width}/></Link>
    </div>
  )
}

export default Logo