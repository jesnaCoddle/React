import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiBaseUrl } from "../../utils/apiCall";
import './BookingModule.css';

interface Equipment {
  id: number;
  make: string;
  model: string;
  description: string;
  daily_rate: number;
}

const EquipmentBooking = () => {
  const { id } = useParams<{ id: string }>();
  const [equipment, setEquipment] = useState<Equipment | null>(null);

  useEffect(() => {
    const fetchEquipmentDetails = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/equipment/get-equipment/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setEquipment(response.data[0]);
      } catch (error) {
        console.error("Error fetching equipment details:", error);
      }
    };

    fetchEquipmentDetails();
  }, [id]);

  if (!equipment) {
    return <div>Loading equipment details...</div>;
  }

  return (
    <div className="equipment-booking">
      <h2>Book Equipment</h2>
      <div className="equipment-details">
        <h3>{equipment.make} {equipment.model}</h3>
        <p>Description: {equipment.description}</p>
        <p>Daily Rate: ${equipment.daily_rate}</p>
      </div>
      <button className="book-button">Confirm Booking</button>
    </div>
  );
};

export default EquipmentBooking;