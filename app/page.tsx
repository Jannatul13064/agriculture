"use client";
import ContactPage from "./contact/page";
import PestsPage from "./pests/page";
import CropsPage from "./crops/page";
import GuidesPage from "./guides/page";

export default function HomePage() {
  return (
    <main className="space">
      <GuidesPage />

      {/* Crops Section */}
      <CropsPage />

      {/* Pests Section */}
      <PestsPage />

      {/* Contact Section */}
      <ContactPage />
    </main>
  );
}
