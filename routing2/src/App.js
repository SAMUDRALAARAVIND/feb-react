/**
 *
 * 1. Lazy Loading
 * 2. useImarativeHandle hook
 * 3. Theme Switch (Context API)
 */
import { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Test from "./Test.js";
// import Home from "./Home.js"
const Test = lazy(() => import("./Test.js"));
const Home = lazy(() => import("./Home.js"));

const Root = () => (
  <>
    <h1>Root Component</h1>
    <div><Link to="test">Test</Link></div>
    <div><Link to="home">Home</Link></div>
  </>
);

function App() {
  return (
    <BrowserRouter><Routes><Route path="" Component={Root} /><Route path="/test" element={<Suspense fallback={<p>Loading... Test</p>}><Test /></Suspense>} />
      <Route path="/home" element={<Suspense fallback={<p>Loading... Home</p>}><Home /></Suspense>} />
    </Routes>
    </BrowserRouter>

  );
}

// localhost:3000/ => <h1>Root Screen</h1>

export default App;
