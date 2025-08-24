import React from 'react'
import "./RentalTourPage.css"
import UserSideBar from '../../UserDashboard/UserSideBar/UserSideBar'
import UserRentals from '../../UserDashboard/UserRentals/UserRentals'

const RentalTourPage = () => {
  return (
    <div className='rental-layout'>
      <UserSideBar />
      <div className="rental-content">
        <UserRentals />
      </div>
    </div>
  )
}

export default RentalTourPage
