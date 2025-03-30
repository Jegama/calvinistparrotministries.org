import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F5EEDC] text-[#333333]" style={{backgroundColor: '#F5EEDC'}}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/LogoWithTextSquare.png"
              alt="Calvinist Parrot Ministries"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-sm">
              Faithful to the Gospel. Freely available to the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#004D4D] text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/#mission" className="text-[#333333] hover:text-[#004D70]">Our Mission</Link></li>
              <li><Link href="/belief" className="text-[#333333] hover:text-[#004D70]">What We Believe</Link></li>
              {/* <li><Link href="/governance" className="text-[#333333] hover:text-[#004D70]">Governance</Link></li> */}
              {/* <li><Link href="/financials" className="text-[#333333] hover:text-[#004D70]">Financial Transparency</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#004D4D] text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/#tools" className="text-[#333333] hover:text-[#004D70]">Our Tools</Link></li>
              {/* <li><Link href="/churches" className="text-[#333333] hover:text-[#004D70]">For Churches</Link></li> */}
              <li><Link href="/#outreach" className="text-[#333333] hover:text-[#004D70]">Global Outreach</Link></li>
              {/* <li><Link href="/blog" className="text-[#333333] hover:text-[#004D70]">Blog</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#004D4D] text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-[#333333] hover:text-[#004D70]">Contact Us</Link></li>
              {/* <li><Link href="/donate" className="text-[#333333] hover:text-[#004D70]">Support Our Work</Link></li> */}
              {/* <li><Link href="/newsletter" className="text-[#333333] hover:text-[#004D70]">Newsletter</Link></li> */}
              <li>
                <div className="flex space-x-4 mt-2">
                  {/* <Link href="https://x.com" className="text-[#004D70] hover:text-[#5D4777]">
                    <span className="sr-only">X</span>
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="https://facebook.com" className="text-[#004D70] hover:text-[#5D4777]">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="https://instagram.com" className="text-[#004D70] hover:text-[#5D4777]">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#004D4D]/20">
          <p className="text-center text-sm text-[#333333]">
            &copy; {new Date().getFullYear()} Calvinist Parrot Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
