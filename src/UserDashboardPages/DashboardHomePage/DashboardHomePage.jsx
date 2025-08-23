import React from 'react'
// import "./DashboardHomePage.css"
import UserSideBar from '../../UserDashboard/UserSideBar/UserSideBar'
import DashboardHome from '../../UserDashboard/DashboardHome/DashboardHome'

const DashboardHomePage = () => {
  return (
    <div className='dashboard-layout'>
      <UserSideBar />
      <div className="dashboard-content">
        <DashboardHome />
      </div>
    </div>
  )
}

export default DashboardHomePage
