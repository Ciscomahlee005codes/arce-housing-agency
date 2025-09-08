import React from 'react'
import "./AgentDashboardHomePage.css"

import Agents from '../../AgentDashboard/AgentChats/Agents'
import AgentSideBar from '../../AgentDashboard/AgentSideBar/AgentSideBar'
import AgentDashboardTop from '../../AgentDashboard/AgentDashboardHome/AgentDashboardTop'
import AgentActivity from '../../AgentDashboard/AgentActivity/AgentActivity'
import AgentProperties from '../../AgentDashboard/AgentProperties/AgentProperties'
import AgentRequest from '../../AgentDashboard/AgentRequest/AgentRequest'

const AgentDashboardHomePage = () => {
  return (
    <div className='dashboard-layout'>
      <AgentSideBar />
      <div className="dashboard-content">
        <AgentDashboardTop />
         <AgentActivity />
        <AgentProperties />
        <div className="middle-level">
          <AgentRequest />
          <Agents />
        </div>
      </div>
    </div>
  )
}

export default AgentDashboardHomePage
