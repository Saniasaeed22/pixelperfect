import React from 'react';

function Contact() {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="bg-yellow-600 p-6 sm:p-12 md:p-24 text-white text-center">
          {/* Header */}
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h1>
          
          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Type your email below and be the young wild generation
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              className="font-thin px-4 py-2 rounded-md text-black w-full sm:w-auto md:w-1/3"
              type="text"
              placeholder="Add your email here"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
