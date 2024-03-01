

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Entry } from "./components/Entry";
import { PrivateLayout } from "./components/PrivateLayout";
import { Provider } from "react-redux";
import store from "./store";
import { notification } from "antd";
import { HomeScreen } from "./components/posts/index";

const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  // contextHolder is a JSX that shows the notification
  const contextHolder = notification.useNotification()[1];

  return (
    <Provider store={store}>
      {contextHolder}
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/entry" element={<Entry />} />
            <Route path="" element={<PrivateLayout />}>
              <Route
                path="/dashboard"
                element={
                  <React.Suspense fallback={<b>Loading...</b>}>
                    <HomeScreen />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
