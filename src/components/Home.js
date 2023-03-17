import React from "react";
import "../styles/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon prime"
      />
      {/* product id,title,image,rating */}
      <div className="home__row">
        <Product
          id="123450"
          title="boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3 Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Lightning Black)"
          price={1199}
          rating={5}
          image="https://m.media-amazon.com/images/I/61hVGtfIXGL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="123451"
          title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance (Bold Black)"
          price={15}
          rating={5}
          image="https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123452"
          title="Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster"
          price={1000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41VcqwZ-O8L._AC_SY400_.jpg"
        />
        <Product
          id="123453"
          title="BULLAR 30 kg Steel Home Gym Set with 3Ft Curl, 5Ft Straight Rod, Pair Steel nut Dumbbell Rods, Steel Weight Plates Combo,Gym Equipment for Home Workout..."
          price={349}
          rating={5}
          image="https://m.media-amazon.com/images/I/81C7jt5zTML._SL1500_.jpg"
        />
        <Product
          id="123454"
          title="India Today English October 03 2022"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ZUx8xKabL._SY344_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123455"
          title="Lenovo V15 (2021) Intel Core i3 10th Gen 39.63cm (15.6 FHD Thin and Light Laptop (4GB RAM/ 256GB SSD/ Windows 10 Home/ Iron Grey/ 1.85 kg), 82C500XXIH"
          price={5000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41ahkQ1wRdS._SX300_SY300_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
