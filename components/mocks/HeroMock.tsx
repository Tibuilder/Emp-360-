import React from 'react';
import { Check, Star } from 'lucide-react';

export const HeroMock = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12">
      {/* Main Container Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lifted border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        
        {/* Left: Match List */}
        <div className="flex-1 w-full space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-100 p-1 rounded-md">
              <span className="text-primary text-xs font-bold">⚡</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">Match With Top Recruiters Instantly</span>
          </div>
          
          <p className="text-xs text-gray-500 mb-4">Connect with recruiters who specialize in your role and industry.</p>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[60px]">
                <div className="relative">
                  <img 
                    src={`https://picsum.photos/seed/recruiter${i}/100`} 
                    alt="Recruiter" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-[10px] font-medium text-gray-700 text-center">Michael D.</div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 text-center">
            <span className="text-primary text-xs font-medium cursor-pointer hover:underline">Request Introduction</span>
          </div>
        </div>

        {/* Middle: Stats */}
        <div className="flex flex-row md:flex-col gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-50 w-32 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
            <span className="text-2xl font-bold text-gray-900">75%</span>
            <span className="text-[10px] text-gray-500 text-center leading-tight">Organizations believe branding improves placement</span>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-50 w-32 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
            <span className="text-2xl font-bold text-gray-900">90%</span>
            <span className="text-[10px] text-gray-500 text-center leading-tight">Hiring managers prefer data-driven recruitment</span>
          </div>
        </div>

        {/* Right: Mock Profile Card */}
        <div className="relative w-full md:w-48 bg-gray-50 rounded-2xl overflow-hidden shadow-md group">
            <img src="https://picsum.photos/seed/businessman/400/500" className="w-full h-48 object-cover" alt="Profile" />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                <span className="text-xs font-bold">3x</span>
                <span className="text-[8px] text-gray-600 uppercase">Faster</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                <p className="text-white text-xs font-bold">Filled "Marketing Lead"</p>
                <p className="text-gray-300 text-[10px]">in 12 days</p>
            </div>
        </div>

      </div>
    </div>
  );
};