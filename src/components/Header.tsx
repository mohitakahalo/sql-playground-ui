"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./ui/Dropdown";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="row-start-1 flex justify-between items-center w-full gap-8 font-[family-name:var(--font-geist-mono)] bg-cyan-500 px-6">
      <h1 className="text-2xl font-bold">SQL UI</h1>
      <ul className="flex gap-4 justify-between items-center mr-auto">
        <Link
          href="/worksheets"
          className={`px-4 py-2 rounded transition-colors ${
            pathname === "/worksheets"
              ? "bg-blue-600 text-white"
              : "bg-cyan-500 text-white hover:bg-blue-600"
          }`}
        >
          <li className="text-sm cursor-pointer">Worksheets</li>
        </Link>
        <Link
          href="/databases"
          className={`px-4 py-2 rounded transition-colors ${
            pathname === "/databases"
              ? "bg-blue-600 text-white"
              : "bg-cyan-500 text-white hover:bg-blue-600"
          }`}
        >
          <li className="text-sm cursor-pointer">Databases</li>
        </Link>
        <Link
          href="/history"
          className={`px-4 py-2 rounded transition-colors ${
            pathname === "/history"
              ? "bg-blue-600 text-white"
              : "bg-cyan-500 text-white hover:bg-blue-600"
          }`}
        >
          <li className="text-sm cursor-pointer">History</li>
        </Link>
      </ul>
      <nav className="my-2">
        <Dropdown
          label={
            <div className="flex flex-col gap-1 justify-between items-start">
              <span className="text-sm text-gray-500">User123</span>
              <span className="text-xs text-gray-500">user123@gmail.com</span>
            </div>
          }
          options={[
            { label: "Settings", value: "settings" },
            { label: "Logout", value: "logout" },
          ]}
          contentClassName="w-10"
        />
      </nav>
    </header>
  );
};

export default Header;
