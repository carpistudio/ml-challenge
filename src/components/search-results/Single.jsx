import React from 'react'
import { Link } from 'react-router-dom'

function Single({product}) {
  return (
    <Link to={`/items/${product.id}`} className="results__single">
        <div className="image">
            <img src={product.picture} alt={product.title} title={product.title} />
        </div>
        <div className="info">
            <div className="info__priceAndShipping">
                <h4 className="info__price">$ {product.price.amount.toLocaleString('es-AR')}</h4>
                {product.free_shipping === true && <img src="img/free_shipping.png" alt="Envío gratis" title="Envío gratis" />}
            </div>
            <p className="info__title">{product.title}</p>
        </div>
        <div className="location">
          {product.sellerid}
        </div>
      </Link>
  )
}

export default Single