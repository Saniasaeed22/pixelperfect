import React from 'react';

function Sale() {
  return (
    <div>
      <section>
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/sale01.jpg')" }}
          ></div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Text container on the right side */}
          <div className="relative flex items-center justify-end h-full p-4 sm:p-8 md:p-16">
            <div className="bg-white bg-opacity-75 p-4 sm:p-6 md:p-10 rounded-md shadow-lg max-w-md md:max-w-lg lg:max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                PAYDAY SALE NOW
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl font-mono mb-2">
                Spend minimal $100 get 30% off voucher code of your next purchase
              </div>
              <div className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">
                1 JUNE - 10 JUNE
              </div>
              <span className="block font-thin text-sm mb-4">
                *Terms & Conditions Apply
              </span>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 ">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sale;
