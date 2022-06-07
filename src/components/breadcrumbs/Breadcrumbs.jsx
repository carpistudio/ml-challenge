import React, { Fragment } from 'react'

function Breadcrumbs({categories}) {
  
  return (
    <div className="breadcrumbs">
    {
      Array.isArray(categories) ?
      categories.map((cat) => (
        <Fragment key={cat}>
          <span>{cat}</span>
          <span className="arrow">{">"}</span>
        </Fragment>
      )) :
      categories
    }
    </div>
  )
}

export default Breadcrumbs