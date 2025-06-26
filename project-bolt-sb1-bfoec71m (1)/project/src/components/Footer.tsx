import React from 'react';
import { Heart, Flame, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t-2 border-orange-500/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
                <img 
                  src="/1000006179.jpg" 
                  alt="FART WARS Logo" 
                  className="relative h-12 w-auto rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 tracking-wide">
                  FART WARS
                </h3>
                <p className="text-gray-400 font-semibold">$FARTWARS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg font-semibold leading-relaxed">
              The ultimate meme token powering victory on the Solana blockchain. 
              Join the gas-powered revolution now live on Pump.fun!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/50 text-orange-400 px-4 py-2 rounded-full text-sm font-black tracking-wider">
                #FARTWARS
              </span>
              <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/50 text-yellow-400 px-4 py-2 rounded-full text-sm font-black tracking-wider">
                #SOLANA
              </span>
              <span className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/50 text-red-400 px-4 py-2 rounded-full text-sm font-black tracking-wider">
                #MEMETOKEN
              </span>
              <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/50 text-purple-400 px-4 py-2 rounded-full text-sm font-black tracking-wider">
                #PUMPFUN
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xl tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">Home</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">Tokenomics</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">Community</a></li>
              <li>
                <a 
                  href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-black text-lg"
                >
                  Buy on Pump.fun
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xl tracking-wide">RESOURCES</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">Audit Report</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">CoinGecko</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold text-lg">CoinMarketCap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg font-semibold">
            © 2024 FART WARS. All rights reserved. Built on 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black"> Solana</span> via 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-black"> Pump.fun</span>
          </p>
          <div className="flex items-center text-gray-400 text-lg mt-4 sm:mt-0 font-semibold">
            Made with <Heart className="h-5 w-5 text-red-400 mx-2 animate-pulse" /> for the community
            <Flame className="h-5 w-5 text-orange-400 ml-2 animate-pulse" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl blur opacity-50"></div>
            <div className="relative bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
              <p className="text-yellow-400 text-sm font-bold max-w-4xl mx-auto">
                ⚠️ <strong>Disclaimer:</strong> $FARTWARS is a meme token created for entertainment purposes. 
                Please do your own research before investing. Cryptocurrency investments carry risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};