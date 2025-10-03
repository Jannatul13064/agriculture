"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🌱 AgriHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/guides" className="hover:text-yellow-300 transition">
            Farming Guides
          </Link>
          <Link href="/crops" className="hover:text-yellow-300 transition">
            Crop Details
          </Link>
          <Link href="/pests" className="hover:text-yellow-300 transition">
            Pest Control
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-600">
          <div className="flex flex-col space-y-2 p-4 font-medium">
            <Link
              href="/guides"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Farming Guides
            </Link>
            <Link
              href="/crops"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Crop Details
            </Link>
            <Link
              href="/pests"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Pest Control
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
