import React from 'react';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section id='get-involved' className="py-16 md:py-20 bg-gradient-to-r from-deep-teal to-deep-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Join Us in This Gospel Work</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
          Whether through prayer, partnership, or financial support, you can help us share the Gospel freely across the digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* <Link href="/donate" className="button bg-warm-gold text-deep-teal hover:bg-soft-parchment text-lg px-8 font-medium">
            Donate Today
          </Link> */}
          <Link href="/contact" className="button bg-royal-purple hover:bg-opacity-90 text-white text-lg px-8 font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
