import React from 'react';
import nenu from '../assets/images/menu.png';
import espressoImage from '../assets/images/espresso.png';
import latteImage from '../assets/images/latte.png';
import cappuccinoImage from '../assets/images/cappuccino.png';
import americanoImage from '../assets/images/americano.png';
import mochaImage from '../assets/images/mocha.png';
import macchiatoImage from '../assets/images/macchiato.png';

function Menu() {
  const coffeeDrinks = [
    { name: 'Espresso', description: 'Strong black coffee made by forcing steam through ground coffee beans.', price: '$3.00', image: espressoImage },
    { name: 'Latte', description: 'Espresso mixed with steamed milk and topped with foam.', price: '$4.00', image: latteImage },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of foam.', price: '$4.50', image: cappuccinoImage },
    { name: 'Americano', description: 'Espresso diluted with hot water for a lighter taste.', price: '$3.50', image: americanoImage },
    { name: 'Mocha', description: 'Espresso with steamed milk and chocolate syrup.', price: '$5.00', image: mochaImage },
    { name: 'Macchiato', description: 'Espresso with a small amount of foamed milk on top.', price: '$3.50', image: macchiatoImage },
  ];

  return (
    <div
      className="menu container mx-auto p-6 text-white"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${nenu})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-6  bg-opacity-50 p-3 rounded-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Our Coffee Menu
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {coffeeDrinks.map((drink, index) => (
          <div
            key={index}
            className="coffee-item flex flex-col items-center justify-center text-white border border-black p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', transition: 'all 0.3s ease-in-out' }}
          >
            <img
              src={drink.image}
              alt={drink.name}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{drink.name}</h2>
            <p className="text-lg font-bold">{drink.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
