'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#F5EEDC] shadow-md sticky top-0 z-50" style={{backgroundColor: '#F5EEDC'}}>
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/LogoForHeader.png"
              alt="Calvinist Parrot Ministries"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#mission" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>Our Mission</Link>
          <Link href="/#belief" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>What We Believe</Link>
          <Link href="/#tools" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>Our Tools</Link>
          <Link href="/#outreach" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>Global Outreach</Link>
          <Link href="/#nonprofit" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>Nonprofit</Link>
          <Link href="/#get-involved" className="font-medium text-[#004D4D] hover:text-[#004D70]" onClick={handleNavClick}>Get Involved</Link>
          
          {/* <Link href="/donate" className="button">Donate</Link> */}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-[#F5EEDC] py-4 border-t border-[#004D4D]/10">
          <div className="container flex flex-col space-y-4">
            <Link href="/#mission" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>Our Mission</Link>
            <Link href="/#belief" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>What We Believe</Link>
            <Link href="/#tools" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>Our Tools</Link>
            <Link href="/#outreach" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>Global Outreach</Link>
            <Link href="/#nonprofit" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>Nonprofit</Link>
            <Link href="/#get-involved" className="font-medium px-4 py-2 hover:bg-[#FFD166] text-[#004D4D] rounded" onClick={handleNavClick}>Get Involved</Link>
            {/* <Link href="/donate" className="button mx-4" onClick={handleNavClick}>Donate</Link> */}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
