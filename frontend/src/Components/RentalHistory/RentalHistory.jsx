import React, { useState } from "react";
import "./RentalHistory.css";
import { rentalHistoryData as originalData } from "../../../RentalData";

const RentalHistory = () => {
  const [activeTab, setActiveTab] = useState("history"); // default: Rental History
  const [feedbackState, setFeedbackState] = useState({});
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState({});
  const [rescheduleState, setRescheduleState] = useState({});
  const [rescheduleData, setRescheduleData] = useState({});

  // Add more data for demonstration
  const rentalHistoryData = [
    ...originalData,
    {
      date: "2025-07-10",
      time: "2:00 PM",
      tourStatus: "Pending",
      rentalStatus: "—",
      propertyName: "Sunrise Villa",
      location: "Ikoyi",
      flatType: "3 Bedroom",
      agent: "Agent Tunde",
    },
    {
      date: "2025-07-08",
      time: "11:00 AM",
      tourStatus: "Completed",
      rentalStatus: "Not Rented",
      propertyName: "Cozy Nest",
      location: "Lekki",
      flatType: "Studio",
      agent: "Agent Rose",
    },
    {
      date: "2025-07-06",
      time: "9:30 AM",
      tourStatus: "Pending",
      rentalStatus: "—",
      propertyName: "Royal Court",
      location: "Ajah",
      flatType: "Mini Flat",
      agent: "Agent Emeka",
    },
  ];

  const toggleFeedback = (index) => {
    if (submittedFeedback[index]) return;
    setFeedbackState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRatingChange = (index, value) => {
    setRatings((prev) => ({ ...prev, [index]: value }));
  };

  const handleReviewChange = (index, e) => {
    setReviews((prev) => ({ ...prev, [index]: e.target.value }));
  };

  const submitFeedback = (index) => {
    const agentName = rentalHistoryData[index].agent;
    const rating = ratings[index];
    alert(
      `✅ Feedback submitted:\nAgent: ${agentName}\nRating: ${rating} star${
        rating > 1 ? "s" : ""
      }`
    );
    setFeedbackState((prev) => ({ ...prev, [index]: false }));
    setSubmittedFeedback((prev) => ({ ...prev, [index]: true }));
  };

  const toggleReschedule = (index) => {
    setRescheduleState((prev) => ({ ...prev, [index]: !prev[index] }));
    setRescheduleData((prev) => ({
      ...prev,
      [index]: {
        date: rentalHistoryData[index].date,
        time: rentalHistoryData[index].time,
      },
    }));
  };

  const handleRescheduleChange = (index, field, value) => {
    setRescheduleData((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  const submitReschedule = (index) => {
    const { date, time } = rescheduleData[index];
    alert(`📅 Tour rescheduled to ${date} at ${time}`);
    setRescheduleState((prev) => ({ ...prev, [index]: false }));
  };

  const renderStarsInput = (index) => {
    const selected = ratings[index] || 0;
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`star-icon ${i < selected ? "selected" : ""}`}
        onClick={() => handleRatingChange(index, i + 1)}
      >
        ★
      </span>
    ));
  };

  // -------------------- List Apartment Form --------------------
  const [formData, setFormData] = useState({
    propertyName: "",
    location: "",
    state: "",
    type: "",
    bedrooms: "",
    rent: "",
    agent: "",
    image: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitApartment = (e) => {
    e.preventDefault();
    alert(
      `🏠 Apartment Listed:\n${formData.propertyName}, ${formData.location}, ${formData.state}`
    );
    // later: send this data to your backend / firebase
    setFormData({
      propertyName: "",
      location: "",
      state: "",
      type: "",
      bedrooms: "",
      rent: "",
      agent: "",
      image: "",
    });
  };

  return (
    <div className="history-container">
      {/* Filter Buttons */}
      <div className="filter-tabs">
        <button
          className={activeTab === "history" ? "active" : ""}
          onClick={() => setActiveTab("history")}
        >
          Rental History
        </button>
        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          List an Apartment
        </button>
      </div>

      {/* Rental History Section */}
      {activeTab === "history" && (
        <>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rentalHistoryData.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr>
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
                      <td>
                        {item.tourStatus === "Completed" &&
                          !submittedFeedback[index] && (
                            <button
                              className="feedback-btn"
                              onClick={() => toggleFeedback(index)}
                            >
                              {feedbackState[index] ? "Cancel" : "Leave Feedback"}
                            </button>
                          )}
                        {submittedFeedback[index] && (
                          <span className="feedback-done">✅ Feedback Sent</span>
                        )}
                        {item.tourStatus === "Pending" && (
                          <button
                            className="feedback-btn"
                            style={{
                              backgroundColor: "#00791d",
                              marginTop: "0.3rem",
                            }}
                            onClick={() => toggleReschedule(index)}
                          >
                            {rescheduleState[index] ? "Cancel" : "Reschedule"}
                          </button>
                        )}
                      </td>
                    </tr>

                    {feedbackState[index] && (
                      <tr>
                        <td colSpan="9">
                          <div className="feedback-form">
                            <p>
                              <strong>Rate this property:</strong>
                            </p>
                            <div className="stars">{renderStarsInput(index)}</div>

                            <textarea
                              placeholder="Write your feedback..."
                              value={reviews[index] || ""}
                              onChange={(e) => handleReviewChange(index, e)}
                            />

                            <button
                              onClick={() => submitFeedback(index)}
                              className="submit-review"
                            >
                              Submit Feedback
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}

                    {rescheduleState[index] && (
                      <tr>
                        <td colSpan="9">
                          <div className="feedback-form">
                            <p>
                              <strong>Reschedule Tour:</strong>
                            </p>
                            <label>
                              New Date:
                              <input
                                type="date"
                                value={rescheduleData[index]?.date || ""}
                                onChange={(e) =>
                                  handleRescheduleChange(index, "date", e.target.value)
                                }
                              />
                            </label>
                            <label>
                              New Time:
                              <input
                                type="time"
                                value={rescheduleData[index]?.time || ""}
                                onChange={(e) =>
                                  handleRescheduleChange(index, "time", e.target.value)
                                }
                              />
                            </label>
                            <button
                              onClick={() => submitReschedule(index)}
                              className="submit-review"
                            >
                              Confirm Reschedule
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* List Apartment Section */}
      {activeTab === "list" && (
        <div className="list-form">
          <h2>🏠 List an Apartment</h2>
          <p className="history-subtitle">
            Add your property details to make it visible to students and tenants
          </p>

          <form onSubmit={submitApartment}>
            <input
              type="text"
              name="propertyName"
              placeholder="Property Name"
              value={formData.propertyName}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="type"
              placeholder="House Type (Lodge, Shared, Flat)"
              value={formData.type}
              onChange={handleFormChange}
              required
            />
            <input
              type="number"
              name="bedrooms"
              placeholder="Number of Bedrooms"
              value={formData.bedrooms}
              onChange={handleFormChange}
              required
            />
            <input
              type="number"
              name="rent"
              placeholder="Rent (₦)"
              value={formData.rent}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="agent"
              placeholder="Agent Name"
              value={formData.agent}
              onChange={handleFormChange}
              required
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleFormChange}
              required
            />

            <button type="submit" className="submit-review">
              Submit Apartment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RentalHistory;
