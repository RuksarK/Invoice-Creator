import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, ArrowLeft, Mail, ChevronLeft } from 'lucide-react';
import { Button, Card, Input, Label } from '../components/ui/Base';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4 shadow-lg shadow-orange-200">
            <FileText className="text-white w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Reset Password</h1>
          <p className="text-slate-500">We'll send you a link to reset your password</p>
        </div>

        <Card className="p-8 shadow-xl border-none">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input type="email" placeholder="name@company.com" className="pl-10 h-12" />
              </div>
            </div>

            <Button size="lg" className="w-full h-12 font-bold tracking-tight">
              Send Reset Link
            </Button>

            <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </form>
        </Card>
      </div>
    </div>
  );
}
