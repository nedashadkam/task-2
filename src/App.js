import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList";
import ProductPage from "./components/productPage";
import ShoppingBox from "./components/shoppingBox";
// import { PList } from "./components/PList";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/shoppingBox" element={<ShoppingBox />} />
        {/* <Route path="/test" element={<PList />} /> */}
      </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </div>
  );
}

export default App;
