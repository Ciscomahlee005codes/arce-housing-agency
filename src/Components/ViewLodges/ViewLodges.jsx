// ViewLodges.jsx
import React from 'react';
import { lodge_List } from '../../../house_List';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper as ListingSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'; // ADD THIS
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
  const navigate = useNavigate(); // ADD THIS

  const handleViewDetails = (id) => {
    navigate(`/lodge/${id}`); // Navigate to dynamic lodge details
  };

  return (
    <section className="home-view">
      <div className="container">
        <h2 className="section-title">Lodges For Students</h2>

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
          {lodge_List.map((lodge) => (
            <SwiperSlide key={lodge.id}>
              <div className="house-card">
                <img src={lodge.image} alt={lodge.name} className="house-image" />
                <div className="house-info">
                  <h3 className="house-name">{lodge.name}</h3>
                  <p className="house-category">State: {lodge.state}</p>
                  <p className="house-category">Location: {lodge.location}</p>
                  <div className="house-rating">{renderStars(lodge.rating)}</div>
                </div>
                <div className="card-btn">
                  <button onClick={() => handleViewDetails(lodge.id)}>View Details</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </ListingSwiper>

      </div>
    </section>
  );
};

export default ViewLodges;
