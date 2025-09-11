import React from 'react'
import UserSideBar from "../../UserDashboard/UserSideBar/UserSideBar"
import UserRequest2 from '../../UserDashboard/UserRequest2/UserRequest2'
import "./RequestPage.css"

const RequestPage = () => {
  return (
    <div className='request-layout'>
      <UserSideBar />
      <div className="request-content">
        <UserRequest2 />
      </div>
    </div>
  )
}

export default RequestPage
