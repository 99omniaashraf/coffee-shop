import React from 'react';
import about from "../assets/images/about.png";
import about1 from "../assets/images/about1.png";

function About() {
  return (
    <div
      className="about-us container mx-auto p-12 bg-black text-white"
      style={{
        backgroundImage: `url(${about1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // الخلفية تأخذ الشاشة كاملة
      }}
    >
      <h1
        className="text-5xl font-extrabold text-center mb-8"
        style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)' }}
      >
        About Us
      </h1>

      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={about}
            alt="Coffee Craze"
            className="w-full max-w-md h-auto rounded-lg shadow-2xl mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-xl text-gray-300 leading-relaxed">
          <p className="mb-8">
            At <strong>Coffee Craze</strong>, we don't just serve you a cup of coffee; we offer you an exceptional experience that celebrates every moment. We believe that coffee is not just a drink; it's a moment of relaxation, inspiration, and comfort that starts the moment you take your first sip.
          </p>
          <p className="mb-8">
            Coffee Craze was founded with the aim of providing fresh, carefully brewed coffee using the finest beans from the best farms around the world. Whether you're a fan of black coffee, lattes, cappuccinos, or any other drink, we're here to give you everything you dream of and more.
          </p>
          <p>
            We are committed to providing a unique experience every time you visit our cafe. From the cozy and welcoming atmosphere to our dedicated team, we ensure that every guest feels at home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
