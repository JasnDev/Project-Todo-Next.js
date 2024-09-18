import React, { useState, useEffect } from "react";

import localFont from "next/font/local";
import Title from "@/components/title";
import Counters from "@/components/counters";
import ButtonAddTodo from "@/components/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Home = () => {
  const [elements, setElements] = useState([]);
  const [count, checked] = useState(0);

  const addElements = () => {
    setElements([...elements, { text: '', checked: false }]);
  };

  const deleteElement = (index) => {
    const newElements = elements.filter((_, i) => i !== index);
    setElements(newElements);
  };

  const counting = () => {

  }

  return (
    <div>
      <Title />
      <Counters />




      <ButtonAddTodo onClick={addElements} />
      <div>
        {elements.map((element, index) => (
          <div key={index}>
            <input type="text" placeholder="Anote aqui."/>
            <input type="checkbox"/>
            <button onClick={() => deleteElement(index)} className="deleteButton">DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
