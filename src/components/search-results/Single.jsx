import React from 'react'
import { Link } from 'react-router-dom'

function Single({product}) {
  return (
      <table>
        <tr>
          <td>{product.title}</td>
          <td>{product.price}</td>
        </tr>
      </table>
  )
}

export default Single