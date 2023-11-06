import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";

import { sortedData } from "./data/sorted";

const App = () => {
  const elements = sortedData.map((tab) => (
    <Route
      key={tab.id}
      path={`/${tab.id.toLowerCase()}`}
      element={React.createElement(lazy(() => import(`./${tab.path}`)))}
    />
  ));

  return (
    <BrowserRouter basename="/backendless-test-task">
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={React.createElement(
                lazy(() => import(`${sortedData[0].path}`))
              )}
            />
            {elements}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
