import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300 animate-pulse"></div>
              <img 
                src="/1000006179.jpg" 
                alt="FART WARS - The Ultimate Gas-Powered Meme Token" 
                className="relative h-14 w-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
              />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400">
                  FART WARS
                </span>
              </h1>
              <p className="text-xs text-gray-400 font-semibold tracking-wider">The Gas-Powered Legend</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide">HOME</a>
            <a href="#story" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide">LEGEND</a>
            <a href="#tokenomics" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide">TOKENOMICS</a>
            <a href="#community" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide">COMMUNITY</a>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <a 
                href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-8 py-3 rounded-full font-black text-sm tracking-wider hover:from-orange-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              >
                💨 BUY NOW!
              </a>
            </div>
          </nav>

          <button 
            className="md:hidden text-white hover:text-orange-400 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20">
          <div className="px-6 py-6 space-y-6">
            <a href="#home" className="block text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide text-lg">HOME</a>
            <a href="#story" className="block text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide text-lg">LEGEND</a>
            <a href="#tokenomics" className="block text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide text-lg">TOKENOMICS</a>
            <a href="#community" className="block text-gray-300 hover:text-orange-400 transition-colors font-semibold tracking-wide text-lg">COMMUNITY</a>
            <a 
              href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-8 py-4 rounded-full font-black text-center tracking-wider hover:from-orange-300 hover:to-yellow-400 transition-all"
            >
              💨 BUY NOW!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};