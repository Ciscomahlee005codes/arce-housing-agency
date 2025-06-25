// Hero.jsx
import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
const heroSlides = [
  {
    id: 1,
    background: "/House-4.jpg",
    title: "Find Your Next Home with",
    brand: "ARCE Housing Agency",
    desc: "Easily explore verified rental apartments suited to your budget, lifestyle, and location. Comfort is just a few clicks away.",
  },
  {
    id: 2,
    background: "/House-6.jpg",
    title: "Rent Smarter. Live Better",
    brand: "ARCE Housing Agency",
    desc: "Whether you're looking for a shop, shared space, or family-sized apartment, ARCE makes finding the perfect rental simple and fast.",
  },
  {
    id: 3,
    background: "/House-8.jpg",
    title: "Stress-Free Renting Starts With",
    brand: "ARCE Housing Agency",
    desc: "We’ve removed the guesswork. Get matched with clean, affordable, and trusted homes — all available to rent instantly.",
  },
  {
    id: 4,
    background: "/House-12.jpg",
    title: "Your Ideal Home Is Just Around the Corner —",
    brand: "ARCE Housing Agency",
    desc: "From short stays to long-term leases, discover flexible rental options that fit your journey and your budget.",
  },
  {
    id: 5,
    background: "/House-13.jpg",
    title: "Apartments You Can Trust, From",
    brand: "ARCE Housing Agency",
    desc: "Say goodbye to house-hunting stress. Browse listings with real photos, clear pricing, and verified landlords — all in one place.",
  },
];


  return (
    <div className="hero-swiper">
     <Swiper
  modules={[Navigation, Pagination, EffectFade, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  loop
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={1000}
  autoplay={{
    delay: 5000, // 5 seconds between slides
    disableOnInteraction: false, // keeps autoplay even if user interacts
  }}
>
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="header"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="header-container">
                <div className="header-content">
                  <h2>
                    {slide.title}{" "}
                    <span
                      style={{ fontFamily: `"Montserrat", sans-serif` }}
                    >
                      {slide.brand}
                    </span>
                  </h2>
                  <p>{slide.desc}</p>
                  {/* <button>View Houses</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
