import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import AngleDividerBreadCrumb from "@/components/admin/ui/breadcrumb/AngleDividerBreadCrumb";
import BreadCrumbWithIcon from "@/components/admin/ui/breadcrumb/BreadCrumbWithIcon";
import DefaultBreadCrumbExample from "@/components/admin/ui/breadcrumb/DefaultBreadCrumbExample";
import DottedDividerBreadcrumb from "@/components/admin/ui/breadcrumb/DottedDividerBreadcrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Breadcrumbs | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Breadcrumbs page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Breadcrumb() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Breadcrumb" />
      <div className="space-y-5 sm:space-y-6">
        <DefaultBreadCrumbExample />
        <BreadCrumbWithIcon />
        <AngleDividerBreadCrumb />
        <DottedDividerBreadcrumb />
      </div>
    </div>
  );
}
