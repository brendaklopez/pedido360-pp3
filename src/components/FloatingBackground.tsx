'use client';
import React from 'react';
import Image from 'next/image';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Imagen 1 */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 opacity-50 animate-float-1">
          <Image
            src="/images/floating-1.png"
            alt="Floating decoration 1"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Imagen 2 */}
        <div className="absolute top-[20%] right-[10%] w-40 h-40 opacity-50 animate-float-2">
          <Image
            src="/images/floating-2.png"
            alt="Floating decoration 2"
            width={160}
            height={160}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Imagen 3 */}
        <div className="absolute bottom-[15%] left-[15%] w-36 h-36 opacity-50 animate-float-3">
          <Image
            src="/images/floating-3.png"
            alt="Floating decoration 3"
            width={144}
            height={144}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Imagen 4 */}
        <div className="absolute bottom-[25%] right-[20%] w-44 h-44 opacity-50 animate-float-4">
          <Image
            src="/images/floating-4.png"
            alt="Floating decoration 4"
            width={176}
            height={176}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Imagen 5 */}
        <div className="absolute top-[40%] left-[30%] w-28 h-28 opacity-50 animate-float-5">
          <Image
            src="/images/floating-5.png"
            alt="Floating decoration 5"
            width={112}
            height={112}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Imagen 6 */}
        <div className="absolute top-[60%] right-[25%] w-32 h-32 opacity-50 animate-float-6">
          <Image
            src="/images/floating-6.png"
            alt="Floating decoration 6"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingBackground; 