// HomeView.jsx
import React from 'react';
import { house_List } from '../../../house_List';
import { FaLongArrowAltRight } from "react-icons/fa";
import './HomeViews.css';
import { Swiper as ListingSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
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

const HomeViews = () => {
    const navigate = useNavigate();

      const handleViewDetails = (id) => {
    navigate(`/viewHomes/${id}`);
  };

  return (
    <section className="home-view">
      <div className="container">
        <h2 className="section-title">Listed Homes</h2>

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
          {house_List.map((house) => (
            <SwiperSlide key={house.id}>
              <div className="house-card">
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
            </SwiperSlide>
          ))}
        </ListingSwiper>

      </div>
    </section>
  );
};

export default HomeViews;
