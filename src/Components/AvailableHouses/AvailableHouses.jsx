import React from 'react';
import { house_List } from '../../../house_List';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './AvailableHouses.css';

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

const AvailableHouses = () => {
  const navigate = useNavigate(); 

  const handleViewDetails = (id) => {
    navigate(`/viewHomes/${id}`); 
  };

  return (
    <section className="available-houses">
      <div className="container">
        <h2 className="section-title">Available Homes</h2>
        <div className="houses-grid">
          {house_List.slice(0, 3).map((house) => (
            <div key={house.id} className="house-card">
              <img src={house.image} alt={house.name} className="house-image" />
              <div className="house-info">
                <h3 className="house-name">{house.name}</h3>
                <p className="house-category">State: {house.state}</p>
                <p className="house-category">Location: {house.location}</p>
                <div className="house-rating">{renderStars(house.rating)}</div>
              </div>
              <div className="card-btn">
                <button onClick={() => handleViewDetails(house.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-container">
          <button onClick={()=> navigate('/viewHomes')}>View More Houses <FaLongArrowAltRight id='right-arrow' /></button>
        </div>
      </div>
    </section>
  );
};

export default AvailableHouses;
