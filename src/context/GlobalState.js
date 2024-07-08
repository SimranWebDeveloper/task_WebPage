import { createContext, useState, useEffect } from "react";
import React from 'react'
import product from '../db/data.json'

export const GlobalContext = createContext();

export const ContextProvider = ({ children}) => {
    const [data, setData] = useState(product.product);
    const [search, setSearch] = useState("");
    const [addtoCart, setAddtoCart] = useState([]);
  return (
    <GlobalContext.Provider value={{ data, setData,search, setSearch,addtoCart, setAddtoCart}}>
      {children}
    </GlobalContext.Provider>
  )
}

