import React, { useState } from 'react';
import { PlusCircle, Image as ImageIcon, Fuel, Zap, MapPin, Gauge, DollarSign, ArrowRight, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { cn } from '../hooks/utils';

const SellCar = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    fuelType: '',
    transmission: '',
    origin: '',
    km: '',
    status: 'Used',
    price: '',
    description: '',
  });

  const [images, setImages] = useState([]);

  const handleStatusChange = (status) => {
    setFormData(prev => ({
      ...prev,
      status,
      km: status === 'New' ? '0' : prev.km
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 pb-24 pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <div className="flex-1">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none p-12 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[100px]" />
              
              <div className="mb-16 relative z-10">
                <div className="flex items-center space-x-2 text-primary font-black text-xs uppercase tracking-widest mb-4">
                  <div className="w-8 h-[2px] bg-primary" />
                  <span>Marketplace Entry</span>
                </div>
                <h1 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">Sell Your <span className="ai-text-gradient italic font-light">Vehicle</span></h1>
                <p className="text-lg text-gray-500 dark:text-slate-400 font-medium max-w-lg leading-relaxed">List your vehicle in minutes with our AI-guided process and get the best market value.</p>
              </div>

              <div className="space-y-12 relative z-10">
                {/* Status Toggle */}
                <div className="flex flex-col space-y-4">
                  <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Condition</label>
                  <div className="flex p-2 bg-gray-50 dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 w-fit shadow-sm">
                    {['New', 'Used'].map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(status)}
                        className={cn(
                          "px-10 py-3 rounded-xl text-sm font-black transition-all",
                          formData.status === status 
                            ? "bg-primary text-white shadow-xl shadow-primary/20" 
                            : "text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white"
                        )}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Brand</label>
                    <input 
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="e.g. Tesla"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Model</label>
                    <input 
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="e.g. Model S Plaid"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Fuel Type</label>
                    <div className="relative group">
                      <select 
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleChange}
                        className="w-full appearance-none px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 outline-none font-black text-gray-700 dark:text-slate-200 cursor-pointer pr-12"
                      >
                        <option value="">Select Fuel Type</option>
                        <option value="Electric">Electric</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                      <PlusCircle className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-primary transition-colors rotate-45" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Transmission</label>
                    <div className="relative group">
                      <select 
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className="w-full appearance-none px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 outline-none font-black text-gray-700 dark:text-slate-200 cursor-pointer pr-12"
                      >
                        <option value="">Select Transmission</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                      <PlusCircle className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-primary transition-colors rotate-45" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Origin Country</label>
                    <input 
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      placeholder="e.g. Germany"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Mileage (KM)</label>
                    <div className="relative group">
                      <input 
                        name="km"
                        value={formData.km}
                        onChange={handleChange}
                        disabled={formData.status === 'New'}
                        placeholder="0"
                        className="w-full pl-6 pr-14 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 outline-none font-bold text-gray-900 dark:text-white disabled:opacity-50"
                      />
                      <Gauge className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Image Upload Placeholder */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Vehicle Images</label>
                  <div className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-[3rem] p-16 flex flex-col items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer bg-gray-50/50 dark:bg-slate-800/50">
                    <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6 shadow-xl shadow-gray-200/50 dark:shadow-none">
                      <ImageIcon className="w-10 h-10" />
                    </div>
                    <p className="text-gray-900 dark:text-white font-black mb-2 text-2xl tracking-tight">Upload high-quality images</p>
                    <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">Drag and drop or click to browse (Max 10 images)</p>
                  </div>
                </div>

                {/* Price & Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 md:col-span-1">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Your Price ($)</label>
                    <div className="relative group">
                      <input 
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 outline-none font-black text-3xl text-primary placeholder-primary/30"
                      />
                      <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/50 group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-500 dark:text-slate-400 tracking-wider px-1">Description</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell potential buyers about your car's history, condition, and special features..."
                    className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 outline-none font-bold text-gray-700 dark:text-slate-200 resize-none focus:border-primary/50 transition-all placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <button className="flex-1 py-6 rounded-3xl ai-gradient text-white text-xl font-black shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-4">
                    <span>Publish Listing</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="px-12 py-6 rounded-3xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 text-xl font-black hover:bg-gray-200 dark:hover:bg-slate-700 transition-all">
                    Save Draft
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Advisor Side */}
          <div className="w-full lg:w-[450px]">
            <div className="sticky top-32 space-y-12">
              {/* AI Valuation Card */}
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-bl-full blur-[100px]" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-5 mb-12">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl tracking-tight">AI Advisor</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Real-time Analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                      <p className="text-[11px] text-slate-300 mb-2 font-bold uppercase tracking-widest">Market Value Estimate</p>
                      <div className="flex items-baseline space-x-4">
                        <p className="text-5xl font-black text-primary tracking-tighter">$ --,---</p>
                        <span className="text-green-400 text-sm font-black animate-bounce">Live</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-4 font-bold leading-relaxed italic">Analysis will complete as you provide more vehicle details.</p>
                    </div>
                    
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Market Insights</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/10 transition-all">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <p className="text-sm text-slate-300 font-bold tracking-tight">Market demand is currently <span className="text-green-400 uppercase">High</span></p>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/10 transition-all">
                          <div className="w-2 h-2 rounded-full bg-blue-400" />
                          <p className="text-sm text-slate-300 font-bold tracking-tight">Predicted resale time: <span className="text-blue-400">12-15 days</span></p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black text-sm hover:bg-slate-200 transition-all shadow-xl shadow-black/20 hover:-translate-y-1">
                      Refresh AI Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* Selling Tips */}
              <div className="bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-gray-100 dark:border-slate-800 p-12 shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-300">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white">Selling Tips</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { title: 'Clean Photos', text: 'Bright, high-res outdoor shots increase engagement by 40%.', icon: ImageIcon },
                    { title: 'Transparency', text: 'Detailed service history builds immediate buyer trust.', icon: ShieldCheck },
                    { title: 'AI Badge', text: 'Get your car inspected for the AI-Verified prestige badge.', icon: Zap },
                  ].map((tip, i) => (
                    <div key={i} className="flex space-x-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border-2 border-transparent group-hover:border-primary/20 transition-all group-hover:scale-110">
                        <tip.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-gray-900 dark:text-white uppercase tracking-tight">{tip.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-slate-400 font-bold mt-2 leading-relaxed">{tip.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
