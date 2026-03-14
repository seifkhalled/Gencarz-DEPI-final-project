import React, { useState } from 'react';
import { Mail, Lock, Sparkles, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock login
    if (email && password) {
      login({ email, name: 'Demo User' });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col lg:flex-row relative overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Left Side: Brand & Visual */}
      <div className="hidden lg:flex lg:w-1/2 p-20 flex-col justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-2xl ai-gradient flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-primary/20">
            C
          </div>
          <span className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
            CAR<span className="ai-text-gradient">AI</span>
          </span>
        </div>

        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-black mb-10 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="tracking-widest uppercase">AI-FIRST AUTOMOTIVE</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-[0.85]">
            Step into the <br /> 
            <span className="ai-text-gradient italic">Next Gen</span> <br /> 
            of Marketplace.
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
            Experience the world's most intelligent automotive platform. 
            Join 50,000+ users leveraging AI to find, value, and sell cars.
          </p>
        </div>

        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3 text-gray-600 dark:text-slate-400 font-bold">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span>Secure Auth</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 dark:text-slate-400 font-bold">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <span>AI Powered</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-20 relative z-10">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          
          <div className="mb-12 relative">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 dark:text-slate-400 font-medium">Log in to your AI-powered dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="space-y-2.5">
              <label className="text-[11px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-[0.2em] px-1">Email Address</label>
              <div className="relative group">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-[0.2em]">Password</label>
                <button type="button" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Forgot?</button>
              </div>
              <div className="relative group">
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl ai-gradient text-white text-lg font-black shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 mt-4 group">
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100 dark:border-slate-800" />
              </div>
              <span className="relative px-4 bg-white dark:bg-slate-900 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center space-x-3 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all font-bold text-sm text-gray-700 dark:text-slate-300">
                <Chrome className="w-5 h-5" />
                <span>Google</span>
              </button>
              <button type="button" className="flex items-center justify-center space-x-3 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all font-bold text-sm text-gray-700 dark:text-slate-300">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-slate-400 font-medium pt-4">
              Don't have an account? <Link to="/login" className="text-primary font-black hover:underline">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
