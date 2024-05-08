import React from 'react'
import "./Home.css"
import Product from '../Products/Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/814vuMu5eLL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="3254354345"
            title="LG Gram 16” 2in1 Lightweight Laptop, Intel 13th Gen Core i7 Evo Platform, Windows 11 Home, 32GB RAM, 1TB SSD, Black
Roll over image to zoom in
LG Gram 16” 2in1 Lightweight Laptop, Intel 13th Gen Core i7 Evo Platform, Windows 11 Home, 32GB RAM, 1TB SSD, Black"
            price={999}
            rating={7}
            image="https://m.media-amazon.com/images/I/717pottSkKL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Amazon Essentials Men's Warm Comfortable Slippers"
            price={21}
            rating={4}
            image="https://m.media-amazon.com/images/I/81r4SN44Z1L._AC_UY575_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy S22 Ultra 5G (SM-S908E/DS) Dual SIM 256GB/ 12GB RAM, GSM Unlocked International Version - Phantom Black"
            price={864}
            rating={3}
            image="https://m.media-amazon.com/images/I/51aK03maLFL._AC_.jpg"
          />
          <Product
            id="23445930"
            title="PlayStation 5 Console (PS5)"
            price={499}
            rating={7}
            image="https://m.media-amazon.com/images/I/51eOztNdCkL._SX522_.jpg"
          />

          <Product
            id="12321341"
            title="Amazon Echo Dot: Add Alexa to Any Room"
            price={50}
            rating={5}
            image="https://cms.qz.com/wp-content/uploads/2016/05/amazonechodotfronton-e1463797661349.jpg?quality=75&strip=all&w=1900&h=1116"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Google Pixel 7a - Unlocked Android Cell Phone - Smartphone with Wide Angle Lens and 24-Hour Battery - 128 GB -  Sea"
            price={481}
            rating={7}
            image="https://m.media-amazon.com/images/I/8162vKQDSYL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Sony 65 Inch Mini LED 4K Ultra HD TV X93L Series: BRAVIA XR Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR65X93L- 2023 Model"
            price={2198}
            rating={7}
            image="https://m.media-amazon.com/images/I/81WbhTldqvL._AC_SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="OUPINKE Mens Automatic Watches Luxury Self Winding Mechanical Tonneau Diamond Business Dress Wrist Watches Sapphire Crystal Tungsten Steel Waterproof Luminous"
            price={338}
            rating={7}
            image="https://m.media-amazon.com/images/I/71eBLcpYnuL._AC_UY741_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Azzaro Chrome Eau de Toilette - Fresh Mens Cologne - Citrus, Aquatic & Woody Summer Fragrance - Lasting Wear - Luxury Perfumes for Men"
            price={129}
            rating={6}
            image="https://m.media-amazon.com/images/I/61cmCN8kjOL._SX522_.jpg"
          />
          <Product
            id="23445930"
            title="Digital Alarm Clock,7 in LED Mirrored Clocks Large Display,with 2 USB Charger Ports,Auto Dim,Night Mode,Modern Desktop Electronic Clocks for Bedroom Home Office Decor - Gold"
            price={24}
            rating={7}
            image="https://m.media-amazon.com/images/I/61GyO70YPdL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="3254354345"
            title="Revlon ColorStay Pressed Powder, Longwearing Oil Free, Fragrance-Free, Noncomedogenic Face Makeup, Medium (840), 0.3 Oz"
            price={8}
            rating={7}
            image="https://m.media-amazon.com/images/I/41YRyI5OftL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="HP Z34c G3 34 Webcam WQHD Curved Screen LED LCD Monitor - 21:9 - Silver, Black"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61DIXrnKjQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home