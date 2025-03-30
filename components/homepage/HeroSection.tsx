import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-deep-teal to-deep-blue text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              Free, Faithful, and Global: Sharing the Gospel through AI Innovation
            </h1>
            <p className="text-lg mb-8 text-black">
              Calvinist Parrot Ministries exists to glorify God by creating and freely distributing digital tools that proclaim the Gospel, strengthen the Church, and equip believers across the globe.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <Link href="/tools" className="button bg-warm-gold text-deep-teal hover:bg-soft-parchment font-medium">
                Explore Our Free Tools
              </Link>
              <Link href="/churches" className="button bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium">
                Customize for Your Church
              </Link>
            </div> */}
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-warm-gold/20 rounded-full blur-xl"></div>
              <Image
                src="/LogoWithTextSquare.png"
                alt="Calvinist Parrot Ministries"
                width={400}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
