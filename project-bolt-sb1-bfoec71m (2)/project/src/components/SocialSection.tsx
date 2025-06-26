import React from 'react';
import { Twitter, ExternalLink, Flame, Zap, Users, TrendingUp } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 blur-xl opacity-40"></div>
            <h2 className="relative text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mb-8 tracking-tighter">
              JOIN THE ARMY
            </h2>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold">
            Connect with our growing community of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> FART WARS warriors</span> on Twitter/X
          </p>
        </div>

        {/* Main Twitter/X Card - Centered and Larger */}
        <div className="flex justify-center mb-16">
          <div className="relative group max-w-2xl w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-12 border-2 border-orange-500/50 hover:border-orange-400 transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl opacity-60 group-hover:animate-pulse"></div>
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-2xl">
                    <Twitter className="h-12 w-12 text-black" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-black text-white mb-6 tracking-wide">FOLLOW US ON X</h3>
                <p className="text-gray-400 mb-10 text-xl font-semibold">Join the gas-powered revolution and get the latest updates!</p>
                
                <div className="relative group/button">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-50 group-hover/button:opacity-80 transition duration-300"></div>
                  <a 
                    href="https://x.com/Fart_WarsSol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-4 bg-gradient-to-r from-orange-400 to-orange-600 text-black px-12 py-5 rounded-full font-black text-xl hover:from-orange-300 hover:to-orange-500 transition-all transform hover:scale-110 shadow-xl tracking-wider"
                  >
                    <Twitter className="h-6 w-6" />
                    FOLLOW @FART_WARSSOL
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-black text-white mb-3">LATEST UPDATES</h4>
                <p className="text-gray-400 font-semibold">Get real-time news about launches, partnerships, and epic battles!</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-red-500/50 hover:border-red-400 transition-all">
              <div className="text-center">
                <Users className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-2xl font-black text-white mb-3">COMMUNITY POWER</h4>
                <p className="text-gray-400 font-semibold">Connect with fellow warriors and share your battle stories!</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/50 hover:border-purple-400 transition-all">
              <div className="text-center">
                <Flame className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-black text-white mb-3">EXCLUSIVE CONTENT</h4>
                <p className="text-gray-400 font-semibold">Behind-the-scenes content and exclusive memes for our army!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gradient-to-r from-orange-400/10 via-yellow-400/10 to-red-400/10 rounded-3xl p-12 border-2 border-orange-500/50">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Flame className="h-8 w-8 text-orange-400 animate-pulse" />
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-wide">READY TO JOIN THE LEGEND?</h3>
                <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-gray-300 mb-10 text-2xl font-bold max-w-3xl mx-auto">
                Follow us on X and be part of the most epic meme token revolution now live on Pump.fun!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="relative group/cta1">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-50 group-hover/cta1:opacity-80 transition duration-300"></div>
                  <a 
                    href="https://x.com/Fart_WarsSol" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-black px-12 py-5 rounded-full text-xl font-black hover:from-orange-300 hover:to-orange-500 transition-all transform hover:scale-110 shadow-2xl inline-flex items-center gap-3 tracking-wider"
                  >
                    <Twitter className="h-6 w-6" />
                    FOLLOW ON X
                  </a>
                </div>
                <div className="relative group/cta2">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur opacity-50 group-hover/cta2:opacity-80 transition duration-300"></div>
                  <a 
                    href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative bg-gradient-to-r from-yellow-400 to-red-400 text-black px-12 py-5 rounded-full text-xl font-black hover:from-yellow-300 hover:to-red-300 transition-all transform hover:scale-110 shadow-2xl inline-flex items-center gap-3 tracking-wider"
                  >
                    🔥 BUY ON PUMP.FUN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};