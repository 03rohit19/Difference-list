import React, { useState } from "react";
import ListForm from "./Components/ListForm";
import "./index.css";

function App() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [result, setResult] = useState(null);

  const handleListAChange = (e) => {
    setListA(e.target.value);
  };

  const handleListBChange = (e) => {
    setListB(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemsA = listA
      .toLowerCase()
      .split(",")
      .map((item) => item.trim());
    const itemsB = listB
      .toLowerCase()
      .split(",")
      .map((item) => item.trim());

    const onlyInA = itemsA.filter((item) => !itemsB.includes(item));
    const onlyInB = itemsB.filter((item) => !itemsA.includes(item));
    const inBoth = itemsA.filter((item) => itemsB.includes(item));
    const combinedUnique = [...new Set([...itemsA, ...itemsB])];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combinedUnique,
    });
  };

  return (
    <div className="App">
      <h1 className="text-center text-5xl font-bold mb-4 m-2 p-2 ">
        Enter Lists A and B
      </h1>
      <ListForm
        className=" font-bold"
        listA={listA}
        listB={listB}
        handleListAChange={handleListAChange}
        handleListBChange={handleListBChange}
        handleSubmit={handleSubmit}
        result={result}
      />
    </div>
  );
}

export default App;
