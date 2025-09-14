import React, { useState } from "react"
import { house_List } from "../../../../house_List"
import "./AdminProperties.css"
import { Swiper as ListingSwiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const AdminProperties = () => {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)

  // Filtering logic
  const filteredHouses = house_List.filter((house) => {
    const matchesFilter =
      filter === "All" || house.category?.toLowerCase() === filter.toLowerCase()
    const matchesSearch = house.name
      .toLowerCase()
      .includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Dummy actions
  const handleEdit = (id) => {
    alert(`Edit property with ID: ${id}`)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      alert(`Deleted property with ID: ${id}`)
    }
  }

  const handleView = (id) => {
    alert(`Viewing details of property with ID: ${id}`)
  }

  return (
    <div className="property-container">
      {/* Header with Filters */}
      <div className="property-header">
        <h2 className="p-head">Properties</h2>
        <div className="filters">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Properties</option>
            <option value="Apartment">Apartments</option>
            <option value="Self-Contain">Self-Contain</option>
            <option value="Lodge">Lodges</option>
            <option value="Duplex">Duplex</option>
          </select>
          <input
            type="text"
            placeholder="Search property..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Property Cards with Swiper */}
      <ListingSwiper
        className="home-swiper-wrapper"
        modules={[Pagination, Autoplay]}
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
        {filteredHouses.map((house) => (
          <SwiperSlide key={house.id}>
            <div className="house-card">
              <img src={house.image} alt={house.name} className="house-image" />
              <div className="house-info">
                <h3 className="house-name">{house.name}</h3>
                <p className="house-category">State: {house.state}</p>
                <p className="house-category">Location: {house.location}</p>
                <span
                  className={`status-badge ${
                    house.status?.toLowerCase() || "unknown"
                  }`}
                >
                  {house.status || "Unknown"}
                </span>
              </div>
              <div className="card-actions">
                <button onClick={() => handleEdit(house.id)}>Edit</button>
                <button
                  className="danger"
                  onClick={() => handleDelete(house.id)}
                >
                  Delete
                </button>
                <button onClick={() => handleView(house.id)}>View</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </ListingSwiper>

      {/* Add Property Button */}
      <div className="button-container">
        <button onClick={() => setShowModal(true)}>+ Add Property</button>
      </div>

      {/* Modal for Adding Property */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Property</h3>
            <form>
              <input type="text" placeholder="Property Name" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Location" required />
              <select required>
                <option value="">Select Category</option>
                <option value="Apartment">Apartment</option>
                <option value="Self-Contain">Self-Contain</option>
                <option value="Lodge">Lodge</option>
                <option value="Duplex">Duplex</option>
              </select>
              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProperties
