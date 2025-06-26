import React from 'react';
import { Zap, Crown, Rocket, Trophy, Gamepad2, Wind, Flame, Star } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900/30 via-black to-orange-900/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Logo Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-12">
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400 via-yellow-400 via-red-400 to-purple-400 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <img 
                src="/1000006179.jpg" 
                alt="FART WARS - The Ultimate Gas-Powered Battle Arena" 
                className="relative h-48 w-auto mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-orange-400/70 group-hover:border-yellow-400"
              />
            </div>
          </div>
          
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mb-6 tracking-tighter leading-none">
              THE LEGEND OF FART WARS
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-red-400/20 blur-xl rounded-full opacity-50"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-200 font-bold mb-8 tracking-wide max-w-4xl mx-auto">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">legendary gas meets epic battles</span> in the ultimate meme token adventure! 
            <span className="inline-block ml-2 animate-bounce">💨⚔️</span>
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-16">
          {/* Chapter 1 */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-purple-500/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50"></div>
                        <div className="relative p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                          <Crown className="h-8 w-8 text-black" />
                        </div>
                      </div>
                      <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CHAPTER 1: THE AWAKENING</h3>
                    </div>
                    <p className="text-gray-300 text-lg font-semibold leading-relaxed">
                      In the mystical realm of the Solana blockchain, a legendary warrior emerged from the depths of the digital bathroom. 
                      Armed with the power of <span className="text-yellow-400 font-black">EPIC GAS</span> and an unbreakable spirit, 
                      our hero discovered that their unique... <em>talents</em>... could power entire battles! 💨✨
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border-2 border-purple-400/50">
                    <div className="text-center">
                      <Wind className="h-24 w-24 text-purple-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-purple-300 font-black text-xl">THE POWER AWAKENS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-orange-500/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur opacity-50"></div>
                        <div className="relative p-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
                          <Gamepad2 className="h-8 w-8 text-black" />
                        </div>
                      </div>
                      <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">CHAPTER 2: THE ARENA</h3>
                    </div>
                    <p className="text-gray-300 text-lg font-semibold leading-relaxed">
                      Word spread across the metaverse about this <span className="text-orange-400 font-black">GAS-POWERED CHAMPION</span>! 
                      Warriors from every corner of the blockchain gathered to witness the most hilarious battles ever seen. 
                      The FART WARS arena was born, where <span className="text-yellow-400 font-black">laughter meets victory</span>! 🏟️⚡
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border-2 border-orange-400/50">
                    <div className="text-center">
                      <Trophy className="h-24 w-24 text-orange-400 mx-auto mb-4 animate-bounce" />
                      <p className="text-orange-300 font-black text-xl">THE ARENA RISES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-red-500/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur opacity-50"></div>
                        <div className="relative p-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500">
                          <Rocket className="h-8 w-8 text-black" />
                        </div>
                      </div>
                      <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">CHAPTER 3: THE REVOLUTION</h3>
                    </div>
                    <p className="text-gray-300 text-lg font-semibold leading-relaxed">
                      The legend grew beyond imagination! Our hero realized that this power could unite the entire crypto community in 
                      <span className="text-red-400 font-black"> JOYFUL CHAOS</span>. Thus, the $FARTWARS token was forged on Pump.fun, 
                      giving everyone the chance to join the <span className="text-pink-400 font-black">GAS-POWERED REVOLUTION</span>! 🚀💎
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-8 border-2 border-red-400/50">
                    <div className="text-center">
                      <Star className="h-24 w-24 text-red-400 mx-auto mb-4 animate-spin" />
                      <p className="text-red-300 font-black text-xl">THE REVOLUTION BEGINS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Showcase Section */}
        <div className="mt-24 text-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 via-red-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-orange-400/10 via-yellow-400/10 to-red-400/10 rounded-3xl p-12 border-2 border-orange-500/50">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                  <img 
                    src="/1000006179.jpg" 
                    alt="FART WARS - Join the Gas-Powered Revolution" 
                    className="relative h-32 w-auto mx-auto rounded-2xl shadow-2xl border-2 border-yellow-400/70"
                  />
                </div>
              </div>
              
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mb-6 tracking-wide">
                JOIN THE FART WARS LEGEND!
              </h3>
              
              <p className="text-gray-300 text-xl font-bold max-w-3xl mx-auto mb-8 leading-relaxed">
                Every holder becomes part of this epic tale! Together, we'll build the most 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> entertaining and gas-powered community</span> 
                in the entire crypto universe! 🌟💨
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="relative group/card">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl blur opacity-50 group-hover/card:opacity-70 transition duration-300"></div>
                  <div className="relative bg-black/80 rounded-xl p-6 border border-orange-400/50">
                    <Flame className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                    <h4 className="text-orange-400 font-black text-lg mb-2">LEGENDARY STATUS</h4>
                    <p className="text-gray-400 text-sm font-semibold">Become part of crypto folklore</p>
                  </div>
                </div>
                
                <div className="relative group/card">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur opacity-50 group-hover/card:opacity-70 transition duration-300"></div>
                  <div className="relative bg-black/80 rounded-xl p-6 border border-yellow-400/50">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-yellow-400 font-black text-lg mb-2">EPIC COMMUNITY</h4>
                    <p className="text-gray-400 text-sm font-semibold">Join the gas-powered army</p>
                  </div>
                </div>
                
                <div className="relative group/card">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-xl blur opacity-50 group-hover/card:opacity-70 transition duration-300"></div>
                  <div className="relative bg-black/80 rounded-xl p-6 border border-red-400/50">
                    <Trophy className="h-8 w-8 text-red-400 mx-auto mb-3" />
                    <h4 className="text-red-400 font-black text-lg mb-2">VICTORY AWAITS</h4>
                    <p className="text-gray-400 text-sm font-semibold">Power through with humor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
            <a 
              href="https://pump.fun/coin/AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-16 py-6 rounded-full text-2xl font-black hover:from-orange-300 hover:to-yellow-400 transition-all transform hover:scale-110 shadow-2xl inline-flex items-center gap-4 tracking-wider"
            >
              💨 BUY $FARTWARS NOW! 🚀
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};