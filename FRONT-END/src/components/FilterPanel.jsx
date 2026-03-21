import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../hooks/utils';

const FilterPanel = ({ filters, setFilters }) => {
  const filterOptions = [
    { label: 'Brand', options: ['All', 'Tesla', 'BMW', 'Mercedes', 'Audi', 'Toyota', 'Hyundai', 'Kia'] },
    { label: 'Model', options: ['All Models'] },
    { label: 'Fuel Type', options: ['All', 'Electric', 'Petrol', 'Diesel', 'Hybrid'] },
    { label: 'Transmission', options: ['All', 'Automatic', 'Manual'] },
    { label: 'Origin Country', options: ['All', 'Germany', 'USA', 'Japan', 'Korea'] },
    { label: 'Condition', options: ['All', 'New', 'Used'] },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none p-10 relative overflow-hidden transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-primary font-black text-xs uppercase tracking-widest mb-3">
            <div className="w-8 h-[2px] bg-primary" />
            <span>Smart Search</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter flex items-center space-x-3">
            Advanced Filters
          </h2>
        </div>
        <div className="relative flex-1 max-w-xl lg:ml-auto group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by model or feature..."
            className="w-full pl-14 pr-32 py-5 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
          />
          <button className="absolute right-3 top-3 px-6 py-2.5 rounded-xl ai-gradient text-white text-xs font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Suggest</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filterOptions.map((filter) => (
          <div key={filter.label} className="group flex flex-col space-y-3">
            <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">
              {filter.label}
            </label>
            <div className="relative">
              <select 
                className="w-full appearance-none px-5 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 hover:border-primary/30 focus:border-primary transition-all outline-none text-sm font-black text-gray-700 dark:text-slate-200 cursor-pointer pr-12"
              >
                {filter.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
        
        {/* Range Filters */}
        <div className="flex flex-col space-y-3">
          <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Price Range ($)</label>
          <div className="flex items-center space-x-3">
            <input type="number" placeholder="Min" className="w-1/2 px-5 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 outline-none text-sm font-black text-gray-700 dark:text-slate-200" />
            <span className="text-gray-300 dark:text-slate-700 font-bold">-</span>
            <input type="number" placeholder="Max" className="w-1/2 px-5 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 outline-none text-sm font-black text-gray-700 dark:text-slate-200" />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Mileage (KM)</label>
          <div className="flex items-center space-x-3">
            <input type="number" placeholder="Max KM" className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 outline-none text-sm font-black text-gray-700 dark:text-slate-200" />
          </div>
        </div>
      </div>

      <div className="mt-12 pt-10 border-t-2 border-gray-50 dark:border-slate-800/50 flex flex-wrap gap-6 items-center">
        <button className="px-10 py-5 rounded-2xl ai-gradient text-white text-sm font-black shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all">
          Apply Filters
        </button>
        <button className="px-10 py-5 rounded-2xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 text-sm font-black hover:bg-gray-200 dark:hover:bg-slate-700 transition-all">
          Reset All
        </button>
        <div className="ml-auto hidden sm:flex items-center space-x-3 text-[11px] font-black text-primary px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10">
          <Sparkles className="w-4 h-4" />
          <span className="tracking-widest uppercase">AI Optimizer Active</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
