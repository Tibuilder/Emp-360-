import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { HeroMock } from '../components/mocks/HeroMock';
import { DashboardMock } from '../components/mocks/DashboardMock';
import { ProductListMock } from '../components/mocks/ProductListMock';
import { 
  Star, CheckCircle2, Zap, ShieldCheck, 
  Users, TrendingUp, Search, MessageSquare, 
  LayoutDashboard, RefreshCw, Trophy, Users2 
} from 'lucide-react';

// --- DATA ---
const partners = ["Cloudly", "Apply", "Camera", "Startup", "Techlify", "Apply"];

const whyTrustCards = [
  {
    highlight: true,
    title: "90%+",
    subtitle: "Hiring Manager Satisfaction",
    desc: "Based on post-hire feedback from companies."
  },
  {
    title: "3x Faster",
    subtitle: "Placements",
    desc: "Compared to traditional hiring agencies."
  },
  {
    title: "1800+ Recruiters",
    subtitle: "Vetted Specialists",
    desc: "Across tech, business & operations."
  },
  {
    title: "12 Days",
    subtitle: "Time to Hire",
    desc: "Average time to receive first qualified shortlist."
  }
];

const steps = [
  { id: "01", title: "Create Your Profile", desc: "Complete your company profile in minutes by adding essential information." },
  { id: "02", title: "Post or Select Roles", desc: "Employers post open positions. Recruiters choose roles that fit their expertise." },
  { id: "03", title: "Review Matches", desc: "Our platform suggests the best matches based on deep data analysis." },
  { id: "04", title: "Close the Hire", desc: "Track progress, communicate directly, and seal the deal all in one convenient place." },
];

const tools = [
  { icon: Search, title: "Smart Matching Engine", desc: "Our intelligent matching system connects roles with the right recruiters based on skills." },
  { icon: LayoutDashboard, title: "Advanced Dashboard", desc: "Get a clear real-time view of your hiring activity. Track submissions, interviews, progress." },
  { icon: MessageSquare, title: "Integrated Messaging", desc: "Communicate seamlessly with recruiters and candidates to enhance collaboration." },
  { icon: RefreshCw, title: "Automated Sequencing", desc: "Save time with automated follow-ups, reminders, and status updates." },
  { icon: Trophy, title: "Reward Tracking", desc: "Stay informed on performance metrics and transparent reward tracking." },
  { icon: Users2, title: "Collaboration Tools", desc: "Enable smooth teamwork with shared notes, feedback, and role visibility." },
];

const testimonials = [
  { name: "Jane Smith", role: "HR Director, TechCorp", text: "Using Emp360 has significantly transformed our hiring process. The platform's excellent functionality allows us to customize candidate tracking." },
  { name: "Sarah Lee", role: "Talent Acquisition, GrowthInc", text: "The dashboard feature is impressive. It enables my team to track our hiring progress in real-time." },
  { name: "David Wilson", role: "COO, FutureFlow", text: "The collaboration tools have fostered a whole-body approach to hiring, making decisions faster." },
  { name: "Emily Johnson", role: "Lead Designer, MuseWorks", text: "Emp360's reporting capabilities are stellar. They provide actionable insights that have made our recruitment decisions data-driven." },
  { name: "Michael Brown", role: "CTO, NextLevel", text: "Eng360's user-friendly interface has created my team to manage candidate profiles effortlessly." },
  { name: "Sarah Wilson", role: "VP of People, SoftSolutions", text: "Leverage built-in CRM, analytics & AI tools allowed us to refine our selection process." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section id="employers" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Find the Right <span className="text-primary">Recruiters.</span><br />
              Hire the Right Talent.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Emp360 connects companies with vetted recruiters using smart matching, so you can fill critical roles faster, without agency guesswork.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button variant="secondary">How It Works</Button>
              <Button>Book a Demo</Button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/user${i}/30`} className="w-8 h-8 rounded-full border-2 border-white" alt="User"/>)}
               </div>
               <div className="flex items-center gap-1">
                 <div className="flex text-primary"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                 <span className="font-bold">5.0</span>
                 <span className="text-gray-500 font-normal">200+ Testimonials</span>
               </div>
            </div>
          </div>

          <HeroMock />
        </Container>
      </section>

      {/* 2. PARTNER LOGOS */}
      <section className="py-12 border-y border-gray-200/50">
        <Container>
           <p className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest">Trusted Partner</p>
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-gray-400">
                   <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                   {p}
                </div>
              ))}
           </div>
        </Container>
      </section>

      {/* 3. WHY TRUST EMP360 */}
      <section id="about" className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <div className="text-primary text-sm font-bold mb-4">• Our Impact</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why trust <span className="text-primary">Emp360</span> for better hires?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We connect you with specialized recruiters who understand your roles, culture, and urgency so you hire confidently, not experimentally.
              </p>
            </div>

            <div className="space-y-4">
              {whyTrustCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    card.highlight 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-gray-900 border border-gray-100 shadow-soft'
                  }`}
                >
                  <h3 className="text-3xl font-bold mb-1">{card.title}</h3>
                  <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${card.highlight ? 'text-white/80' : 'text-primary'}`}>{card.subtitle}</div>
                  <p className={`text-sm ${card.highlight ? 'text-white/90' : 'text-gray-500'}`}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FAST TRACK HIRING */}
      <section className="py-24 bg-white/50">
        <Container>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">
            
            <div className="w-full flex justify-center md:justify-start">
               <ProductListMock />
            </div>

            <div>
              <div className="text-primary text-sm font-bold mb-4">• For Employers</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Find, Assess & <span className="text-primary">Hire</span> Teams That Growth
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're hiring your first employee or scaling globally, Emp360 connects you with top recruiters without the hassle of traditional agencies.
              </p>
              
              <ul className="space-y-4 mb-8">
                 {[
                   "Post roles in seconds",
                   "Accelerate hiring confidently",
                   "No upfront costs or hidden fees",
                   "Match with vetted recruiters",
                   "No hidden fees"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                     <div className="bg-gray-900 rounded-full p-1">
                        <CheckCircle2 size={12} className="text-white" />
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>

              <Button>Post Your First Role →</Button>
              <p className="mt-2 text-xs text-gray-400">Takes less than 2 minutes</p>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. DARK SECTION (RECRUITERS) */}
      <section id="recruiters" className="py-12 px-4">
         <Container className="bg-dark rounded-[2.5rem] py-16 md:py-24 px-6 md:px-16 text-white relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                 <div className="text-gray-400 text-sm font-bold mb-4">• For Recruiters</div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                   Supercharge Your <br/>
                   <span className="text-primary">Recruiting</span> Career
                 </h2>
                 <p className="text-gray-400 mb-8 text-lg">
                   Join Emp360's network to earn more placements, save time and do what you do best: focus on recruiting, not admin.
                 </p>

                 <ul className="space-y-4 mb-10">
                    {[
                      "Gain high-value job orders",
                      "Earn premium placement fees & bonuses",
                      "Leverage built-in CRM, analytics & AI tools",
                      "Automate follow-ups & candidate outreach"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 size={18} className="text-white fill-white/20" />
                        {item}
                      </li>
                    ))}
                 </ul>
                 
                 <Button className="bg-primary hover:bg-orange-600 border-none">Apply to Join</Button>
               </div>

               <div className="flex justify-center md:justify-end">
                  <DashboardMock />
               </div>
            </div>
         </Container>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
             <span className="text-primary text-sm font-bold mb-2 block">• How it Works</span>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Recruit, Review, Match, <span className="text-primary">Hire</span> Simple
             </h2>
             <p className="text-gray-600">Our platform simplifies hiring into four steps, making recruitment fast, transparent, and efficient.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
               <div key={step.id} className="relative group">
                  <div className="flex items-center justify-between mb-4">
                     <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                     </div>
                     <span className="text-5xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
               </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. TOOLS */}
      <section className="py-24 bg-white">
         <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-primary text-sm font-bold mb-2 block">• Features</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tools Designed to Accelerate Results</h2>
               <p className="text-gray-600">Our platform is built with powerful tools that streamline workflows, eliminate manual effort, and help you move from open role to successful hire faster.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {tools.map((t, i) => (
                  <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-lifted transition-all duration-300">
                     <div className="w-12 h-12 rounded-xl bg-gray-200 group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-colors">
                        <t.icon size={24} className="text-gray-700 group-hover:text-primary transition-colors" />
                     </div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                     <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* 8. TESTIMONIALS */}
      <section id="reviews" className="py-24 bg-background">
         <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-primary text-sm font-bold mb-2 block">• Success Stories</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Proven Results Across <br/><span className="text-primary">High-Growth Teams</span>
               </h2>
               <p className="text-gray-600">Our platform simplifies hiring into four clear steps making recruitment fast, transparent, and efficient.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-3 mb-4">
                        <img src={`https://picsum.photos/seed/review${i}/50`} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                        <div>
                           <div className="text-sm font-bold text-gray-900">{t.name}</div>
                           <div className="text-xs text-gray-500">{t.role}</div>
                        </div>
                     </div>
                     <p className="text-sm text-gray-600 italic leading-relaxed">"{t.text}"</p>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-gray-200">
         <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="bg-primary p-1.5 rounded-lg text-white">
                  <Zap size={16} fill="white" />
               </div>
               <span className="text-lg font-bold text-gray-900">Emp360</span>
            </div>
            <div className="text-sm text-gray-500">
               © {new Date().getFullYear()} Emp360 Inc. All rights reserved.
            </div>
         </Container>
      </footer>

    </main>
  );
}