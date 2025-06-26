import React from 'react';
import { PieChart, Lock, Zap, Shield } from 'lucide-react';

export const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 blur-xl opacity-30"></div>
            <h2 className="relative text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mb-8 tracking-tighter">
              TOKENOMICS
            </h2>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold">
            Simple and fair distribution through Pump.fun - 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> no dev tokens, no team allocation</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Tokenomics Chart */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-yellow-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-full border-4 border-orange-500/50 p-12 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">1B</div>
                  <div className="text-orange-400 font-black text-2xl tracking-wider">$FARTWARS</div>
                  <div className="text-gray-400 text-lg font-semibold tracking-wide">TOTAL SUPPLY</div>
                  <div className="mt-6 relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
                    <div className="relative bg-purple-500/20 rounded-xl px-6 py-3 border border-purple-400/50">
                      <div className="text-purple-400 text-sm font-black tracking-wider">PUMP.FUN LAUNCH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-8">
            {/* Fair Launch Card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-orange-500/50 hover:border-orange-400 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-50"></div>
                      <div className="relative p-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600">
                        <PieChart className="h-8 w-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-wide">FAIR LAUNCH</h3>
                  </div>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out animate-pulse"
                    style={{ width: '100%' }}
                  ></div>
                </div>
                <p className="text-gray-300 text-lg font-semibold">All tokens available for public trading on Pump.fun</p>
              </div>
            </div>

            {/* Liquidity Pool Card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-50"></div>
                      <div className="relative p-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600">
                        <Lock className="h-8 w-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-wide">LIQUIDITY POOL</h3>
                  </div>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">AUTO</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-1000 ease-out animate-pulse"
                    style={{ width: '30%' }}
                  ></div>
                </div>
                <p className="text-gray-300 text-lg font-semibold">Automatically managed by Pump.fun bonding curve</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border-2 border-purple-500/50">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <h4 className="text-white font-black text-2xl tracking-wide">🚀 PUMP.FUN BENEFITS</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-semibold">No dev tokens or team allocation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-semibold">Fair launch for everyone</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-semibold">Automatic liquidity provision</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-semibold">Built-in anti-rug protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};