import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dailylogs from '../pages /Dailylogs';
import Show from "../pages /Show";

const Main = (props) => {
  // display the quotes
  const [quotes, setQuotes] = useState(null);
  // calling API from backend
  const URL = "";

  const getQuotes = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setQuotes(data)
  };

  const createQuotes = async (quote) => {
    // make a request to create a quote
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });
    getQuotes();
  }


  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="Main">
       
      <Routes>
        <Route path="/" element={<Dailylogs/>}/>
        <Route path="/days/:id" element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default Main;
