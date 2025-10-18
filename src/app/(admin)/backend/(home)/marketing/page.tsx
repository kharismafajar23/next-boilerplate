import FeaturedCampaign from "@/components/admin/marketing/FeaturedCampaign";
import ImpressionChart from "@/components/admin/marketing/ImpressionChart";
import MarketingMetricsCards from "@/components/admin/marketing/MarketingMetricsCards";
import TrafficSource from "@/components/admin/marketing/TrafficSource";
import TrafficStats from "@/components/admin/marketing/TrafficStats";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js Marketing Dashboard | TailAdmin - Next.js Admin Dashboard Template",
  description:
    "This is Next.js Marketing Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Marketing() {
  // Page component testing log
  console.log("📈 Marketing: Page component rendering");

  return (
    <>
      <PageBreadcrumb pageTitle="Marketing" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <MarketingMetricsCards />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <ImpressionChart />
          <FeaturedCampaign />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-4">
          <TrafficStats />
          <TrafficSource />
        </div>
      </div>
    </>
  );
}
