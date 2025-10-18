import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import CardWithIconExample from "@/components/admin/cards/card-with-icon/CardWithIconExample";
import CardWithImage from "@/components/admin/cards/card-with-image/CardWithImage";
import CardWithLinkExample from "@/components/admin/cards/card-with-link/CardWithLinkExample";
import HorizontalCardWithImage from "@/components/admin/cards/horizontal-card/HorizontalCardWithImage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Cards | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Cards page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Cards() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Cards" />
      <div className="space-y-6 sm:space-y-5">
        <CardWithImage />
        <HorizontalCardWithImage />
        <CardWithLinkExample />
        <CardWithIconExample />
      </div>
    </div>
  );
}
