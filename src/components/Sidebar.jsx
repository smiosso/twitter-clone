"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Hospital,
  Zap,
  Bug,
  Coffee,
  UserX,
  RefreshCw,
  UploadCloud,
  AlertTriangle,
} from "lucide-react";
import Modal from "./Modal";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Get Help", href: "/", icon: Hospital },
  { name: "Break Things", href: "/", icon: Zap },
  { name: "Debug Mode", href: "/", icon: Bug },
  { name: "Coffee Logs", href: "/", icon: Coffee },
  { name: "Impostor Mode", href: "/", icon: UserX },
  { name: "Infinite Loop", href: "/", icon: RefreshCw },
  { name: "Deploy & Pray", href: "/", icon: UploadCloud },
  { name: "More Bugs", href: "/", icon: AlertTriangle },
];

export default function Sidebar({ onOpenModal }) {
  return (
    <>
      <header className="fixed top-20 left-20 w-[20%] h-screen bg-black text-white py-4 px-6 shadow-md flex flex-col items-center gap-5 z-10">
        <nav className="flex flex-col w-48 items-start gap-5">
          <img
            className="w-12"
            src="/crydev.png"
            alt="CryDev"
          />
          {menuItems.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} className="font-copse flex items-center gap-2">
              <Icon size={18} /> {name}
            </Link>
          ))}

          <button
            onClick={onOpenModal}
            className="font-copse flex items-center w-full gap-2 mt-4 bg-white text-black py-2 justify-center rounded-full hover:bg-gray-300 transition"
          >
            Push the chaos. 🚀
          </button>
        </nav>
      </header>
    </>
  );
}
