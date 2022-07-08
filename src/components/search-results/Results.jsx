import React from 'react'
import Loader from '../loader/Loader'
import Single from './Single'

function Results({products}) {

  if(products) {
    console.log(products);
    return (
      <div className="results">
      {
        products.map((prod) => (
          <Single key={prod.id} product={prod} />
        ))
      }
      </div>
    )
  } else {
    return (
      <Loader />
    )
  }
    
}

export default Results