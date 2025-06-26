import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Clock, Rocket, Flame } from 'lucide-react';

export const ContractSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const isLive = true; // Now live!
  const contractAddress = "AWsGygWoc4Cpq37vmsS6eEPxGBEYKvcUAbHh682Xpump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-900/30 via-red-900/30 to-yellow-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 blur-xl opacity-40"></div>
          <h2 className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 tracking-tighter">
            LIVE ON PUMP.FUN
          </h2>
        </div>
        
        {/* Live contract section */}
        <div className="relative group mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-500/50 hover:border-orange-400 transition-all">
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full border-4 border-green-400">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-wide">🚀 NOW LIVE!</h3>
                <p className="text-gray-400 text-lg mb-6 font-semibold">Contract Address on Pump.fun</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <p className="text-white font-mono text-lg md:text-xl break-all mb-4">{contractAddress}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    {copied ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
                    {copied ? 'COPIED!' : 'COPY ADDRESS'}
                  </button>
                  
                  <a 
                    href={`https://pump.fun/coin/${contractAddress}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105"
                  >
                    <ExternalLink className="h-6 w-6" />
                    VIEW ON PUMP.FUN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/50">
              <h3 className="text-purple-400 font-black text-2xl mb-3 tracking-wide">PLATFORM</h3>
              <p className="text-white text-xl font-bold">Pump.fun</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-yellow-500/50">
              <h3 className="text-yellow-400 font-black text-2xl mb-3 tracking-wide">NETWORK</h3>
              <p className="text-white text-xl font-bold">Solana</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-red-500/50">
              <h3 className="text-red-400 font-black text-2xl mb-3 tracking-wide">SYMBOL</h3>
              <p className="text-white text-xl font-bold">$FARTWARS</p>
            </div>
          </div>
        </div>

        <div className="mt-12 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
          <div className="relative bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl p-8 border-2 border-green-500/30">
            <p className="text-gray-300 text-lg font-semibold">
              🎉 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-black">SUCCESSFULLY LAUNCHED:</span> $FARTWARS is now live and trading on Pump.fun! Join the gas-powered revolution!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};