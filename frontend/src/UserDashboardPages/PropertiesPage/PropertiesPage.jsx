import React from 'react'
import "./PropertiesPage.css"
import UserSideBar from '../../UserDashboard/UserSideBar/UserSideBar'
import BrowseProperties from '../../UserDashboard/BrowseProperties/BrowseProperties'

const PropertiesPage = () => {
  return (
    <div className='property-layout'>
      <UserSideBar />
      <div className="property-content">
        <BrowseProperties />
      </div>
    </div>
  )
}

export default PropertiesPage
