// ViewLodges.jsx
import React, { useState } from 'react';
import { lodge_List, sharedRoom_List, hostel_List } from '../../../house_List';
import { Swiper as ListingSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import './ViewLodges.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const ViewLodges = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("lodges"); // lodges | shared | hostels

  // Pick which list to show
  const houses =
    filter === "lodges" ? lodge_List :
    filter === "shared" ? sharedRoom_List :
    filter === "hostels" ? hostel_List :
    [];

  const handleViewDetails = (id) => {
    const path =
      filter === "lodges"
        ? `/lodge/${id}`
        : filter === "shared"
        ? `/sharedroom/${id}`
        : filter === "hostels"
        ? `/hostel/${id}`
        : "#";
    navigate(path);
  };

  return (
    <section className="home-view">
      <div className="container">
        <div className="lodge-header">
          <h1 className="lodge-title">
            {filter === "lodges"
              ? "Lodges For Students"
              : filter === "shared"
              ? "Shared Apartments"
              : "Hostels For Students"}
          </h1><br />
          <div className="filter-buttons">
            <button
              className={filter === "lodges" ? "active" : ""}
              onClick={() => setFilter("lodges")}
            >
              Lodges
            </button>
            <button
              className={filter === "shared" ? "active" : ""}
              onClick={() => setFilter("shared")}
            >
              Roommates
            </button>
            <button
              className={filter === "hostels" ? "active" : ""}
              onClick={() => setFilter("hostels")}
            >
              Hostels
            </button>
          </div>
        </div>

        {houses.length > 0 ? (
          <ListingSwiper
            className="home-swiper-wrapper"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {houses.map((house) => (
              <SwiperSlide key={house.id}>
                <div className="house-card">
                  <img src={house.image} alt={house.name} className="house-image" />
                  <div className="house-info">
                    <h3 className="house-name">{house.name}</h3>
                    <p className="house-category">State: {house.state}</p>
                    <p className="house-category">Location: {house.location}</p>
                    <p className="house-category">Annual Rent: {house.rent}</p>
                    <div className="house-rating">{renderStars(house.rating)}</div>
                  </div>
                  <div className="card-btn">
                    <button onClick={() => handleViewDetails(house.id)}>View Details</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </ListingSwiper>
        ) : (
          <p className="coming-soon">No listings available 🚧</p>
        )}
      </div>
    </section>
  );
};

export default ViewLodges;
