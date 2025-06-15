"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
          <button
          onClick={() => {
            localStorage.removeItem('user');
            location.href = '/login';
          }}
          className="px-4 ml-auto gap-2 self-end mt-4 bg-black text-white py-2 justify-center rounded-full hover:bg-gray-800 transition"
        >
          Logout
        </button>

  );
}