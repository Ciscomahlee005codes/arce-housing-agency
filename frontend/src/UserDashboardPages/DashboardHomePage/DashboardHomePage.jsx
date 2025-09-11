import React from 'react'
import "./DashboardHomePage.css"
import UserSideBar from '../../UserDashboard/UserSideBar/UserSideBar'
import UserProperties from '../../UserDashboard/UserProperties/UserProperties'
import DashboardTop from '../../UserDashboard/DashboardHome/DashboardTop'
import UserRequest from '../../UserDashboard/UserRequest/UserRequest'
import Agents from '../../UserDashboard/UserChats/Agents'
import UserActivity from '../../UserDashboard/UserActivity/UserActivity'

const DashboardHomePage = () => {
  return (
    <div className='dashboard-layout'>
      <UserSideBar />
      <div className="dashboard-content">
        <DashboardTop />
         <UserActivity />
        <UserProperties />
        <div className="middle-level">
          <UserRequest />
          <Agents />
        </div>
      </div>
    </div>
  )
}

export default DashboardHomePage
