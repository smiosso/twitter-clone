"use client";

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

export default function Sidebar() {
  return (
    <header className="fixed top-0 left-0 w-[20%] h-screen bg-black text-white py-4 px-6 shadow-md flex flex-col items-center gap-5">
      <img
        className="w-6"
        src="https://cdn.worldvectorlogo.com/logos/x-2.svg"
        alt="twitter logo"
      />

      <nav className="flex flex-col w-48 items-start gap-4">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link key={name} href={href} className="flex items-center gap-2">
            <Icon size={18} /> {name}
          </Link>
        ))}

        <button className="flex items-center w-full gap-2 mt-4 bg-white text-black font-semibold py-2 justify-center rounded-full hover:bg-gray-300 transition">
          Post
        </button>
      </nav>
    </header>
  );
}
