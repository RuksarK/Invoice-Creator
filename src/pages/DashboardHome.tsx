import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  ChevronRight,
  Download
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Button, Card } from '../components/ui/Base';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
];

const StatCard = ({ title, value, change, icon: Icon, trend, subValue }: { title: string, value: string, change?: string, icon?: any, trend?: 'up' | 'down', subValue?: string }) => (
  <Card className="p-6 rounded-[32px]">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
    </div>
    <p className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">{value}</p>
    {change && (
      <p className={cn(
        "text-xs font-bold mt-2",
        trend === 'up' ? "text-green-500" : "text-red-500"
      )}>
        {trend === 'up' ? '+' : '-'}{change}% vs last month
      </p>
    )}
    {subValue && !change && (
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">{subValue}</p>
    )}
  </Card>
);

const recentInvoices = [
  { id: '1', client: 'Acme Corp', number: '#INV-2024-001', date: 'May 12, 2026', amount: '$4,200.00', status: 'Paid' },
  { id: '2', client: 'Global Tech', number: '#INV-2024-002', date: 'May 10, 2026', amount: '$1,250.00', status: 'Pending' },
  { id: '3', client: 'Design Studio', number: '#INV-2024-003', date: 'May 08, 2026', amount: '$850.00', status: 'Overdue' },
  { id: '4', client: 'Foodie Inc', number: '#INV-2024-004', date: 'May 05, 2026', amount: '$2,100.00', status: 'Paid' },
  { id: '5', client: 'Soft Systems', number: '#INV-2024-005', date: 'May 01, 2026', amount: '$3,400.00', status: 'Pending' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    'Paid': 'bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-900/30',
    'Pending': 'bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900/30',
    'Overdue': 'bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30',
  };
  return (
    <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold border", styles[status as keyof typeof styles])}>
      {status}
    </span>
  );
};

export default function DashboardHome() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-3xl">Welcome back, Alex!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Here is what's happening with your business today.</p>
        </div>
        <Link to="/dashboard/invoices/new">
          <Button className="w-full sm:w-auto h-12 px-8 shadow-orange-100 dark:shadow-none shadow-lg rounded-2xl">
            <Plus className="w-5 h-5 mr-2" />
            Create Invoice
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="$42,850.00" change="12.5" trend="up" />
        <StatCard title="Total Invoices" value="156" subValue="Across 48 clients" />
        <StatCard title="Paid Invoices" value="134" subValue="85% completion rate" />
        <StatCard title="Pending Payments" value="$5,420.00" subValue="2 overdue today" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-bold text-lg dark:text-gray-100">Revenue Overview</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Monthly statistics for 2026</p>
            </div>
            <select className="bg-gray-50 dark:bg-gray-800 border-none text-xs font-bold rounded-lg px-3 py-2 outline-none cursor-pointer dark:text-gray-200">
              <option>Last 7 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF7A00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#FF7A00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-200 dark:text-gray-800" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-gray-500 dark:text-gray-400" dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-gray-500 dark:text-gray-400" />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    backgroundColor: 'var(--color-card)',
                    color: 'var(--color-card-foreground)'
                  }}
                  itemStyle={{ color: '#FF7A00' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#FF7A00" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Small Progress Card or List */}
        <Card className="p-6">
          <h2 className="font-bold text-lg mb-6 dark:text-gray-100">Payment Method Analysis</h2>
          <div className="space-y-6">
            {[
              { label: 'Credit Card', value: 65, color: '#FF7A00' },
              { label: 'Bank Transfer', value: 25, color: '#334155' },
              { label: 'PayPal', value: 10, color: '#94A3B8' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{item.label}</span>
                  <span className="text-gray-500 dark:text-gray-400 font-bold">{item.value}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }} 
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full" 
                    style={{ backgroundColor: item.color }} 
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-4 bg-[#FFF7ED] dark:bg-orange-950/20 rounded-xl border border-orange-100 dark:border-orange-900/30">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Pro Tip</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Accepting online payments reduces overdue invoices by up to <span className="font-bold">40%</span>.
            </p>
          </div>
        </Card>
      </div>

      {/* Recent Invoices Table */}
      <Card className="rounded-[32px] overflow-hidden border-[color:var(--color-border)] flex-1">
        <div className="px-8 py-6 border-b border-[color:var(--color-border)] flex items-center justify-between">
          <h2 className="text-lg font-bold dark:text-gray-100">Recent Invoices</h2>
          <Button variant="ghost" size="sm" className="text-sm font-bold text-primary hover:underline bg-transparent">
            View All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800/50 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="px-8 py-4">Invoice ID</th>
                <th className="px-8 py-4">Client</th>
                <th className="px-8 py-4">Issue Date</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {recentInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                  <td className="px-8 py-4 font-bold text-gray-700 dark:text-gray-300 text-sm">{invoice.number}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase">
                        {invoice.client.substring(0, 2)}
                      </div>
                      <span className="font-semibold text-sm dark:text-gray-200">{invoice.client}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-500 dark:text-gray-400">{invoice.date}</td>
                  <td className="px-8 py-4 text-sm font-bold dark:text-gray-100">{invoice.amount}</td>
                  <td className="px-8 py-4">
                    <StatusBadge status={invoice.status} />
                  </td>
                  <td className="px-8 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
