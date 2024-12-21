import React from 'react';
import Image from 'next/image';

function Youngsfav() {
  return (
    <div>
      <section id="Favourite" className="p-4 sm:p-7 text-center">
        {/* Section Header */}
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6">
          YOUNG'S FAVOURITE
        </h1>

        {/* Content Container */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center">
          {/* Item 1 */}
          <div className="max-w-xs">
            <Image
              className="rounded-md"
              width={400}
              height={200}
              src="/young1.jpg"
              alt="Instagram trending"
            />
            <p className="font-thin text-gray-400 mt-2">Instagram trending</p>
          </div>    
          
          {/* Item 2 */}
          <div className="max-w-xs">
            <Image
              className="rounded-md"
              width={400}
              height={400}
              src="/Rectangle 50.png"
              alt="Facebook trending"
            />
            <p className="font-thin text-gray-400 mt-2">Instagram trending</p>
          </div>

          {/* Item 3 */}
          <div className="max-w-xs">
            <Image
              className="rounded-md"
              width={400}
              height={200}
              src="/young2.jpg"
              alt="All under $40"
            />
            <p className="font-thin text-gray-400 mt-2">All under $40</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Youngsfav;
