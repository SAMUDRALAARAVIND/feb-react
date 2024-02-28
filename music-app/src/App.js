import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlayerLayout } from "./components/PlayerLayout";
import store from "./store/index";
import { Provider } from "react-redux";
import Movies from "./components/Movies";
import Songs from "./components/Songs";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<PlayerLayout />}>
              <Route path="" element={<Movies />} />
              <Route path="/movie/:movieId" element={<Songs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
