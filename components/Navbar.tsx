"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavSubMenu } from "@/components/NavSubMenu";
import { MobileNavSubMenu } from "@/components/MobileNavSubMenu";

const navConfig = [
  {
    label: "Agents",
    href: "#agents",
  },
  {
    label: "Platform",
    submenu: {
      title: "Platform",
      description: "Bring your ideas to life with Agent Studio",
      learnMoreHref: "#platform",
      capabilities: [
        {
          label: "Knowledge Studio",
          description: "Give every team an edge",
          href: "#knowledge",
        },
        {
          label: "Canvas Studio",
          description: "Get an OS for your life",
          href: "#canvas",
        },
        {
          label: "Skill Studio",
          description: "Give every team an edge",
          href: "#skill",
        },
        {
          label: "Intelligence Studio",
          description: "Give every team an edge",
          href: "#intelligence",
        },
      ],
    },
  },
  {
    label: "Marketplace",
    href: "#marketplace",
  },
  {
    label: "Company",
    href: "#company",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center bg-transparent">
      <div className="flex items-center gap-8 bg-[var(--color-navbar-bg-dark)] px-4 py-2 rounded-xl shadow-md max-w-4xl w-full mx-2 mt-4 relative">
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-white text-xl"
        >
          <Image src="/logos/logo.svg" alt="Solo" width={78} height={24} />
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto z-50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300 mb-1"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300 mt-1"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 gap-8 items-center justify-center">
          {navConfig.map((item) =>
            item.submenu ? (
              <NavSubMenu
                key={item.label}
                title={item.submenu.title}
                description={item.submenu.description}
                learnMoreHref={item.submenu.learnMoreHref}
                capabilities={item.submenu.capabilities}
              />
            ) : (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                className="text-lg font-semibold transition px-3 py-1 bg-transparent hover:bg-white/30 hover:rounded-xl focus:bg-white/40 focus:rounded-xl text-[var(--color-navbar-link)]"
              >
                <a className="outline-none" href={item.href}>
                  {item.label}
                </a>
              </Button>
            )
          )}
        </div>
        <Button
          variant="secondary"
          className="hidden md:inline-flex bg-white text-black font-semibold rounded-xl px-6 py-2 text-lg shadow-none border-2 border-white hover:bg-gray-100"
        >
          Get in touch
        </Button>
        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[var(--color-navbar-bg)] z-50 shadow-lg flex flex-col items-start pt-24 px-6 gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navConfig.map((item) =>
            item.submenu ? (
              <MobileNavSubMenu
                key={item.label}
                title={item.submenu.title}
                description={item.submenu.description}
                learnMoreHref={item.submenu.learnMoreHref}
                capabilities={item.submenu.capabilities}
              />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-white w-full py-2 px-2 rounded-xl hover:bg-white/30 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
          <Button
            variant="secondary"
            className="bg-white text-black font-semibold rounded-xl px-6 py-2 text-lg shadow-none border-2 border-white hover:bg-gray-100 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
