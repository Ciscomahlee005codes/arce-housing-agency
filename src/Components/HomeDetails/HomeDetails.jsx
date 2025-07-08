import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { house_List } from "../../../house_List";
import "./HomeDetails.css";

const HomeDetails = () => {
  const { id } = useParams();
  const house = house_List.find((h) => h.id.toString() === id);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
const [chatMessages, setChatMessages] = useState([]);
const [chatInput, setChatInput] = useState("");

const handleSendMessage = () => {
  if (chatInput.trim()) {
    setChatMessages([...chatMessages, { text: chatInput, sender: "user" }]);
    setChatInput("");
  }
};


  const [formData, setFormData] = useState({
    tourType: "",
    date: "",
    time: "",
    landmark: "",
    phone: "",
    name: "",
    paymentMethod: "",
    platform: "",
    virtualContact: "",
  });

  if (!house) {
    return <div className="details-container"><h2>House not found</h2></div>;
  }

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(
        formData.tourType === "virtual"
          ? "Virtual tour booked successfully!"
          : "Physical tour booked successfully!"
      );
      setShowModal(false);
      setStep(0);
      setFormData({
        tourType: "",
        date: "",
        time: "",
        landmark: "",
        phone: "",
        name: "",
        paymentMethod: "",
        platform: "",
        virtualContact: "",
      });
    }, 2000);
  };

  return (
    <div className="details-container">
      <img src={house.image} alt={house.name} className="details-image" />
      <div className="details-info">
        <h2>{house.name}</h2>
        <p><strong>State:</strong> {house.state}</p>
        <p><strong>Location:</strong> {house.location}</p>
        <p><strong>Rating:</strong> {house.rating} / 5</p>
        <p><strong>Rent:</strong> {house.rent}</p>
        <p><strong>Description:</strong> {house.description}</p>
      </div>

      <div className="btn-container">
        <button onClick={() => setShowModal(true)}>Book a House Tour</button>
        <button onClick={() => setShowChat((prev) => !prev)}>Chat with an Agent</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Book a House Tour</h3>
            <h4 className="property-name">Property: <span>{house.name}</span></h4>

            {loading ? (
              <div className="spinner-wrapper">
                <div className="loader"></div>
                <p className="loading-text">Processing booking...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 0 && (
                  <div className="modal-step">
                    <label>
                      Select Tour Type:
                      <select
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select Tour Type --</option>
                        <option value="physical">Physical Booking</option>
                        <option value="virtual">Virtual Booking</option>
                      </select>
                    </label>
                  </div>
                )}

                {/* PHYSICAL BOOKING FLOW */}
                {formData.tourType === "physical" && (
                  <>
                    {step === 1 && (
                      <div className="modal-step">
                        <label>
                          Select Date:
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </label>
                        <label>
                          Select Time:
                          <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                          />
                        </label>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="modal-step">
                        <label>
                          Nearest Landmark / Bus Stop:
                          <input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            placeholder="e.g. near XYZ Junction"
                            required
                          />
                        </label>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="modal-step">
                        <label>
                          Full Name:
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </label>
                        <label>
                          Phone Number:
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </label>
                      </div>
                    )}
                  </>
                )}

                {/* VIRTUAL BOOKING FLOW */}
                {formData.tourType === "virtual" && step === 1 && (
                  <div className="modal-step">
                    <label>
                      Preferred Platform:
                      <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Choose Platform --</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Google Meet">Google Meet</option>
                        <option value="WhatsApp">WhatsApp</option>
                      </select>
                    </label>
                    <label>
                      Your Email / Phone Number:
                      <input
                        type="text"
                        name="virtualContact"
                        value={formData.virtualContact}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Select Date:
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Select Time:
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                )}

                {/* SUMMARY STEP */}
                {step === 4 && (
                  <div className="modal-step">
                    <p><strong>Tour Type:</strong> {formData.tourType}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>

                    {formData.tourType === "physical" ? (
                      <>
                        <p><strong>Landmark:</strong> {formData.landmark}</p>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Tour Fee:</strong> ₦2,500</p>
                        <label>
                          Payment Method:
                          <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                          >
                            <option value="">-- Select Payment Option --</option>
                            <option value="transfer">Bank Transfer</option>
                            <option value="card">Debit Card</option>
                            <option value="cash">Cash on Arrival</option>
                          </select>
                        </label>
                        <p className="summary-note">Ensure all details are correct before proceeding.</p>
                      </>
                    ) : (
                      <>
                        <p><strong>Platform:</strong> {formData.platform}</p>
                        <p><strong>Virtual Contact:</strong> {formData.virtualContact}</p>
                        <p><strong>Tour Fee:</strong> ₦2,500</p>
                        <label>
                          Payment Method:
                          <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                          >
                            <option value="">-- Select Payment Option --</option>
                            <option value="transfer">Bank Transfer</option>
                            <option value="card">Debit Card</option>
                          </select>
                        </label>
                        <p className="summary-note">A virtual invite link will be sent to you before your scheduled time.</p>
                      </>
                    )}
                  </div>
                )}

                {/* NAVIGATION BUTTONS */}
                <div className="modal-actions">
                  {step > 0 && <button type="button" onClick={handleBack}>Back</button>}
                  {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
                  {step === 4 && <button type="submit">Confirm & {formData.tourType === "physical" ? "Pay" : "Book"}</button>}
                </div>
              </form>
            )}

            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
      {showChat && (
  <div className="chat-box">
    <div className="chat-header">
      <p>Agent Chat</p>
      <button onClick={() => setShowChat(false)} className="close-chat">×</button>
    </div>
    <div className="chat-messages">
      {chatMessages.map((msg, idx) => (
        <div key={idx} className={`chat-message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
    <div className="chat-input-area">
      <input
        type="text"
        placeholder="Type a message..."
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  </div>
)}

    </div>
  );
};

export default HomeDetails;
