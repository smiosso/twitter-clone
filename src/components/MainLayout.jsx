// objective: easy maintenance
// page.js and TweetCards.jsx use the same layout from MainLayout.jsx
// MainLayout receives the contents of the page via the “prop” children

import LogoutButton from "./LogoutButton";
import SidebarWrapper from "./SidebarWrapper";



export default function MainLayout({ children }) {
  return (
    <div className="flex w-full h-screen text-white font-[family-name:var(--font-geist-sans)] bg-black">
      {/* Sidebar (20%) */}
      <SidebarWrapper />

      {/* Main Content (60%) */}
      <main className="w-[60%] mt-5 p-8 bg-black sm:p-20 flex flex-col gap-8">
        {children}
      </main>

      {/* Right Side (20%) */}
      <aside className="w-[20%] h-screen p-8 hidden md:block bg-black text-white">
        <div>
          <LogoutButton></LogoutButton>
        </div>
      </aside>
    </div>
  );
}
