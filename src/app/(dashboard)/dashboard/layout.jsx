"use client";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      {/* Drawer toggle button (only visible on mobile) */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col bg-base-100 p-6">
        {/* Navbar for mobile */}
        <div className="lg:hidden mb-4 flex justify-between items-center">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button"
          >
            ☰
          </label>
          <Link
            href="/"
            className="btn bg-base-300 rounded-xl text-xl font-bold"
          >
            Next <span className="text-secondary ml-1">Mart</span>
          </Link>
        </div>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <aside className="menu p-6 w-64 min-h-full bg-base-300 text-white flex flex-col justify-between">
          <div>
            {/* Logo (visible only on desktop sidebar) */}
            <div className="hidden lg:flex justify-center mb-10">
              <Link
                href="/"
                className="btn bg-gray-800 rounded-xl text-2xl font-bold w-full"
              >
                Next <span className="text-secondary ml-1">Mart</span>
              </Link>
            </div>

            {/* Navigation */}
            <ul className="space-y-3 text-lg font-medium">
              <li>
                <Link
                  href="/dashboard/add-products"
                  className="px-3 py-2 rounded-lg hover:bg-secondary transition block"
                >
                  ➕ Add Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/activity-log"
                  className="px-3 py-2 rounded-lg hover:bg-secondary transition block"
                >
                  📑 Activity Log
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/my-order"
                  className="px-3 py-2 rounded-lg hover:bg-secondary transition block"
                >
                  🛒 My Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/my-profile"
                  className="px-3 py-2 rounded-lg hover:bg-secondary transition block"
                >
                  👤 My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout */}
          <div className="mt-6">
            <Link
              href="/logout"
              className="block text-center bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-lg font-semibold"
            >
              Logout
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
