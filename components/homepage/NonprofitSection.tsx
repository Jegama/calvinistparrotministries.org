import React from 'react';
import Link from 'next/link';
import { HandHeart, BookOpen, Gift } from 'lucide-react';

const MinistrySection = () => {
  return (
    <section id='nonprofit' className="py-16 md:py-24 bg-[#F5EEDC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#004D4D]">Freely Received, Freely Given</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <HandHeart size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Open-handed</h3>
            <p className="text-[#333333]">We freely share our resources, driven by a desire to reflect the generosity we've received from God.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <BookOpen size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Gospel-centered</h3>
            <p className="text-[#333333]">All we do is rooted firmly in Scripture, dedicated to spreading the Gospel without any barriers.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <Gift size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Freely Given</h3>
            <p className="text-[#333333]">In obedience to Matthew 10:8, we offer all our tools and services without charge, trusting in God's provision through the generosity of supporters.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Link href="/donate" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Support The Ministry
            </Link> */}
            <Link href="https://copy.church/explain/importance/" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Why is this important?
            </Link>
            <Link href="https://sellingjesus.org/free" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Freely Given Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistrySection;