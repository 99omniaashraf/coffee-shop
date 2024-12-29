import React from 'react';
import about from "../assets/images/about.png";
import about1 from "../assets/images/about1.png";

function About() {
  return (
    <div className="about-us container mx-auto p-6 bg-black text-white" style={{ backgroundImage: `url(${about1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold text-center mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        About Us
      </h1>

      <div className="flex flex-wrap items-center justify-between">
        
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={about} 
            alt="Coffee Craze"
            className="w-full max-w-xs h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-lg text-gray-300">
          <p className="mb-6 leading-relaxed">
            At <strong>Coffee Craze</strong>, we don't just serve you a cup of coffee, we offer you an exceptional experience that celebrates every moment. We believe that coffee is not just a drink; it's a moment of relaxation, inspiration, and comfort that starts the moment you take your first sip.
          </p>
          <p className="mb-6 leading-relaxed">
            Coffee Craze was founded with the aim of providing fresh, carefully brewed coffee using the finest beans from the best farms around the world. Whether you're a fan of black coffee, lattes, cappuccinos, or any other drink, we're here to give you everything you dream of and more.
          </p>
          <p className="mb-6 leading-relaxed">
            We are committed to providing a unique experience every time you visit our cafe. From the cozy and welcoming atmosphere to our dedicated team, we ensure that every guest feels at home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
