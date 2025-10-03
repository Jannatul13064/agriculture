import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "AgriHub - Agricultural Information Hub",
  description:
    "Empowering farmers with knowledge, sustainable practices, and technology.",

  openGraph: {
    title: "AgriHub",
    description: "Your Agricultural Information Hub 🌱",
    url: "https://agriculture-xi-seven.vercel.app/",
    siteName: "AgriHub",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "AgriHub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
