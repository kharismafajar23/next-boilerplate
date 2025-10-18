import CrmMetrics from "@/components/admin/crm/CrmMetrics";
import CrmRecentOrderTable from "@/components/admin/crm/CrmRecentOrderTable";
import CrmStatisticsChart from "@/components/admin/crm/CrmStatisticsChart";
import EstimatedRevenue from "@/components/admin/crm/EstimatedRevenue";
import SalePieChart from "@/components/admin/crm/SalePieChart";
import UpcomingSchedule from "@/components/admin/crm/UpcomingSchedule";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js CRM Dashboard | TailAdmin - Next.js Admin Dashboard Template",
  description:
    "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Crm() {
  // Page component testing log
  console.log("👥 CRM: Page component rendering");

  return (
    <>
      <PageBreadcrumb pageTitle="CRM" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <CrmMetrics />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <CrmStatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <EstimatedRevenue />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <SalePieChart />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <UpcomingSchedule />
        </div>

        <div className="col-span-12">
          <CrmRecentOrderTable />
        </div>
      </div>
    </>
  );
}
