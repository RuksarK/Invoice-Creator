import React from 'react';
import { 
  User, 
  Building, 
  CreditCard, 
  Shield, 
  Bell, 
  Globe, 
  Calculator,
  Moon,
  Sun,
  CloudUpload,
  Camera,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { Button, Card, Input, Label } from '../components/ui/Base';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/ThemeContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="text-gray-500 text-sm font-medium">Configure your profile, billing, and system preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <aside className="md:w-64 space-y-1">
          <button className="flex items-center gap-3 px-4 py-3 bg-[#FFF7ED] dark:bg-orange-950/30 text-primary font-bold rounded-xl w-full text-left text-sm transition-all border border-orange-100 dark:border-orange-900/30 shadow-sm">
            <User className="w-4 h-4" /> Personal Info
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold rounded-xl w-full text-left text-sm transition-all">
            <Building className="w-4 h-4" /> Business Profile
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold rounded-xl w-full text-left text-sm transition-all">
            <CreditCard className="w-4 h-4" /> Billing & Plans
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold rounded-xl w-full text-left text-sm transition-all">
            <Shield className="w-4 h-4" /> Security
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold rounded-xl w-full text-left text-sm transition-all">
            <Bell className="w-4 h-4" /> Notifications
          </button>
        </aside>

        <div className="flex-1 space-y-10">
          {/* Business Profile */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Business Profile</h3>
              <Button size="sm" className="h-10 px-6 rounded-xl">Save Changes</Button>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest text-xs">Company Logo</Label>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl bg-[#FFF7ED] dark:bg-orange-950/20 border-2 border-dashed border-orange-100 dark:border-orange-900/30 flex flex-col items-center justify-center text-primary group cursor-pointer hover:border-primary transition-all">
                    <Camera className="w-6 h-6 mb-1" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Update</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-gray-900 dark:text-gray-100 leading-none">InvoiceFly Inc.</p>
                    <p className="text-xs text-gray-400 font-medium">JPG, PNG or GIF. Max size 2MB</p>
                    <div className="flex gap-2 pt-2">
                       <Button variant="outline" size="sm" className="h-8 py-0 px-3 text-[11px] font-black uppercase tracking-widest rounded-lg border-gray-100 dark:border-gray-800 italic">Upload</Button>
                       <Button variant="ghost" size="sm" className="h-8 py-0 px-3 text-[11px] font-black uppercase tracking-widest rounded-lg text-red-500 bg-transparent">Remove</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Legal Business Name</Label>
                  <Input defaultValue="InvoiceFly Inc." className="rounded-xl h-12 bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Registration Number</Label>
                  <Input placeholder="Tax ID or Reg No." className="rounded-xl h-12 bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Business Address</Label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary outline-none transition-all dark:text-gray-100"
                  defaultValue="123 Business Way, Suite 400, New York, NY 10001, United States"
                />
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="space-y-6 pt-6 mt-10 border-t border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">System Preferences</h3>
            <div className="space-y-4">
              {[
                { 
                  id: 'dark', 
                  label: 'Dark Mode', 
                  desc: 'Switch to dark interface for evening work', 
                  icon: theme === 'dark' ? Sun : Moon, 
                  enabled: theme === 'dark',
                  action: toggleTheme
                },
                { id: 'email', label: 'Email Notifications', desc: 'Receive instant alerts for paid/overdue invoices', icon: Bell, enabled: true },
                { id: 'cloud', label: 'Automatic Cloud Sync', desc: 'Backup your data to the cloud in real-time', icon: CloudUpload, enabled: true },
              ].map((pref) => (
                <div 
                  key={pref.id} 
                  className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/50 rounded-[24px] border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={pref.id === 'dark' ? pref.action : undefined}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                      pref.enabled ? "bg-[#FFF7ED] dark:bg-orange-950/40 text-primary" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                    )}>
                      <pref.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{pref.label}</p>
                      <p className="text-xs text-gray-400 font-medium">{pref.desc}</p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-12 h-6 rounded-full p-1 cursor-pointer transition-all duration-300",
                    pref.enabled ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                  )}>
                    <div className={cn(
                      "w-4 h-4 bg-white rounded-full transition-all duration-300",
                      pref.enabled ? "translate-x-6" : "translate-x-0"
                    )} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Danger Zone */}
          <section className="p-10 bg-red-50 dark:bg-red-950/10 rounded-[32px] border border-red-100 dark:border-red-900/30 space-y-6">
            <h3 className="font-black text-lg text-red-900 dark:text-red-500 uppercase tracking-widest text-xs">Danger Zone</h3>
            <p className="text-sm text-red-700 dark:text-red-400 font-bold leading-relaxed">
              Deleting your account will permanently remove all your data, invoices, and client information. This action cannot be undone.
            </p>
            <Button variant="danger" className="h-12 px-8 shadow-lg shadow-red-100 dark:shadow-none rounded-2xl italic">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account Permanently
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
