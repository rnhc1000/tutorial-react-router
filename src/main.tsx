import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Expenses from '../routes/Expenses';
import Invoices from '../routes/Invoices';
import NotFound from '../routes/NotFound';
import Invoice from '../routes/Invoices/Invoice';
import InvoicesIndex from '../routes/Invoices/InvoicesIndex';
import WelcomeHome from '../routes/WelcomeHome';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<WelcomeHome />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route index element={<InvoicesIndex />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
