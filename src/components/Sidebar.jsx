"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Bell,
  Mail,
  Brain,
  Users,
  Star,
  User,
  MoreHorizontal,
} from "lucide-react";
import Modal from "./Modal";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/", icon: Search },
  { name: "Notifications", href: "/", icon: Bell },
  { name: "Messages", href: "/", icon: Mail },
  { name: "Grok", href: "/", icon: Brain },
  { name: "Communities", href: "/", icon: Users },
  { name: "Premium", href: "/", icon: Star },
  { name: "Profile", href: "/", icon: User },
  { name: "More", href: "/", icon: MoreHorizontal },
];

export default function Sidebar({ onOpenModal }) {
  return (
    <>
      <header className="fixed top-20 left-20 w-[20%] h-screen bg-black text-white py-4 px-6 shadow-md flex flex-col items-center gap-5 z-10">
        <nav className="flex flex-col w-48 items-start gap-4">
          <img
            className="w-8"
            src="https://img.freepik.com/vektoren-kostenlos/neues-twitter-logo-x-icon-design-2023_1017-45418.jpg?semt=ais_hybrid&w=740"
            alt="twitter logo"
          />
          {menuItems.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} className="flex items-center gap-2">
              <Icon size={18} /> {name}
            </Link>
          ))}

          <button
            onClick={onOpenModal}
            className="flex items-center w-full gap-2 mt-4 bg-white text-black font-semibold py-2 justify-center rounded-full hover:bg-gray-300 transition"
          >
            Post
          </button>
        </nav>
      </header>
    </>
  );
}
