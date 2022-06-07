import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Detail from './Detail';

function ProductDetailContainer() {

  const { id } = useParams();
  const [ product, setProduct ] = useState({});
  const [ category, setCategory ] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        // Llamo a la data completa del producto y a la descripción por separado
        const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await result.json();

        const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
        const descriptionData = await description.json();

        // Acá, a la categoría basada en la category_id del producto
        const category = await fetch(`https://api.mercadolibre.com/categories/${data.category_id}`);
        const categoryData = await category.json();
        setCategory(categoryData.name);

        // Elijo las propiedades del producto que necesito
        setProduct({
          author: {
            name: "Matías",
            lastname: "Coletta"
          },
          item: {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: data.price
            },
            picture: data.thumbnail,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: descriptionData.plain_text
          }
        })

      }catch(err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, [id]);

  
  return (
    <div className="productDetail">
      <Breadcrumbs categories={category} />
      <Detail product={product.item} />
    </div>
  )
}

export default ProductDetailContainer