import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import tabsData from "../../data/tabs.json";

const SharedLayout = () => {
  return (
    <>
      <Header data={tabsData} />
      <main className="min-h-screen p-10 bg-gradient-to-r from-purple-500 to-pink-500">
        <Suspense
          fallback={<p className="text-red-500 font-semibold">Loading...</p>}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
