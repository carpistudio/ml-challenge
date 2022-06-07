import React from 'react'
import Loader from '../loader/Loader'

function Detail({product}) {

    // Solo muestro el producto una vez que haya terminado el fetch
    if (!product) {
        return (
            <Loader />
        )
    }
    return (
        <div className="detail">
            <div className="main">
                <div className="main__image">
                    <img src={product.picture} alt={product.title} />
                </div>
                <div className="main__info">
                    <p>
                        {product.condition === "used" && "Usado - "}
                        {product.condition === "new" && "Nuevo - "}
                        {product.sold_quantity} Vendidos
                    </p>
                    <h5>{product.title}</h5>
                    <h4>${product.price.amount.toLocaleString()}</h4>
                    <button className="btn-buy">Comprar</button>
                </div>
            </div>
            <div className="description">
                {
                    // Esta parte es porque me encontré con algunos productos sin descripción :)
                    product.description ? 
                    <>
                        <h3>Descripción del producto</h3>
                        <p>{product.description}</p>
                    </> :
                    <p>Producto sin descripción</p>
                }
            </div>
        </div>
    )
}

export default Detail