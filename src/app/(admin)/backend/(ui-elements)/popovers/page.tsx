import ComponentCard from "@/components/admin/common/ComponentCard";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import DefaultPopover from "@/components/admin/ui/popover/DefaultPopover";
import PopoverButton from "@/components/admin/ui/popover/PopoverButton";
import PopoverWithLink from "@/components/admin/ui/popover/PopoverWithLink";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Popovers | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Popovers page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Popovers() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Popovers" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Default Popover">
          <DefaultPopover />
        </ComponentCard>{" "}
        <ComponentCard title="Popover With Button">
          <PopoverButton />
        </ComponentCard>{" "}
        <ComponentCard title="Popover With Link">
          <PopoverWithLink />
        </ComponentCard>
      </div>
    </div>
  );
}
