import React from 'react'
import Logo from '../logo/Logo'
import SearchBar from './SearchBar'

function SearchContainer() {

  return (
    <div className="searchContainer">
      <Logo width="40px"/>
      <SearchBar />
    </div>
  )
}

export default SearchContainer