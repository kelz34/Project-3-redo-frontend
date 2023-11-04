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

  const updateQuotes = async (quote, id) => {
    // make post request to create quote
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote)
    })
    // update list of quotes
    getQuotes()
  }

  const deleteQuotes = async (id) => {
    // make post request to delete quotes
    await fetch(URL + id, {
      method: "delete",
    })
    // update list of quotes
    getQuotes()
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="Main">
    <Main>
      <Routes>
        <Route path="/" element={
          <Dailylogs   
          />
        }/>
        <Route path="/days/:id" element={
          <Show
          />
        }/>
      </Routes>
    </Main>
      
    </div>
  );
}

export default Main;
