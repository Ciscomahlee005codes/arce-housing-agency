import React from 'react'
import UserSideBar from '../../UserDashboard/UserSideBar/UserSideBar'
import UserNotification from '../../UserDashboard/UserNotification/UserNotification'
import "./NotificationPage.css"

const NotificationPage = () => {
  return (
    <div className='notification-layout'>
      <UserSideBar />
      <div className="notification-content">
        <UserNotification />
      </div>
    </div>
  )
}

export default NotificationPage
