import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Filter,
  UserPlus
} from 'lucide-react';
import { Button, Card, Input, Label } from '../components/ui/Base';
import { motion, AnimatePresence } from 'motion/react';

const clients = [
  { id: '1', name: 'Acme Corp', email: 'finance@acme.corp', phone: '+1 555-0123', address: 'San Francisco, CA', invoices: 12, spent: '$15,400' },
  { id: '2', name: 'Global Tech', email: 'billing@globaltech.com', phone: '+1 555-0456', address: 'Austin, TX', invoices: 8, spent: '$8,200' },
  { id: '3', name: 'Design Studio', email: 'hello@designstudio.io', phone: '+1 555-0789', address: 'New York, NY', invoices: 5, spent: '$4,100' },
  { id: '4', name: 'Foodie Inc', email: 'accounts@foodie.com', phone: '+1 555-0111', address: 'Chicago, IL', invoices: 3, spent: '$2,500' },
  { id: '5', name: 'Soft Systems', email: 'support@softsys.net', phone: '+1 555-0222', address: 'Seattle, WA', invoices: 2, spent: '$1,200' },
  { id: '6', name: 'Hyper Loop', email: 'contact@hyper.io', phone: '+1 555-0333', address: 'Los Angeles, CA', invoices: 15, spent: '$24,000' },
];

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">Clients</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your customer relationships</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="shadow-lg shadow-orange-100 h-12 px-8 rounded-2xl">
          <UserPlus className="w-5 h-5 mr-2" />
          Add New Client
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search by name, email, or city..." 
            className="pl-10 h-11 bg-gray-50 border-gray-100 focus:ring-primary rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex-1 md:flex-none h-11 bg-white border-gray-100 rounded-xl">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="flex-1 md:flex-none h-11 bg-white border-gray-100 rounded-xl">
            Sort by: Recent
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients
          .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.email.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((client) => (
          <Card key={client.id} className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-[32px] border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-900 flex items-center justify-center text-xl font-black uppercase border border-gray-100">
                {client.name.substring(0, 2)}
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors text-gray-900 text-xl">{client.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{client.email}</p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{client.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Invoices</p>
                  <p className="font-bold text-gray-900 text-lg">{client.invoices}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total Spent</p>
                  <p className="font-bold text-primary text-lg">{client.spent}</p>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="ghost" size="sm" className="w-full text-xs font-bold text-gray-500 hover:text-primary group-hover:bg-[#FFF7ED] rounded-xl bg-transparent">
                  View Profile <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Client Modal Mockup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg"
            >
              <Card className="p-10 shadow-2xl border-none overflow-hidden rounded-[32px]">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                <h2 className="text-2xl font-black mb-8 text-gray-900 tracking-tight">Add New Client</h2>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Business Name</Label>
                      <Input placeholder="Client Co." className="rounded-xl h-12 bg-gray-50 border-gray-100" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Primary Contact</Label>
                      <Input placeholder="Jane Smith" className="rounded-xl h-12 bg-gray-50 border-gray-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Email Address</Label>
                    <Input type="email" placeholder="jane@client.com" className="rounded-xl h-12 bg-gray-50 border-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Address</Label>
                    <textarea 
                      className="flex min-h-[120px] w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary outline-none transition-all"
                      placeholder="Street, City, Country"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" className="flex-1 h-12 rounded-2xl font-bold bg-white" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button className="flex-1 h-12 rounded-2xl font-bold shadow-lg shadow-orange-100">Save Client</Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
