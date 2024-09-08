import React from "react";

const Nav = () => {
  return (
    <nav className="absolute top-0 w-full bg-white border-b border-gray-100  z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <a
                href="/logout"
                className="px-3 py-2 rounded text-white bg-slate-800 hover:bg-slate-600"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
