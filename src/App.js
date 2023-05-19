import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { cartApiData, getData } from "./Components/Redux/Action/dataAction";
import DemoCartWithRedux from "./Components/DemoCartWithRedux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AddtoCart from "./Components/AddtoCart";
import { getProductApi } from "./Components/ReduxToolkit/createSlice/createSlice";
import Product from "./Components/toolkitComponents/Product";
import Cart from "./Components/toolkitComponents/Cart";
import ToolkitHeader from "./Components/toolkitComponents/ToolkitHeader";
import { getcartdata } from "./Components/ReduxToolkit/toolkitAction/cartAction";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
    dispatch(cartApiData())
    dispatch(getProductApi())
    dispatch(getcartdata())
  }, []);

  return <>
    {/* redux */}

    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>}></Route>
        <Route path="/home" element={<DemoCartWithRedux />}></Route>
        <Route path="/cart" element={<AddtoCart />}></Route>
      </Routes>
    </BrowserRouter> */}

    {/* redux toolkit */}
    <BrowserRouter>
      <ToolkitHeader />
      <Routes>
        <Route path="/" element={<Navigate to={'/product'}/>}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>

  </>;
}

export default App;
