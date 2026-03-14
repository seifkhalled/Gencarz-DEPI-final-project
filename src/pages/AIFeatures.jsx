import React from 'react';
import { 
  Calculator, Sparkles, ArrowLeftRight, TrendingUp, 
  Zap, ShieldCheck, Search, ChevronRight, 
  ArrowUpRight, BarChart3, PieChart, BrainCircuit
} from 'lucide-react';
import { aiFeatures } from '../data/mockData';
import { cn } from '../hooks/utils';

const AIFeatures = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-black tracking-[0.2em] mb-10 shadow-sm backdrop-blur-md uppercase">
              <BrainCircuit className="w-5 h-5 text-primary" />
              <span>THE FUTURE OF AUTOMOTIVE</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              Experience <span className="ai-text-gradient">Intelligent</span> <br /> 
              Market Analysis
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
              Our proprietary AI models process millions of data points across the globe 
              to provide you with the most accurate automotive insights ever.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {aiFeatures.map((feature, i) => {
            const Icon = feature.icon === 'Calculator' ? Calculator : 
                         feature.icon === 'Sparkles' ? Sparkles : 
                         feature.icon === 'ArrowLeftRight' ? ArrowLeftRight : 
                         TrendingUp;
            
            return (
              <div
                key={feature.title}
                className="group relative bg-white dark:bg-slate-900 rounded-[3rem] p-12 border-2 border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none hover:border-primary/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-gray-50 dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 flex items-center justify-center mb-10 shadow-xl shadow-gray-100 dark:shadow-none transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-transparent">
                    <Icon className="w-10 h-10 transition-colors" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-black text-sm uppercase tracking-widest group/link cursor-pointer">
                    <span>Explore Technology</span>
                    <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Insights Section */}
        <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-16 border-2 border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[300px] blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-widest shadow-sm">
                <Zap className="w-5 h-5" />
                <span>Real-time Engine</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
                How our <span className="ai-text-gradient italic">Neural Network</span> <br /> 
                Predicts Pricing.
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
                By analyzing historical sales, current inventory levels, local demand trends, 
                and even global economic factors, our AI delivers a valuation precision of 98.4%.
              </p>
              
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight">Data Points</span>
                  </div>
                  <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">5.2M+</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                      <PieChart className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight">Accuracy</span>
                  </div>
                  <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">98.4%</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-gray-50 dark:bg-slate-800 rounded-[3.5rem] border-2 border-gray-100 dark:border-slate-700 p-12 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-2xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-lg animate-pulse"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full ai-gradient flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <BrainCircuit className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIFeatures;
