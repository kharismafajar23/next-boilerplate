import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import TransactionList from "@/components/admin/ecommerce/TransactionList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Transaction | TailAdmin - Next.js Dashboard Template",
  description:
    "This is E-commerce  Next.js Transaction TailAdmin Dashboard Template",
};

export default function TransactionsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Transactions" />
      <TransactionList />
    </div>
  );
}
