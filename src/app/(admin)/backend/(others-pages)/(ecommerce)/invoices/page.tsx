import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import InvoiceListTable from "@/components/admin/invoice/InvoiceList";
import InvoiceMetrics from "@/components/admin/invoice/InvoiceMetrics";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce  Invoices | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js E-commerce  Invoices TailAdmin Dashboard Template",
};

export default function InvoicesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Invoices" />
      <InvoiceMetrics />
      <InvoiceListTable />
    </div>
  );
}
