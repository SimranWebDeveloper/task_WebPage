import { createContext, useState, useEffect } from "react";
import React from 'react'
import product from '../db/data.json'

export const GlobalContext = createContext();

export const ContextProvider = ({ children}) => {

  const [data, setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : product.product);
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  },[data])
  
    const [search, setSearch] = useState("");
    const [addtoCart, setAddtoCart] = useState([]);

  // Login
  const [getUsers, setGetUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []);

  const[activeUser,setActiveUser]=useState([])

  useEffect(() => {
    
    localStorage.setItem('users', JSON.stringify(getUsers)) //qirilma
    setActiveUser(getUsers.find((user) => user?.status === true))
 
  },[getUsers])

  // permition
  const [permition, setPermition] = useState(false)

  return (
    <GlobalContext.Provider value={{ data, setData,search, setSearch,addtoCart, setAddtoCart,getUsers, setGetUsers,activeUser,setActiveUser,permition, setPermition}}>
      {children}
    </GlobalContext.Provider>
  )
}

