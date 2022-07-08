import React from 'react'
import { Link } from 'react-router-dom'

function Single({product}) {
  return (
    <Link to={`/items/${product.id}`} className="results__single">
      <table>
        <tr>
          <td>{product.title}</td>
          <td>{product.price}</td>
        </tr>
      </table>
    </Link>
  )
}

export default Single