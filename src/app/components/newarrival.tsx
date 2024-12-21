import React from 'react';
import Image from 'next/image';

function Newarrival() {
  return (
    <div id="fashion" className="px-4 sm:px-8">
      {/* Header */}
      <div>
        <h1 className="font-extrabold text-2xl sm:text-4xl text-center p-7">
          NEW ARRIVALS
        </h1>
      </div>

      {/* New Arrivals Grid */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-8 m-7">
        {/* Arrival 1 */}
        <div className="max-w-xs text-center">
          <Image
            className="rounded-md"
            src="/arrival-1.jpg"
            alt="Elegant silk dress with coat"
            width={300}
            height={500}
          />
          <span className="font-mono text-gray-500 block mt-2">
            Elegant silk dress with coat
          </span>
        </div>

        {/* Arrival 2 */}
        <div className="max-w-xs text-center">
          <Image
            className="rounded-md"
            src="/arrival-02.jpg"
            alt="White pants with warm coat"
            width={300}
            height={500}
          />
          <span className="font-mono text-gray-500 block mt-2">
            White pants with warm coat
          </span>
        </div>

        {/* Arrival 3 */}
        <div className="max-w-xs text-center">
          <Image
            className="rounded-md"
            src="/arrival-01.jpg"
            alt="Beautiful skirt with coat"
            width={300}
            height={500}
          />
          <span className="font-mono text-gray-500 block mt-2">
            Beautiful skirt with coat
          </span>
        </div>
      </div>
    </div>
  );
}

export default Newarrival;
