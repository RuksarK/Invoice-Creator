import React from 'react';
import { 
  CreditCard, 
  Search, 
  ArrowUpRight, 
  ArrowDownLeft, 
  MoreHorizontal,
  Calendar,
  Filter,
  Download,
  Wallet,
  Clock
} from 'lucide-react';
import { Button, Card, Input } from '../components/ui/Base';
import { cn } from '../lib/utils';

const transactions = [
  { id: '1', client: 'Acme Corp', invoice: '#INV-2024-001', date: 'May 12, 2026', amount: '$4,200.00', status: 'Completed', method: 'Bank Transfer' },
  { id: '2', client: 'Global Tech', invoice: '#INV-2024-002', date: 'May 10, 2026', amount: '$1,250.00', status: 'Pending', method: 'Credit Card' },
  { id: '3', client: 'Hyper Loop', invoice: '#INV-2024-032', date: 'May 09, 2026', amount: '$8,400.00', status: 'Completed', method: 'PayPal' },
  { id: '4', client: 'Design Studio', invoice: '#INV-2024-003', date: 'May 08, 2026', amount: '$850.00', status: 'Failed', method: 'Credit Card' },
  { id: '5', client: 'Foodie Inc', invoice: '#INV-2024-004', date: 'May 05, 2026', amount: '$2,100.00', status: 'Completed', method: 'Bank Transfer' },
  { id: '6', client: 'Soft Systems', invoice: '#INV-2024-005', date: 'May 01, 2026', amount: '$3,400.00', status: 'Pending', method: 'PayPal' },
];

const StatusTag = ({ status }: { status: string }) => {
  const variants = {
    'Completed': 'bg-green-50 text-green-600 border-green-100',
    'Pending': 'bg-orange-50 text-orange-600 border-orange-100',
    'Failed': 'bg-red-50 text-red-600 border-red-100',
  };
  return (
    <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", variants[status as keyof typeof variants])}>
      {status}
    </span>
  );
};

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">Payments</h1>
          <p className="text-gray-500 text-sm mt-1">Track your income and transaction history</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 bg-white border-gray-200">
            <Download className="w-5 h-5 mr-2" />
            Statements
          </Button>
          <Button className="shadow-lg shadow-orange-100 h-12">
            Connect Bank
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-8 bg-gray-900 text-white overflow-hidden relative rounded-[32px]">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Wallet className="w-20 h-20" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <ArrowDownLeft className="w-6 h-6 text-green-400" />
            </div>
            <span className="font-bold opacity-70 uppercase tracking-widest text-[10px]">Total Received</span>
          </div>
          <p className="text-3xl font-black mb-1">$58,240.00</p>
          <div className="flex items-center gap-1 text-green-400 text-xs font-bold">
            <ArrowUpRight className="w-3 h-3" />
            14.2% from last month
          </div>
        </Card>

        <Card className="p-8 overflow-hidden relative rounded-[32px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 border border-gray-100">
              <Clock className="w-6 h-6 text-orange-400" />
            </div>
            <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">In Transit</span>
          </div>
          <p className="text-3xl font-black mb-1 text-gray-900">$4,120.00</p>
          <p className="text-gray-400 text-xs font-bold mt-1">Processing across 5 invoices</p>
        </Card>

        <Card className="p-8 overflow-hidden relative rounded-[32px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 border border-gray-100">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Avg. Payout Time</span>
          </div>
          <p className="text-3xl font-black mb-1 text-gray-900">2.4 Days</p>
          <p className="text-gray-400 text-xs font-bold mt-1">Faster than industry avg (4d)</p>
        </Card>
      </div>
      
      <Card className="overflow-hidden border-none shadow-xl rounded-[32px]">
        <div className="px-8 py-6 bg-white border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search transactions..." className="pl-10 h-10 border-gray-100 bg-gray-50 rounded-xl focus:ring-primary" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl text-[11px] font-black uppercase tracking-widest">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl text-[11px] font-black uppercase tracking-widest">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-100">
              <tr>
                <th className="px-8 py-4">Transaction</th>
                <th className="px-8 py-4">Invoice</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Method</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 bg-white">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-white",
                        tx.status === 'Completed' ? "bg-gray-900" : "bg-gray-200"
                      )}>
                        {tx.status === 'Completed' ? <ArrowDownLeft className="w-4 h-4" /> : <Clock className="w-4 h-4 text-gray-500" />}
                      </div>
                      <span className="font-bold text-sm text-gray-900">{tx.client}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-xs font-black text-gray-400">{tx.invoice}</td>
                  <td className="px-8 py-4 text-sm text-gray-500">{tx.date}</td>
                  <td className="px-8 py-4 text-sm font-black text-gray-900">{tx.amount}</td>
                  <td className="px-8 py-4 text-xs font-bold text-gray-500">{tx.method}</td>
                  <td className="px-8 py-4">
                    <StatusTag status={tx.status} />
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-white border-t border-gray-50 text-center">
            <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors bg-transparent">
              Load More History
            </Button>
        </div>
      </Card>
    </div>
  );
}
