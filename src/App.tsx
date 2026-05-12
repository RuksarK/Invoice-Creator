import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Menu, 
  X, 
  Bell, 
  Search,
  Plus,
  LogOut,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './components/ui/Base';
import { useTheme } from './lib/ThemeContext';

// Pages - I will create these shortly
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import DashboardHome from './pages/DashboardHome';
import InvoiceCreate from './pages/InvoiceCreate';
import InvoicePreview from './pages/InvoicePreview';
import ClientsPage from './pages/ClientsPage';
import PaymentsPage from './pages/PaymentsPage';
import SettingsPage from './pages/SettingsPage';

const SidebarItem = ({ icon: Icon, label, href, active }: { icon: any, label: string, href: string, active: boolean }) => (
  <Link 
    to={href} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium",
      active 
        ? "bg-[#FFF7ED] dark:bg-orange-950/30 text-primary border border-orange-100/50 dark:border-orange-900/30 shadow-sm" 
        : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl"
    )}
  >
    <Icon className={cn("w-5 h-5", active ? "text-primary" : "group-hover:text-primary transition-colors")} />
    <span>{label}</span>
  </Link>
);

const DesktopSidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="hidden lg:flex flex-col w-64 bg-[color:var(--color-sidebar)] border-r border-[color:var(--color-border)] h-screen sticky top-0 transition-colors">
      <div className="p-6 flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <FileText className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">InvoiceFly</span>
      </div>
      
      <nav className="flex-1 px-4 py-2 space-y-1">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" active={pathname === '/dashboard'} />
        <SidebarItem icon={FileText} label="Invoices" href="/dashboard/invoices" active={pathname === '/dashboard/invoices' || pathname === '/dashboard/invoices/new'} />
        <SidebarItem icon={Users} label="Clients" href="/dashboard/clients" active={pathname === '/dashboard/clients'} />
        <SidebarItem icon={CreditCard} label="Payments" href="/dashboard/payments" active={pathname === '/dashboard/payments'} />
        <SidebarItem icon={BarChart3} label="Reports" href="/dashboard/reports" active={pathname === '/dashboard/reports'} />
        <SidebarItem icon={Settings} label="Settings" href="/dashboard/settings" active={pathname === '/dashboard/settings'} />
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-[#FFF7ED] dark:bg-orange-950/20 rounded-2xl p-4 border border-orange-100 dark:border-orange-900/30">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Premium Plan</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Get unlimited cloud storage and white-label invoices.</p>
          <button className="w-full mt-3 bg-primary text-white py-2 rounded-xl font-semibold text-sm shadow-sm hover:bg-orange-600 transition-colors">Upgrade</button>
        </div>
        <Link to="/" className="flex items-center gap-3 px-4 py-3 mt-4 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="h-16 bg-[color:var(--color-header)] border-b border-[color:var(--color-border)] flex items-center justify-between px-8 sticky top-0 z-20 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96 hidden md:block">
          <input 
            type="text" 
            placeholder="Search for invoices, clients..." 
            className="w-full bg-[color:var(--color-background)] border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-gray-100"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-primary transition-colors rounded-xl bg-[color:var(--color-background)] border border-[color:var(--color-border)]"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
        <button className="text-gray-400 relative p-1 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-gray-900"></span>
        </button>
        <div className="flex items-center gap-3 cursor-pointer pl-4 border-l border-[color:var(--color-border)]">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-none text-gray-900 dark:text-gray-100">Alex Carter</p>
            <p className="text-xs text-gray-500 mt-1">Admin</p>
          </div>
          <img 
            src="https://ui-avatars.com/api/?name=Alex+Carter&background=FF7A00&color=fff" 
            className="w-9 h-9 rounded-full object-cover border border-orange-100 dark:border-gray-800" 
            alt="User" 
          />
        </div>
      </div>
    </header>
  );
};

const MobileNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[color:var(--color-header)] border-t border-[color:var(--color-border)] px-2 py-1 flex items-center justify-between z-50 transition-colors">
      <Link to="/dashboard" className={cn("flex flex-col items-center gap-1 p-2 flex-1", pathname === '/dashboard' ? "text-primary font-medium" : "text-gray-400")}>
        <LayoutDashboard className="w-5 h-5" />
        <span className="text-[10px]">Home</span>
      </Link>
      <Link to="/dashboard/invoices" className={cn("flex flex-col items-center gap-1 p-2 flex-1", pathname.includes('/invoices') ? "text-primary font-medium" : "text-gray-400")}>
        <FileText className="w-5 h-5" />
        <span className="text-[10px]">Invoices</span>
      </Link>
      <div className="p-2 -mt-10">
        <Link to="/dashboard/invoices/new" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-300">
          <Plus className="w-6 h-6" />
        </Link>
      </div>
      <Link to="/dashboard/clients" className={cn("flex flex-col items-center gap-1 p-2 flex-1", pathname === '/dashboard/clients' ? "text-primary font-medium" : "text-gray-400")}>
        <Users className="w-5 h-5" />
        <span className="text-[10px]">Clients</span>
      </Link>
      <Link to="/dashboard/settings" className={cn("flex flex-col items-center gap-1 p-2 flex-1", pathname === '/dashboard/settings' ? "text-primary font-medium" : "text-gray-400")}>
        <Settings className="w-5 h-5" />
        <span className="text-[10px]">Sets</span>
      </Link>
    </div>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-gray-50">
    <DesktopSidebar />
    <div className="flex-1 flex flex-col min-w-0">
      <Header />
      <main className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl w-full mx-auto flex-1">
        {children}
      </main>
      <MobileNav />
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/dashboard/invoices" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/dashboard/invoices/new" element={<DashboardLayout><InvoiceCreate /></DashboardLayout>} />
        <Route path="/dashboard/invoices/:id" element={<DashboardLayout><InvoicePreview /></DashboardLayout>} />
        <Route path="/dashboard/clients" element={<DashboardLayout><ClientsPage /></DashboardLayout>} />
        <Route path="/dashboard/payments" element={<DashboardLayout><PaymentsPage /></DashboardLayout>} />
        <Route path="/dashboard/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
        <Route path="/dashboard/reports" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
