import React from 'react';
import { Rocket, TrendingUp, Flame, Wind } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Animated background elements matching logo colors */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-orange-400/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-yellow-400/15 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-red-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* MASSIVE BANNER-STYLE LOGO SECTION */}
        <div className="mb-16">
          {/* Logo Banner Container - MUCH BIGGER */}
          <div className="relative group mb-12">
            {/* Outer glow effect - Enhanced */}
            <div className="absolute -inset-16 bg-gradient-to-r from-orange-400/40 via-yellow-400/50 via-red-400/40 to-purple-400/40 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
            
            {/* Banner background - Larger */}
            <div className="relative bg-gradient-to-r from-black/90 via-gray-900/95 to-black/90 backdrop-blur-2xl rounded-3xl border-4 border-orange-400/60 group-hover:border-yellow-400/80 transition-all duration-500 shadow-2xl">
              {/* Inner glow - Enhanced */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-yellow-400/20 to-red-400/15 rounded-3xl"></div>
              
              {/* Logo content - MUCH BIGGER */}
              <div className="relative p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center gap-8">
                {/* Logo Image - SIGNIFICANTLY LARGER */}
                <div className="relative group/logo">
                  <div className="absolute -inset-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 rounded-3xl blur-3xl opacity-60 group-hover/logo:opacity-90 transition duration-500"></div>
                  <img 
                    src="/1000006179.jpg" 
                    alt="FART WARS - The Ultimate Gas-Powered Meme Token Revolution" 
                    className="relative h-64 md:h-80 lg:h-96 w-auto rounded-3xl shadow-2xl transform group-hover/logo:scale-110 transition-all duration-500 border-4 border-orange-400/70 group-hover/logo:border-yellow-400"
                  />
                  {/* Floating Gas Effects around logo - More prominent */}
                  <div className="absolute -top-6 -right-6 animate-bounce">
                    <Wind className="h-10 w-10 text-yellow-400 opacity-80" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 animate-bounce delay-500">
                    <Wind className="h-8 w-8 text-orange-400 opacity-60" />
                  </div>
                  <div className="absolute top-1/2 -right-10 animate-bounce delay-1000">
                    <Wind className="h-6 w-6 text-red-400 opacity-70" />
                  </div>
                  <div className="absolute top-1/4 -left-8 animate-bounce delay-700">
                    <Wind className="h-7 w-7 text-purple-400 opacity-50" />
                  </div>
                  <div className="absolute bottom-1/4 -right-6 animate-bounce delay-300">
                    <Wind className="h-5 w-5 text-pink-400 opacity-60" />
                  </div>
                </div>
                
                {/* Banner Text - Larger */}
                <div className="text-center">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mb-4 tracking-tighter leading-none">
                    FART WARS
                  </h1>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-bold tracking-wide">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">$FARTWARS</span>
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-semibold mt-4 max-w-2xl mx-auto">
                    The Gas That Powers Victory! 💨⚔️✨
                  </p>
                </div>
              </div>
              
              {/* Banner decorative elements - Larger */}
              <div className="absolute top-6 left-6">
                <Flame className="h-10 w-10 text-orange-400 animate-pulse" />
              </div>
              <div className="absolute top-6 right-6">
                <Flame className="h-10 w-10 text-red-400 animate-pulse delay-500" />
              </div>
              <div className="absolute bottom-6 left-6">
                <Flame className="h-8 w-8 text-yellow-400 animate-pulse delay-1000" />
              </div>
              <div className="absolute bottom-6 right-6">
                <Flame className="h-8 w-8 text-purple-400 animate-pulse delay-700" />
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-400"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Title Below Banner */}
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 via-red-400 to-purple-400 mb-6 tracking-tighter leading-none">
              THE LEGEND BEGINS
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-red-400/20 blur-xl rounded-full opacity-50"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 max-w-4xl mx-auto">
            Join the legendary gas-powered revolution where 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> humor meets epic battles</span> 
            in the ultimate meme token adventure! 
            <span className="inline-block ml-2 animate-bounce">💨⚔️✨</span>
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 rounded-full px-8 py-4">
                <Rocket className="h-6 w-6 text-purple-400 animate-pulse" />
                <span className="text-purple-300 font-black text-xl tracking-wider">NOW LIVE ON PUMP.FUN</span>
                <Flame className="h-6 w-6 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Card with Story Elements */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-orange-500/50 hover:border-orange-400 transition-all transform group-hover:scale-105">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">1 BILLION</div>
              <div className="text-gray-300 font-bold text-lg tracking-wide">LEGENDARY TOKENS</div>
              <div className="text-sm text-gray-400 font-semibold mt-2">Ready for Epic Battles!</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <a 
              href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-12 py-5 rounded-full text-2xl font-black hover:from-orange-300 hover:to-yellow-400 transition-all transform hover:scale-110 shadow-2xl inline-flex items-center gap-3 tracking-wider"
            >
              💨 BUY $FARTWARS NOW! 🚀
            </a>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <a 
              href={`https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump`}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative border-4 border-red-400 text-red-400 px-12 py-5 rounded-full text-2xl font-black hover:bg-red-400 hover:text-black transition-all transform hover:scale-110 tracking-wider"
            >
              ⚔️ VIEW BATTLE CHART
            </a>
          </div>
        </div>

        {/* Story Teaser */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
          <div className="relative bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl p-6 border border-purple-500/30">
            <p className="text-gray-300 text-lg font-bold">
              🏰 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black">DISCOVER THE LEGEND:</span> 
              From humble bathroom beginnings to crypto stardom - learn how one warrior's unique power sparked the ultimate meme token revolution!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};