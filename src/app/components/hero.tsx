import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* image */}
      <div className="flex justify-center items-center px-4">
        <Image
          src="/assests/hero.png"
          alt="shoes"
          width={1150}
          height={700}
          className="w-full max-w-[1150px] h-auto"
        />
      </div>

    </div>
  );
}
