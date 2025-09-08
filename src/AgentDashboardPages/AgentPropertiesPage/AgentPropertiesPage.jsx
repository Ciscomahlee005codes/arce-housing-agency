import React from 'react'
import "./AgentPropertiesPage.css"

import AgentSideBar from '../../AgentDashboard/AgentSideBar/AgentSideBar'
import AgentBrowseProperties from '../../AgentDashboard/AgentBrowseProperties/AgentBrowseProperties'

const AgentPropertiesPage = () => {
  return (
    <div className='property-layout'>
      <AgentSideBar />
      <div className="property-content">
        <AgentBrowseProperties />
      </div>
    </div>
  )
}

export default AgentPropertiesPage
