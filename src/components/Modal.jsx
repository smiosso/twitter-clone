"use client";
import { X } from "lucide-react";

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-20">
      <div className="bg-black text-white rounded-xl p-6 w-full max-w-xl relative shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <header className=" flex flex-col p-4">
            <div className="flex items-center gap-4 ">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="avatar"
                    className="w-12 h-12 rounded-full">
                </img>
                <textarea className="text-white w-full h-7 px-2 " placeholder="What's happening?"></textarea>
            </div>
            <button className="px-4 ml-auto gap-2 self-end border mt-4 bg-white text-black font-semibold py-2 justify-center rounded-full hover:bg-gray-300 transition">
                Post
            </button>
        </header>
      </div>
    </div>
  );
}
