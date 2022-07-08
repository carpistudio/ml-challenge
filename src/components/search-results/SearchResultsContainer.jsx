import React, { useEffect, useState } from 'react'
import { useLocation } from   'react-router-dom';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import Results from './Results'

function SearchResultsContainer() {

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("search");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const result = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=50`);
        const data = await result.json();

        // Elijo las categorías que tienen más resultados y lo asigno a las categorías para enviar al breadcrumb
        let cats = data.available_filters[0].values
          .sort((a,b) => (a.results < b.results) ? 1 : ((b.results < a.results) ? -1 : 0))
          .slice(0, 5)
          .reverse()
          .map(cat => cat.name);
        setCategories([...cats]);

        // Elijo las propiedades de los productos que necesito
        setProducts({
          author: {
            name: "Matías",
            lastname: "Coletta"
          },
          categories: [...cats],
          items: data.results.map((prod) => ({
            id: prod.id,
            title: prod.title,
            price: {
              currency: prod.installments.currency_id,
              amount: prod.price
            },
            picture: prod.thumbnail,
            condition: prod.condition,
            free_shipping: prod.shipping.free_shipping,
            address: prod.address.state_name
          }))
        });

      } catch(err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, [query]);
  
  
  return (
    <div className="searchResults">
        <Breadcrumbs categories={categories} />
        <Results products={products.items} />
    </div>
  )
}

export default SearchResultsContainer