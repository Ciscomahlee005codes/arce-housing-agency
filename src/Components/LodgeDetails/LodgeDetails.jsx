import React from "react";
import { useParams } from "react-router-dom";
import { lodge_List } from "../../../house_List";
import "./LodgeDetails.css";

const LodgeDetails = () => {
  const { id } = useParams();
  const lodge = lodge_List.find((l) => l.id.toString() === id);

  if (!lodge) {
    return <div className="details-container"><h2>Lodge not found</h2></div>;
  }

  return (
    <div className="details-container">
      <img src={lodge.image} alt={lodge.name} className="details-image" />
      <div className="details-info">
        <h2>{lodge.name}</h2>
        <p><strong>State:</strong> {lodge.state}</p>
        <p><strong>Location:</strong> {lodge.location}</p>
        <p><strong>Rating:</strong> {lodge.rating} / 5</p>
        <p><strong>Type:</strong> {lodge.type}</p>
        <p><strong>Description:</strong> {lodge.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default LodgeDetails;
