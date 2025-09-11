import React, { useState } from 'react';
import './Lodges.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { lodge_List, sharedRoom_List, hostel_List } from '../../../house_List';
import { useNavigate } from 'react-router-dom'; 

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star">&#9733;</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">&#9733;</span>);
  }

  while (stars.length < 5) {
    stars.push(<span key={`empty-${stars.length}`} className="star empty">&#9733;</span>);
  }

  return stars;
};

const Lodges = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Lodges"); // default is lodges

  const handleViewDetails = (id) => {
    if (activeTab === "Lodges") {
      navigate(`/lodge/${id}`);
    } else if (activeTab === "Shared Rooms") {
      navigate(`/sharedroom/${id}`);
    } else if (activeTab === "Hostels") {
      navigate(`/hostel/${id}`);
    }
  };

  // pick which list to render
  const displayedList = 
    activeTab === "Lodges" ? lodge_List : 
    activeTab === "Shared Rooms" ? sharedRoom_List : 
    hostel_List;

  return (
    <div>
      <section className="available-houses">
        <div className="container">
          <h2 className="section-title">Featured For Students</h2>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={activeTab === "Lodges" ? "active" : ""} 
              onClick={() => setActiveTab("Lodges")}
            >
              Lodges
            </button>
            <button 
              className={activeTab === "Shared Rooms" ? "active" : ""} 
              onClick={() => setActiveTab("Shared Rooms")}
            >
              Shared Rooms
            </button>
            <button 
              className={activeTab === "Hostels" ? "active" : ""} 
              onClick={() => setActiveTab("Hostels")}
            >
              Hostels
            </button>
          </div>

          <div className="houses-grid">
            {displayedList.slice(0, 3).map((item) => (
              <div key={item.id} className="house-card">
                <img src={item.image} alt={item.name} className="house-image" />
                <div className="house-info">
                  <h3 className="house-name">{item.name}</h3>
                  <p className="house-category">State: {item.state}</p>
                  <p className="house-category">Location: {item.location}</p>
                  <p className="house-category">Annual Rent: {item.rent}</p>
                  <div className="house-rating">{renderStars(item.rating)}</div>
                </div>
                <div className="card-btn">
                  <button onClick={() => handleViewDetails(item.id)}>View Details</button> 
                </div>
              </div>
            ))}
          </div>

          <div className="btn-container">
            {activeTab === "Lodges" && (
              <button onClick={() => navigate('/viewHomes')}>
                View More Lodges <FaLongArrowAltRight id='right-arrow' />
              </button>
            )}
            {activeTab === "Shared Rooms" && (
              <button onClick={() => navigate('/viewHomes')}>
                View More Shared Rooms <FaLongArrowAltRight id='right-arrow' />
              </button>
            )}
            {activeTab === "Hostels" && (
              <button onClick={() => navigate('/viewHomes')}>
                View More Hostels <FaLongArrowAltRight id='right-arrow' />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lodges;
