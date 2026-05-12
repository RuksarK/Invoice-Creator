export interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  rate: number;
  tax: number;
  discount: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  client: Client;
  items: InvoiceItem[];
  status: 'paid' | 'pending' | 'overdue' | 'draft';
  notes?: string;
  subtotal: number;
  taxTotal: number;
  discountTotal: number;
  total: number;
}
