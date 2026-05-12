import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Download, 
  PieChart,
  Users
} from 'lucide-react';
import { Button, Card } from '../components/ui/Base';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 sm:h-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
          <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">InvoiceFly</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
        <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</a>
        <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Login</Link>
        <Link to="/signup">
          <Button size="md">Get Started</Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Link to="/login">
          <Button size="sm">Login</Button>
        </Link>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
    <div className="w-12 h-12 bg-orange-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </Card>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-orange-100 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-8">
                <Zap className="w-4 h-4" />
                <span>Modern Invoicing for Modern Businesses</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-gray-900 mb-8 sm:leading-[1.1]">
                Create Professional <span className="text-primary">Invoices</span> in Minutes
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                The fastest way to bill your clients, track payments, and manage your business. 
                Simple, fast, and beautifully designed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/signup" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full px-10 h-14 text-lg shadow-lg shadow-orange-100 italic">Create Invoice</Button>
                </Link>
                <Link to="/login" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full px-10 h-14 text-lg border-2">
                    Get Started <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-20 relative"
            >
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] -z-10" />
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Everything you need to grow</h2>
            <p className="text-lg text-slate-600">
              Powerful tools designed to simplify your financial operations and save you hours every week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={FileText}
              title="Invoice Generation"
              description="Create stunning invoices in seconds with our intuitive, drag-and-drop builder."
            />
            <FeatureCard 
              icon={Download}
              title="PDF Download"
              description="Export your invoices to professional PDF formats ready to send to your clients."
            />
            <FeatureCard 
              icon={Zap}
              title="Payment Tracking"
              description="Keep track of every dollar. Get notified when your invoices are paid or overdue."
            />
            <FeatureCard 
              icon={Users}
              title="Client Management"
              description="Store all your client data in one place for quick access and reuse during billing."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-400 mb-12 flex items-center justify-center gap-2">
            Trusted by teams at
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
            {['Stripe', 'Google', 'Spotify', 'Twitter', 'Airbnb'].map((brand) => (
              <span key={brand} className="text-3xl font-black">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-12 sm:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 italic">Ready to get started?</h2>
              <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ businesses who are getting paid faster with QuickInvoice.
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-10 h-14 text-lg bg-white text-primary hover:bg-slate-50">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">InvoiceFly</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">© 2026 InvoiceFly Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
