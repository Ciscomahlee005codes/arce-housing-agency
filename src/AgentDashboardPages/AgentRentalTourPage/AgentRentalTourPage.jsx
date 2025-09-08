import React from 'react'
import "./AgentRentalTourPage.css"

import AgentSideBar from '../../AgentDashboard/AgentSideBar/AgentSideBar'
import AgentRentals from '../../AgentDashboard/AgentRentals/AgentRentals'

const AgentRentalTourPage = () => {
  return (
    <div className='rental-layout'>
      <AgentSideBar />
      <div className="rental-content">
        <AgentRentals />
      </div>
    </div>
  )
}

export default AgentRentalTourPage
