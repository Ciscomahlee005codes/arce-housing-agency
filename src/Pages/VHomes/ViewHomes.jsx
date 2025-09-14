import React from 'react'
import HomeViews from '../../Components/HomeViews/HomeViews'
import ViewLodges from '../../Components/ViewLodges/ViewLodges'
import Search from '../../Components/Search/Search'
import './ViewHomes.css'

const ViewHomes = () => {
  return (
    <div>
     <div className="search">
       <Search/>
     </div>
      <HomeViews />
      <ViewLodges />
    </div>
  )
}

export default ViewHomes
