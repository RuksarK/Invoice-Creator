import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Trash2, 
  Save, 
  Eye, 
  Download, 
  Send,
  Calendar as CalendarIcon,
  User,
  Building,
  DollarSign,
  Hash,
  ChevronLeft
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Card, Input, Label } from '../components/ui/Base';
import { InvoiceItem } from '../types';
import { cn } from '../lib/utils';

export default function InvoiceCreate() {
  const navigate = useNavigate();
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', name: '', quantity: 1, rate: 0, tax: 0, discount: 0 }
  ]);

  const [invoiceData, setInvoiceData] = useState({
    number: 'INV-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    businessName: 'My Awesome Company',
    businessEmail: 'billing@awesome.com',
    businessAddress: '123 Business Way, New York, NY 10001',
    currency: 'USD',
    notes: ''
  });

  const addItem = () => {
    setItems([...items, { 
      id: Math.random().toString(36).substr(2, 9), 
      name: '', 
      quantity: 1, 
      rate: 0, 
      tax: 0, 
      discount: 0 
    }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateTotals = useMemo(() => {
    let subtotal = 0;
    let taxTotal = 0;
    let discountTotal = 0;

    items.forEach(item => {
      const lineTotal = item.quantity * item.rate;
      const itemDiscount = lineTotal * (item.discount / 100);
      const itemTax = (lineTotal - itemDiscount) * (item.tax / 100);
      
      subtotal += lineTotal;
      discountTotal += itemDiscount;
      taxTotal += itemTax;
    });

    return {
      subtotal,
      taxTotal,
      discountTotal,
      grandTotal: subtotal - discountTotal + taxTotal
    };
  }, [items]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-[color:var(--color-card)] rounded-xl border border-transparent hover:border-[color:var(--color-border)] transition-all">
            <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">Create Invoice</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex border-gray-200" onClick={() => navigate('/dashboard')}>Cancel</Button>
          <Button size="sm" onClick={() => navigate('/dashboard/invoices/preview')} className="shadow-lg shadow-orange-100">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Business & Client Details */}
          <Card className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-2">
                  <Building className="w-4 h-4" />
                  Sender Details
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>Business Name</Label>
                    <Input 
                      value={invoiceData.businessName} 
                      onChange={e => setInvoiceData({...invoiceData, businessName: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Email</Label>
                    <Input 
                      type="email" 
                      value={invoiceData.businessEmail} 
                      onChange={e => setInvoiceData({...invoiceData, businessEmail: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Address</Label>
                    <textarea 
                      className="flex min-h-[80px] w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary outline-none transition-all dark:text-gray-100"
                      value={invoiceData.businessAddress}
                      onChange={e => setInvoiceData({...invoiceData, businessAddress: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-2">
                  <User className="w-4 h-4" />
                  Client Details
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>Client Name</Label>
                    <Input 
                      placeholder="e.g. Acme Corp" 
                      value={invoiceData.clientName}
                      onChange={e => setInvoiceData({...invoiceData, clientName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Client Email</Label>
                    <Input 
                      type="email" 
                      placeholder="client@example.com" 
                      value={invoiceData.clientEmail}
                      onChange={e => setInvoiceData({...invoiceData, clientEmail: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Billing Address</Label>
                    <textarea 
                      className="flex min-h-[80px] w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary outline-none transition-all dark:text-gray-100"
                      placeholder="Enter client's address"
                      value={invoiceData.clientAddress}
                      onChange={e => setInvoiceData({...invoiceData, clientAddress: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Items Table */}
          <Card className="overflow-hidden border-none shadow-xl rounded-[32px]">
            <div className="p-6 bg-gray-900 text-white flex items-center justify-between">
              <h2 className="font-bold">Invoice Items</h2>
              <Button size="sm" onClick={addItem} className="bg-white/10 hover:bg-white/20 border-none rounded-xl h-9 px-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
            <div className="p-8 space-y-4">
              <div className="hidden sm:grid grid-cols-12 gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest pb-4 border-b border-[color:var(--color-border)]">
                <div className="col-span-5">Description</div>
                <div className="col-span-1 text-center">Qty</div>
                <div className="col-span-2 text-right">Rate</div>
                <div className="col-span-1 text-right">Tax%</div>
                <div className="col-span-2 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>
              
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end sm:items-center">
                    <div className="col-span-12 sm:col-span-5 space-y-1.5 sm:space-y-0">
                      <Label className="sm:hidden">Item Description</Label>
                      <Input 
                        placeholder="Project consultation..." 
                        value={item.name} 
                        onChange={e => updateItem(item.id, 'name', e.target.value)} 
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-1 space-y-1.5 sm:space-y-0">
                      <Label className="sm:hidden">Qty</Label>
                      <Input 
                        type="number" 
                        className="text-center px-1" 
                        value={item.quantity} 
                        onChange={e => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} 
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2 space-y-1.5 sm:space-y-0">
                      <Label className="sm:hidden">Rate</Label>
                      <Input 
                        type="number" 
                        className="text-right" 
                        value={item.rate} 
                        onChange={e => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} 
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-1 space-y-1.5 sm:space-y-0">
                      <Label className="sm:hidden">Tax%</Label>
                      <Input 
                        type="number" 
                        className="text-right px-1" 
                        value={item.tax} 
                        onChange={e => updateItem(item.id, 'tax', parseFloat(e.target.value) || 0)} 
                      />
                    </div>
                    <div className="hidden sm:block col-span-2 text-right font-bold text-sm">
                      ${(item.quantity * item.rate * (1 + item.tax / 100)).toFixed(2)}
                    </div>
                    <div className="col-span-12 sm:col-span-1 flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 h-9 w-9"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-gray-50 dark:bg-gray-800/20 border-t border-[color:var(--color-border)] grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-gray-500 dark:text-gray-400 uppercase text-[10px] font-black tracking-widest">Notes / Payment Terms</Label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary outline-none transition-all dark:text-gray-100"
                  placeholder="Terms, bank details, or additional info..."
                  value={invoiceData.notes}
                  onChange={e => setInvoiceData({...invoiceData, notes: e.target.value})}
                />
              </div>
              
              <Card className="rounded-3xl p-8 space-y-4 shadow-sm border border-[color:var(--color-border)]">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">${calculateTotals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Discount</span>
                  <span className="font-bold text-red-500">-${calculateTotals.discountTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Tax Total</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">${calculateTotals.taxTotal.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
                <div className="flex justify-between items-center pt-1">
                  <span className="font-black text-gray-900 dark:text-gray-100 text-lg uppercase tracking-tight">Total Due</span>
                  <span className="text-3xl font-black text-primary tracking-tighter">${calculateTotals.grandTotal.toFixed(2)}</span>
                </div>
              </Card>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 space-y-6">
            <div className="space-y-4 border-b border-[color:var(--color-border)] pb-6">
              <h3 className="font-bold dark:text-gray-100">Invoice Settings</h3>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Invoice Number</Label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input value={invoiceData.number} onChange={e => setInvoiceData({...invoiceData, number: e.target.value})} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Issue Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input type="date" value={invoiceData.date} onChange={e => setInvoiceData({...invoiceData, date: e.target.value})} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Due Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input type="date" value={invoiceData.dueDate} onChange={e => setInvoiceData({...invoiceData, dueDate: e.target.value})} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Currency</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      className="w-full h-10 pl-10 pr-4 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] dark:text-gray-100 text-sm focus:ring-2 focus:ring-primary outline-none appearance-none"
                      value={invoiceData.currency}
                      onChange={e => setInvoiceData({...invoiceData, currency: e.target.value})}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Button className="w-full text-sm font-bold h-12">
                <Send className="w-4 h-4 mr-2" />
                Send Invoice
              </Button>
              <Button variant="secondary" className="w-full text-sm font-bold h-12">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="w-full text-sm font-bold h-12 bg-white">
                <Save className="w-4 h-4 mr-2" />
                Save as Draft
              </Button>
            </div>
          </Card>

          <div className="bg-slate-900 rounded-xl p-6 text-white space-y-4 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 space-y-4">
              <h4 className="font-bold text-lg">Auto-Billing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Schedule this invoice to be sent automatically on a recurring basis.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                Set Recurring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
