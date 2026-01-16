import React from 'react';
import { MoreHorizontal, Bell, Zap } from 'lucide-react';

export const DashboardMock = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-4 w-full max-w-sm mx-auto shadow-2xl border border-white/10 text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
        <span className="font-semibold text-sm">Your Dashboard</span>
        <div className="flex gap-2 text-gray-400">
           <Bell size={16} />
        </div>
      </div>

      {/* Main Stat */}
      <div className="bg-white text-gray-900 rounded-xl p-4 mb-4 relative overflow-hidden">
         <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
                <Zap size={12} className="text-primary fill-primary" />
                Matched Recruiter
            </div>
            <MoreHorizontal size={16} className="text-gray-400" />
         </div>
         <div className="text-3xl font-bold mb-1">$127k</div>
         <div className="text-xs text-gray-500 mb-6">Earnings</div>
         
         {/* Simple Bar Chart */}
         <div className="flex items-end justify-between h-12 gap-1 px-1">
            {[40, 60, 30, 80, 50, 90, 70, 40, 60, 30, 80, 50].map((h, i) => (
                <div key={i} style={{ height: `${h}%`}} className={`w-2 rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            ))}
         </div>
      </div>

      {/* List Items */}
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/seed/dash${i}/40`} className="w-8 h-8 rounded-full border border-white/20" alt="User" />
                    <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                </div>
                <div className="text-xs font-mono text-gray-300">$9,200</div>
            </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/10">
          <div className="text-center">
             <div className="text-xl font-bold">16</div>
             <div className="text-[10px] text-gray-400">Active Placements</div>
          </div>
          <div className="text-center border-l border-white/10">
             <div className="text-xl font-bold">$22k</div>
             <div className="text-[10px] text-gray-400">This Month</div>
          </div>
      </div>
    </div>
  );
};