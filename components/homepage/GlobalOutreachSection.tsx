import React from 'react';
import Link from 'next/link';
import { Globe, Briefcase, Users } from 'lucide-react';

const GlobalOutreachSection = () => {
  return (
    <section id="outreach" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#004D4D]">Reaching the Nations</h2>
            <p className="mb-6 text-lg text-[#333333]">
              We are committed to spreading the Gospel across cultural and linguistic boundaries. Through strategic partnerships, we:
            </p>
            <ul className="space-y-6 mb-8">
              {[
                {
                  icon: Globe,
                  title: "Translation & Adaptation",
                  description: "Translate and adapt tools into major world languages including Spanish, Arabic, Mandarin, and more."
                },
                {
                  icon: Briefcase,
                  title: "Training & Equipment",
                  description: "Train international churches and ministries to use our digital tools effectively in their local contexts."
                },
                {
                  icon: Users,
                  title: "Global Partnerships",
                  description: "Partner with local churches and ministries to ensure our tools are culturally relevant and theologically sound."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-warm-gold rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#004D4D]">{item.title}</h3>
                    <p className="text-[#333333]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* <Link href="/outreach" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Learn About Our Global Work
            </Link> */}
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-deep-blue to-royal-purple rounded-lg p-1">
              <div className="bg-white rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-[#004D4D]">Our Global Reach</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "4+", label: "Languages" },
                      { value: "20+", label: "Countries" },
                      { value: "5", label: "Partner Churches" },
                      { value: "100%", label: "Free Access" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-cream rounded-lg p-4 shadow-sm">
                        <p className="text-3xl font-bold text-[#004D4D]">{stat.value}</p>
                        <p className="text-sm text-[#333333]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOutreachSection;
