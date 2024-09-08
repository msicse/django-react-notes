import React from "react";
import Form from "../components/Form";

const Test = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <nav className="bg-white border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <a href="">Home</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <aside className="absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
          <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 text-red-50">
            <Form />
          </div>
        </aside>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                  <h3 className="text-amber-500 text-2xl font-semibold">
                    Pending Tasks
                  </h3>
                  <p className="text-xl mt-4">sn ajnscjnn sjc jas</p>
                </div>
              </div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default Test;
