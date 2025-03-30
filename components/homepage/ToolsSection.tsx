import React from 'react';
import Link from 'next/link';
import { Bot, BookOpen, HelpCircle, Check } from 'lucide-react';

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 md:py-24 bg-[#F5EEDC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#004D4D]">Digital Tools to Advance the Kingdom</h2>
          <div className="w-20 h-1 bg-warm-gold mx-auto mb-6"></div>
          <p className="text-xl font-serif italic text-[#004D70] max-w-3xl mx-auto">
            "No fees. No barriers. Just faithful Gospel tools—shared freely."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-driven Gospel Sharing",
              description: "Intelligent, conversational tools that present the Gospel clearly in response to common questions about faith and God.",
              features: ["Answers common objections", "Scripture-based responses", "Multilingual support"],
              link: "/documentation-parrot-chat",
              icon: <Bot size={32} color='#F5EEDC' />
            },
            {
              title: "Bible Study Resources",
              description: "Comprehensive tools for deep Scripture study, designed for personal growth and group settings.",
              features: ["Contextual study guides", "Historical background", "Discussion questions"],
              link: "#tools",
              icon: <BookOpen size={32} color='#F5EEDC' />
            },
            {
              title: "Theological Q&A Chatbot",
              description: "Instant answers to theological questions, with citations from Scripture and respected theological sources.",
              features: ["Biblically sound responses", "Citations from trusted sources", "Customizable for church use"],
              link: "/documentation-parrot-qa",
              icon: <HelpCircle size={32} color='#F5EEDC' />
            }
          ].map((tool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="p-6 pb-3 flex-grow">
                <div className="flex items-center justify-center rounded-full bg-[#004D4D] p-4 w-16 h-16 mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-[#004D4D]">{tool.title}</h3>
                <p className="mb-4 text-[#333333]">{tool.description}</p>
                <ul className="mb-4 space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-mint-green mr-2 mt-1" />
                      <span className="text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link href={tool.link} className="button w-full text-center bg-deep-teal hover:bg-deep-blue text-white font-medium">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://www.calvinistparrot.com/" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
            Try the Calvinist Parrot
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
