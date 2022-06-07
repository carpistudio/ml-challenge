import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const [query, setQuery ] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (query) => {
    navigate(`/items?search=${query}`);
    setQuery("");
  }

  return (
    <form className="searchBar" onSubmit={(e) => { e.preventDefault(); handleSubmit(query); }}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={query}
          onChange={(e) => { setQuery(e.currentTarget.value )}}
        />
        <button type="submit"><img src="./img/search.png" alt="Buscar" /></button>
    </form>
  )
}

export default SearchBar