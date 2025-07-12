import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to [SARS RESTAURANT], where taste meets tradition! We’re a passionate team dedicated to bringing you the freshest ingredients, authentic flavors, and a dining experience that feels like home. Established with love in [2006], our restaurant is more than just a place to eat—it’s a celebration of food, culture, and community.
At [SARS RESTAURANT], we believe in crafting every dish with care, blending traditional recipes with a modern twist. Whether it’s our signature [mention a special dish, e.g., Butter Chicken or Veggie Delight Pizza], or our warm, welcoming ambiance, we’re here to create moments that linger long after the last bite.
Our mission is simple: to serve delicious food that brings people together. From sourcing local ingredients to ensuring every guest leaves with a smile, we pour our heart into everything we do. Come, join us for a meal, and become a part of our story!

            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;