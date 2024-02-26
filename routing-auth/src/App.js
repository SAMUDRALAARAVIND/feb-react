

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Entry } from "./components/Entry";
import { PrivateLayout } from "./components/PrivateLayout";
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/entry" element={<Entry />} />
          <Route path="" element={<PrivateLayout />}>
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<h1>Loading...</h1>}>
                  <Dashboard />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
