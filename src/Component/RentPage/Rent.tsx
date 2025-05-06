import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EquipmentCard from "../Card/Card";

const RentPage = () => {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", margin: "20px 0" ,color:"white" }}>Available Equipment</h2>
      <EquipmentCard />
      <Footer />
    </>
  );
};

export default RentPage;