import React from 'react';
import { Lightbulb, Church, Globe, BookOpen } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-[#F5EEDC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#004D4D]">Why We Exist</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <Lightbulb size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Evangelism through technology</h3>
            <p className="text-[#333333]">We develop AI-powered tools, mobile apps, and websites that share the Gospel with clarity and compassion.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <Church size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Equipping the Church</h3>
            <p className="text-[#333333]">We customize our tools for churches and ministries based on their doctrinal distinctives—always free of charge.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <Globe size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Global outreach</h3>
            <p className="text-[#333333]">We localize our resources for diverse communities around the world in languages like Spanish, Arabic, and many more.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
              <BookOpen size={32} color='#F5EEDC' />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#004D4D]">Education & Support</h3>
            <p className="text-[#333333]">We provide training, documentation, and one-on-one help to make sure churches and individuals can use our tools effectively.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl font-serif italic text-[#004D70]">
            "Biblically grounded. Digitally delivered. Always free."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
