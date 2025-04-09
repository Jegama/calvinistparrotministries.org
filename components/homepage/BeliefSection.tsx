import React from 'react';
import Link from 'next/link';
import { Check, Quote } from 'lucide-react';

const BeliefSection = () => {
  return (
    <section id="belief" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#004D4D]">What We Believe</h2>
            <p className="mb-4 text-lg text-[#333333]">
              We affirm the essential truths of historic Christianity, including:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "The Trinity",
                "The Character of God",
                "The Authority of Scripture",
                "The Deity and Humanity of Christ",
                "The Incarnation and Virgin Birth",
                "Salvation by Grace Alone Through Faith Alone",
                "The Atonement and Resurrection of Jesus",
                "The Return of Christ and Final Judgment"
              ].map((belief, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-warm-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#333333]">{belief}</span>
                </li>
              ))}
            </ul>
            <p className="mb-6 text-[#333333]">
              We uphold doctrinal integrity while working respectfully with churches that may hold differing views on secondary matters.
            </p>
            <Link href="/belief" className="inline-block px-6 py-3 bg-[#004D4D] text-white rounded hover:bg-[#003A3A] transition-colors">
              Read Our Full Doctrinal Statement
            </Link>
          </div>
          <div className="bg-soft-parchment p-8 rounded-lg shadow-lg">
            <blockquote className="text-[#004D4D]">
              <Quote className="h-12 w-12 text-warm-gold mb-4 opacity-50" />
              <p className="text-xl mb-6 font-serif italic leading-relaxed">
                We echo Scripture, not human opinion. Like a parrot, we repeat what our Master says—faithfully, clearly, and unashamedly.
              </p>
              <footer className="text-right">
                <cite className="font-medium">— Calvinist Parrot Ministries</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
