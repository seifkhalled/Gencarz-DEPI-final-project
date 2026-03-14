import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  User, Mail, MapPin, Calendar, 
  LayoutDashboard, Car, Heart, Bell, 
  MessageSquare, TrendingUp, Eye, Search, 
  Settings, LogOut, Sparkles, ChevronRight,
  ShieldCheck, ArrowUpRight, ArrowDownRight, PlusCircle
} from 'lucide-react';
import { cn } from '../hooks/utils';
import { cars } from '../data/mockData';
import { CarCard } from '../components/CarCards';

const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === '/dashboard' ? 'Dashboard' : 'Ads');

  const tabs = [
    { name: 'Ads', icon: Car },
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Preferences', icon: Heart },
    { name: 'Notifications', icon: Bell },
  ];

  const stats = [
    { label: 'Total Ads', value: '12', icon: Car, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Total Views', value: '2.4k', icon: Eye, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { label: 'Messages', value: '48', icon: MessageSquare, color: 'text-violet-500', bg: 'bg-violet-500/10' },
    { label: 'Sales Value', value: '$145k', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 pb-24 transition-colors duration-300">
      {/* Header Profile Section */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[300px] blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-8 md:space-y-0 md:space-x-12">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-40 h-40 rounded-[3rem] bg-gray-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
                  alt="Avatar" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all">
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Seller</span>
              </div>
              <h1 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">Alex Thompson</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500 dark:text-slate-400 font-bold">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>alex.t@carai.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Munich, Germany</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Joined Oct 2023</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="px-8 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 font-black text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all">
                Edit Profile
              </button>
              <button className="px-8 py-4 rounded-2xl ai-gradient text-white font-black text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                Public View
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Tabs */}
        <div className="flex space-x-2 bg-white dark:bg-slate-900 p-2 rounded-[2rem] border-2 border-gray-100 dark:border-slate-800 mb-16 shadow-sm inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "px-10 py-4 rounded-[1.5rem] text-sm font-black transition-all",
                activeTab === tab.name 
                  ? "bg-primary text-white shadow-xl shadow-primary/20" 
                  : "text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Ads' && (
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-foreground tracking-tight">Active Listings</h2>
              <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-border text-sm font-black hover:bg-muted transition-all flex items-center space-x-2">
                <Search className="w-4 h-4" />
                <span>Search Ads</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {cars.slice(0, 3).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Dashboard' && (
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-border shadow-xl hover:-translate-y-1 transition-transform">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm", stat.bg, stat.color)}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-muted-foreground text-xs font-black uppercase tracking-widest mb-1">{stat.label}</h3>
                  <p className="text-4xl font-black text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Analytics Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-border shadow-2xl relative overflow-hidden h-[400px]">
                <div className="absolute top-10 left-10 flex items-center justify-between w-full pr-20">
                  <div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">Analytics Overview</h3>
                    <p className="text-sm text-muted-foreground font-medium mt-1">Total views performance over the last 30 days</p>
                  </div>
                  <select className="bg-surface-light dark:bg-surface-dark px-6 py-3 rounded-2xl border border-border outline-none font-bold text-sm cursor-pointer">
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                  </select>
                </div>
                {/* Visual Placeholder for Graph */}
                <div className="absolute bottom-10 left-10 right-10 h-48 flex items-end justify-between gap-4">
                  {[40, 60, 45, 90, 65, 80, 55, 75, 95, 70, 85, 60].map((h, i) => (
                    <div key={i} className="flex-1 group relative">
                      <div className="bg-primary/20 group-hover:bg-primary transition-colors rounded-t-lg" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-10">
                    <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-black tracking-tight">Market Insights</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Tesla Model S</p>
                        <div className="flex items-center space-x-1 text-green-400">
                          <ArrowUpRight className="w-4 h-4" />
                          <span className="text-xs font-black">+4.2%</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-200 font-medium leading-relaxed">High demand in your region. Consider adjusting price.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">BMW M4</p>
                        <div className="flex items-center space-x-1 text-blue-400">
                          <ArrowDownRight className="w-4 h-4" />
                          <span className="text-xs font-black">-1.5%</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-200 font-medium leading-relaxed">Inventory rising. Potential for faster sale if price is lowered.</p>
                    </div>
                  </div>
                </div>
                <button className="relative z-10 w-full py-5 rounded-2xl ai-gradient text-white font-black text-sm shadow-xl shadow-primary/20 mt-10 flex items-center justify-center space-x-2">
                  <span>View Full Report</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Preferences' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-black text-foreground tracking-tight mb-8">Favorite Brands</h3>
              <div className="flex flex-wrap gap-4">
                {['Tesla', 'BMW', 'Mercedes', 'Audi', 'Porsche', 'Ferrari'].map((brand) => (
                  <div key={brand} className="px-6 py-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border flex items-center space-x-4 group cursor-pointer hover:border-primary/50 transition-all">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span className="font-bold">{brand}</span>
                  </div>
                ))}
                <button className="px-6 py-4 rounded-2xl border-2 border-dashed border-border text-muted-foreground font-black hover:border-primary hover:text-primary transition-all flex items-center space-x-2">
                  <PlusCircle className="w-5 h-5" />
                  <span>Add Brand</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-black text-foreground tracking-tight mb-8">Saved Searches</h3>
              <div className="space-y-6">
                {[
                  { title: 'Tesla Model 3 under $35k', details: 'Munich + 100km, Electric' },
                  { title: 'BMW M Series', details: 'Global, 2022+, Petrol' },
                ].map((search, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border flex items-center justify-between group hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Search className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-foreground">{search.title}</h4>
                        <p className="text-xs text-muted-foreground font-medium mt-1">{search.details}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
