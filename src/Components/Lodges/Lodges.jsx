import React from 'react';
import './Lodges.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { lodge_List } from '../../../house_List';
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

  const handleViewDetails = (id) => {
    navigate(`/lodge/${id}`);
  };

  return (
    <div>
      <section className="available-houses">
        <div className="container">
          <h2 className="section-title">Lodges For Students</h2>
          <div className="houses-grid">
            {lodge_List.slice(0, 3).map((lodge) => (
              <div key={lodge.id} className="house-card">
                <img src={lodge.image} alt={lodge.name} className="house-image" />
                <div className="house-info">
                  <h3 className="house-name">{lodge.name}</h3>
                  <p className="house-category">State: {lodge.state}</p>
                  <p className="house-category">Location: {lodge.location}</p>
                   <p className="house-category">Annual Rent: {lodge.rent}</p>
                  <div className="house-rating">{renderStars(lodge.rating)}</div>
                </div>
                <div className="card-btn">
                  <button onClick={() => handleViewDetails(lodge.id)}>View Details</button> 
                </div>
              </div>
            ))}
          </div>
          <div className="btn-container">
            <button onClick={()=> navigate('/viewHomes')}>View More Lodges <FaLongArrowAltRight id='right-arrow' /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lodges;
