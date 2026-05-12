import React from 'react';
import { 
  Download, 
  Printer, 
  Mail, 
  LogOut, 
  ChevronLeft,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui/Base';

export default function InvoicePreview() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/dashboard/invoices/new" className="p-2 hover:bg-[color:var(--color-card)] rounded-lg border border-transparent hover:border-[color:var(--color-border)] transition-all">
            <ChevronLeft className="w-5 h-5 text-slate-500 dark:text-gray-400" />
          </Link>
          <h1 className="text-2xl font-bold tracking-tight dark:text-gray-100">Invoice Preview</h1>
          <span className="bg-orange-50 dark:bg-orange-950/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-orange-100 dark:border-orange-900/30 uppercase tracking-wider">
            Draft
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex-1 sm:flex-none h-11" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button className="flex-1 sm:flex-none h-11 shadow-lg shadow-orange-200">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card className="p-10 sm:p-16 shadow-2xl border-none min-h-[1000px] bg-white relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="text-white w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight leading-none">QUICK</span>
                  <span className="text-xl font-medium text-primary leading-none">INVOICE</span>
                </div>
              </div>
              <div className="text-sm text-slate-500 space-y-1">
                <p className="font-bold text-slate-700">QuickInvoice Inc.</p>
                <p>123 Business Way, Suite 400</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="pt-2">contact@quickinvoice.io</p>
              </div>
            </div>

            <div className="text-left md:text-right space-y-2">
              <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">INVOICE</h2>
              <div className="grid grid-cols-2 md:block gap-4">
                <div className="text-sm mb-2">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Number</span>
                  <p className="font-bold text-lg">#INV-2024-0812</p>
                </div>
                <div className="text-sm mb-2">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Date Issued</span>
                  <p className="font-bold">May 12, 2026</p>
                </div>
                <div className="text-sm">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Due Date</span>
                  <p className="font-bold text-primary">May 26, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0.5 bg-slate-100 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-4">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Bill To:</h3>
              <div className="text-sm space-y-1">
                <p className="text-xl font-bold text-slate-900">Acme Corporation</p>
                <p className="text-slate-500 leading-relaxed max-w-[250px]">
                  456 Innovation Drive, Tech City, SF 94103, United States
                </p>
                <p className="pt-2 font-medium text-slate-700">finance@acme.corp</p>
              </div>
            </div>
            <div className="md:text-right space-y-4">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Payment Summary:</h3>
              <div className="space-y-1">
                <p className="text-slate-500 text-sm">Total Amount Due</p>
                <p className="text-4xl font-black text-slate-900">$1,350.00</p>
                <p className="text-xs font-bold text-green-600 uppercase bg-green-50 inline-block px-2 py-1 rounded mt-2">Verified Merchant</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-slate-100 rounded-2xl mb-12 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Item Description</th>
                  <th className="px-6 py-4 text-center">Qty</th>
                  <th className="px-6 py-4 text-right">Rate</th>
                  <th className="px-6 py-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {[
                  { desc: 'Custom Software Development - Phase 1', qty: 1, rate: 800, total: 800 },
                  { desc: 'UI/UX Design Systems Consulting', qty: 2, rate: 250, total: 500 },
                  { desc: 'Domain Registration & Hosting (Annual)', qty: 1, rate: 50, total: 50 },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-5 font-bold text-slate-700">{row.desc}</td>
                    <td className="px-6 py-5 text-center text-slate-500">{row.qty}</td>
                    <td className="px-6 py-5 text-right text-slate-500">${row.rate.toFixed(2)}</td>
                    <td className="px-6 py-5 text-right font-bold text-slate-900">${row.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="space-y-6 max-w-sm">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Notes & Acknowledgement</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  Thank you for your business. Please remit payment via bank transfer to the account listed below. Mention invoice number in transfer details.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bank Details</h4>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <p><span className="font-bold">Bank:</span> National Global Bank</p>
                  <p><span className="font-bold">Account:</span> 0011 2233 4455 6677</p>
                  <p><span className="font-bold">SWIFT/BIC:</span> GLBL US 33</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-bold text-slate-900">$1,350.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Discount (0%)</span>
                <span className="font-bold text-slate-900">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tax (0%)</span>
                <span className="font-bold text-slate-900">$0.00</span>
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex justify-between items-center bg-slate-900 text-white p-5 rounded-2xl shadow-xl shadow-slate-200">
                <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Amount Due</span>
                <span className="text-3xl font-black">$1,350.00</span>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 text-center space-y-4">
            <p className="text-xs text-slate-400 uppercase tracking-[0.3em] font-bold">Authorized Signature</p>
            <div className="mt-4 inline-block italic font-bold text-2xl text-slate-300 pointer-events-none select-none">
              Alex River
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
        <Button variant="outline" className="w-full sm:w-auto h-12 px-8 dark:bg-gray-900">
          <Share2 className="w-4 h-4 mr-2" />
          Share Preview
        </Button>
        <Button className="w-full sm:w-auto h-12 px-8 shadow-lg shadow-orange-200 dark:shadow-none">
          <Mail className="w-4 h-4 mr-2" />
          Send to Client
        </Button>
      </div>
    </div>
  );
}
