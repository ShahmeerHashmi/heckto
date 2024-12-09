import React from 'react';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
  
  <nav className="bg-gray-800 w-[100%] p-4"> 
      <div className="container mx-auto h-[40px] flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">Heckto</a>
        <ul className="flex space-x-4"><li>
          <Link href="/">Home</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Product">Product</Link></li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
