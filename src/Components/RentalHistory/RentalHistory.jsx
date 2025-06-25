import React from "react";
import "./RentalHistory.css";
import { rentalHistoryData } from "../../../RentalData";

const RentalHistory = () => {
  return (
    <div className="history-container">
      <h2 className="history-title">🏡 Rental History</h2>
      <p className="history-subtitle">Track your completed tours and rentals</p>

      <div className="table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Tour Status</th>
              <th>Rental Status</th>
              <th>Property</th>
              <th>Location</th>
              <th>Flat Type</th>
              <th>Agent</th>
            </tr>
          </thead>
         <tbody>
  {rentalHistoryData.map((item, index) => (
    <tr key={index}>
      <td data-label="Date">{item.date}</td>
      <td data-label="Time">{item.time}</td>
      <td data-label="Tour Status">
        {item.tourStatus === "Completed"
          ? "✅ Completed"
          : item.tourStatus === "Pending"
          ? "🕓 Pending"
          : "❌ Cancelled"}
      </td>
      <td data-label="Rental Status">
        {item.rentalStatus === "Successful Rental"
          ? "✅ Successful"
          : item.rentalStatus === "Not Rented"
          ? "❌ Not Rented"
          : "—"}
      </td>
      <td data-label="Property">{item.propertyName}</td>
      <td data-label="Location">{item.location}</td>
      <td data-label="Apartment">{item.flatType}</td>
      <td data-label="Agent">{item.agent}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default RentalHistory;