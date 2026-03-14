import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, LayoutDashboard, Settings, User, PlusCircle, Sparkles, LogOut, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { cn } from '../hooks/utils';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'AI Features', path: '/ai-features', icon: Sparkles },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl ai-gradient flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="text-2xl font-black tracking-tighter hidden md:block text-gray-900 dark:text-white">
              CAR<span className="ai-text-gradient">AI</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-12">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search AI recommendations..."
                className="block w-full pl-11 pr-4 py-3 border-2 border-gray-100 dark:border-slate-800 rounded-2xl bg-gray-50 dark:bg-slate-800/50 text-sm font-medium focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all",
                  isActive(link.path) 
                    ? "text-primary bg-primary/10 shadow-sm" 
                    : "text-gray-600 dark:text-slate-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800"
                )}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}

            <div className="h-8 w-px bg-gray-200 dark:bg-slate-800 mx-3" />

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400 transition-colors"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link to="/profile" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400 transition-colors">
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={handleLogout}
                className="p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-600 dark:text-slate-400 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>

              <Link
                to="/sell-car"
                className="ml-4 flex items-center space-x-2 px-6 py-3 rounded-2xl ai-gradient text-white text-sm font-black shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Sell Your Car</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-muted-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-4 rounded-lg text-base font-medium",
                  isActive(link.path) 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/sell-car"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-4 rounded-lg text-white ai-gradient font-bold"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Sell Your Car</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
