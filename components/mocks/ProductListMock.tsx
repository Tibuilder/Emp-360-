import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export const ProductListMock = () => {
  const candidates = [
    { name: "John Doe", role: "DevOps Engineer", status: "Offer Sent", time: "2h ago", img: "https://picsum.photos/seed/p1/50" },
    { name: "Sarah Lee", role: "Product Manager", status: "Interviewing", time: "5h ago", img: "https://picsum.photos/seed/p2/50" },
    { name: "Mike Chen", role: "Frontend Dev", status: "Reviewing", time: "1d ago", img: "https://picsum.photos/seed/p3/50" },
    { name: "Anna K.", role: "UX Designer", status: "Reviewing", time: "1d ago", img: "https://picsum.photos/seed/p4/50" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lifted border border-gray-100 overflow-hidden w-full max-w-md">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-400"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
           <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Candidate Pipeline</div>
      </div>

      <div className="divide-y divide-gray-100">
        {candidates.map((c, i) => (
          <div key={i} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={c.img} className="w-10 h-10 rounded-full object-cover" alt={c.name} />
                {i === 0 && <div className="absolute -top-1 -right-1 bg-primary w-3 h-3 rounded-full border-2 border-white"></div>}
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{c.name}</h4>
                <p className="text-xs text-gray-500">{c.role}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                c.status === 'Offer Sent' ? 'bg-green-100 text-green-700' :
                c.status === 'Interviewing' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {c.status}
              </span>
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                 <Clock size={10} /> {c.time}
              </span>
            </div>
          </div>
        ))}
        
        <div className="p-4 flex items-center justify-between bg-gray-50/50">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="space-y-1">
                 <div className="w-20 h-2 bg-gray-200 rounded animate-pulse"></div>
                 <div className="w-12 h-2 bg-gray-200 rounded animate-pulse"></div>
              </div>
           </div>
           <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};