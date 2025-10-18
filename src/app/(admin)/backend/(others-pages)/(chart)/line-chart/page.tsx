import LineChartOne from "@/components/admin/charts/line/LineChartOne";
import LineChartThree from "@/components/admin/charts/line/LineChartThree";
import LineChartTwo from "@/components/admin/charts/line/LineChartTwo";
import ComponentCard from "@/components/admin/common/ComponentCard";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Line Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Line Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6 overflow-x-hidden">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
        <ComponentCard title="Line Chart 2">
          <LineChartTwo />
        </ComponentCard>
        <ComponentCard title="Line Chart 3">
          <LineChartThree />
        </ComponentCard>
      </div>
    </div>
  );
}
