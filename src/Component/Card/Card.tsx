import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEquipments } from "../../utils/apiCall";
import './CardModule.css';

interface Equipment {
  id: number;
  image_url: string;
  make: string;
  model: string;
  year: number;
  STATUS: string;
  description: string;
  daily_rate: number;
}

const EquipmentCard = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchData = async () => {
      try {
        const equipmentData = await fetchEquipments(token);
        setEquipments(equipmentData);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };

    fetchData();
  }, []);

  const handleBookClick = (equipmentId: number) => {
    navigate(`/book/${equipmentId}`);
  };

  return (
    <div className="equipment-card-container">
      {equipments.map((equipment) => (
        <div key={equipment.id} className="equipment-card">
          {equipment.image_url && <img src={equipment.image_url} alt={`${equipment.make} ${equipment.model}`} />}
          <h3>{equipment.make} {equipment.model}</h3>
          <p>Year: {equipment.year}</p>
          <p>Status: {equipment.STATUS}</p>
          <p>{equipment.description}</p>
          <p>Daily Rate: ${equipment.daily_rate}</p>
          <button onClick={() => handleBookClick(equipment.id)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default EquipmentCard;