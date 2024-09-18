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
  const [itemCount, setItemCount] = useState(0);
  const [uncheckedCount, setUncheckedCount] = useState(0);

  const addElements = () => {
    const newElements = ([...elements, { text: '', checked: false }]);
  
    setElements(newElements);
    setItemCount(newElements.length);
    countUnchecked(newElements);
  };

  const deleteElement = (index) => {
    const newElements = elements.filter((_, i) => i !== index);
    
    setElements(newElements);
    setItemCount(newElements.length);
    countUnchecked(newElements);
  };

  const countUnchecked = (elements) => {
    const unchecked = elements.filter(element => !element.checked).length;
    setUncheckedCount(unchecked);
  };


  return (
    <div>
      <Title />
      <Counters itemCount={itemCount} uncheckedCount={uncheckedCount} />

      <ButtonAddTodo onClick={addElements} />
      <div>
        {elements.map((element, index) => (
          <div key={index}>
            <input type="text" placeholder="Anote aqui."/>
            <input type="checkbox" onChange={() => {
              const newElements = [...elements];
              newElements[index].checked = !newElements[index].checked;
              setElements(newElements);
              countUnchecked(newElements);
            }}/>
            <button onClick={() => deleteElement(index)} className="deleteButton">DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
