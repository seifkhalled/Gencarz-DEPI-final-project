import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, User, Bell, Shield, 
  CreditCard, Globe, Moon, Sun, ChevronRight, 
  HelpCircle, MessageSquare, ShieldCheck, Mail,
  Zap, Lock, Eye, Trash2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../hooks/utils';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('Account');

  const sections = [
    { name: 'Account', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Security', icon: Shield },
    { name: 'Billing', icon: CreditCard },
    { name: 'Language', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px]">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border shadow-2xl p-8 sticky top-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="mb-10">
                <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Settings</h1>
                <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Manage your AI Experience</p>
              </div>

              <div className="space-y-4 relative z-10">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    onClick={() => setActiveSection(section.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-black transition-all",
                      activeSection === section.name 
                        ? "bg-primary text-white shadow-xl shadow-primary/20" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <section.icon className="w-5 h-5" />
                      <span>{section.name}</span>
                    </div>
                    {activeSection !== section.name && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <button 
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border text-sm font-black hover:bg-muted transition-all"
                >
                  <div className="flex items-center space-x-4">
                    {theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </div>
                  <div className={cn(
                    "w-12 h-6 rounded-full p-1 transition-colors relative",
                    theme === 'dark' ? "bg-primary" : "bg-slate-300"
                  )}>
                    <div className={cn(
                      "w-4 h-4 rounded-full bg-white transition-transform",
                      theme === 'dark' ? "translate-x-6" : "translate-x-0"
                    )} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-border shadow-2xl relative overflow-hidden min-h-[600px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[200px]" />
              
              <div className="mb-12 relative z-10">
                <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight">{activeSection} Settings</h2>
                <p className="text-muted-foreground font-medium">Update and manage your {activeSection.toLowerCase()} preferences.</p>
              </div>

              {activeSection === 'Account' && (
                <div className="space-y-10 relative z-10">
                  <div className="flex items-center gap-8 p-8 rounded-[2.5rem] bg-surface-light dark:bg-surface-dark border border-border shadow-sm">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200?auto=format&fit=crop&q=80&w=200" 
                          alt="Avatar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 rounded-xl ai-gradient text-white shadow-lg border-2 border-white dark:border-slate-800">
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground">Alex Thompson</h3>
                      <p className="text-sm text-muted-foreground font-medium mt-1">Munich, Germany • Premium Member</p>
                      <button className="text-primary text-xs font-black uppercase tracking-widest mt-4 hover:underline">Change Profile Picture</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: 'Full Name', value: 'Alex Thompson', icon: User },
                      { label: 'Email Address', value: 'alex.t@carai.com', icon: Mail },
                      { label: 'Phone Number', value: '+49 123 456789', icon: MessageSquare },
                      { label: 'Location', value: 'Munich, Germany', icon: Globe },
                    ].map((field) => (
                      <div key={field.label} className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-1">{field.label}</label>
                        <div className="relative">
                          <input 
                            value={field.value}
                            readOnly
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border font-bold outline-none"
                          />
                          <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/50 flex gap-4">
                    <button className="px-10 py-4 rounded-2xl ai-gradient text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                      Save Changes
                    </button>
                    <button className="px-10 py-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border text-sm font-bold hover:bg-muted transition-all">
                      Discard
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'Security' && (
                <div className="space-y-10 relative z-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-foreground mb-6 flex items-center space-x-2">
                      <Lock className="w-6 h-6 text-primary" />
                      <span>Password Management</span>
                    </h3>
                    <div className="space-y-4">
                      <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border flex items-center justify-between group hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-black text-foreground">Update Password</h4>
                            <p className="text-xs text-muted-foreground font-medium mt-1">Last changed 3 months ago</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border flex items-center justify-between group hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-black text-foreground">Two-Factor Authentication</h4>
                            <p className="text-xs text-muted-foreground font-medium mt-1 text-green-500 font-bold uppercase tracking-widest">Active & Secure</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 rounded-full p-1 bg-primary relative">
                          <div className="w-4 h-4 rounded-full bg-white translate-x-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-foreground mb-6 flex items-center space-x-2">
                      <Eye className="w-6 h-6 text-primary" />
                      <span>Privacy & Data</span>
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 px-6 rounded-2xl hover:bg-muted transition-all">
                        <div>
                          <p className="font-black text-foreground">AI Personalization</p>
                          <p className="text-xs text-muted-foreground font-medium mt-1">Allow AI to use your browsing history for better results.</p>
                        </div>
                        <div className="w-12 h-6 rounded-full p-1 bg-primary relative">
                          <div className="w-4 h-4 rounded-full bg-white translate-x-6" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 px-6 rounded-2xl hover:bg-muted transition-all">
                        <div>
                          <p className="font-black text-foreground">Visible Profile</p>
                          <p className="text-xs text-muted-foreground font-medium mt-1">Make your public seller profile visible to everyone.</p>
                        </div>
                        <div className="w-12 h-6 rounded-full p-1 bg-slate-300 dark:bg-slate-700 relative">
                          <div className="w-4 h-4 rounded-full bg-white translate-x-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 border-t border-border/50">
                    <button className="flex items-center space-x-2 text-destructive font-black text-sm hover:underline p-4 rounded-2xl hover:bg-destructive/5 transition-all">
                      <Trash2 className="w-5 h-5" />
                      <span>Delete Account Permanently</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
