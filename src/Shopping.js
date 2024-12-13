import React, { createContext, useState } from "react";
import "./Shopping.css";
import Main from "./page/Main";
import Navwrap from "./components/Navwrap";
import { Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";
import New from "./page/New";
import Best from "./page/Best";
import A from "./page/A";
import B from "./page/B";
import Not from "./page/Not";
import data from './data.js';
import Cart from "./page/Cart.jsx";

const DataContext = createContext();

const Shopping = () => {
  let [shopping]=useState(data);
  return (
    <DataContext.Provider value={{shopping}}>
      <div>
        <Navwrap />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/best" element={<Best />} />
          <Route path="/new" element={<New />}>
            <Route path="a" element={<A />} />
            <Route path="b" element={<B />} />
          </Route>
          <Route path="*" element={<Not />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
};

export default Shopping;
export { DataContext };
