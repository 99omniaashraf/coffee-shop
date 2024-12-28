import React from 'react';
import hero1 from "../assets/images/hero1.png";


function Hero() {
    return (
        <div>
            <div
                className="hero bg-base-200 min-h-screen"
                style={{
                    backgroundImage: `url(${hero1})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Hello there</h1>
                        <p className="py-6 text-white">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
