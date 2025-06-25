import React from "react";
import { useParams } from "react-router-dom";
import { house_List } from "../../../house_List";
import "./HomeDetails.css";

const HomeDetails = () => {
  const { id } = useParams();
  const house = house_List.find(h => h.id.toString() === id);

  if (!house) {
    return <div className="details-container"><h2>House not found</h2></div>;
  }

  return (
    <div className="details-container">
      <img src={house.image} alt={house.name} className="details-image" />
      <div className="details-info">
        <h2>{house.name}</h2>
        <p><strong>State:</strong> {house.state}</p>
        <p><strong>Location:</strong> {house.location}</p>
        <p><strong>Rating:</strong> {house.rating} / 5</p>
        <p><strong>Type:</strong> {house.type}</p>
        <p><strong>Description:</strong> {house.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default HomeDetails;
