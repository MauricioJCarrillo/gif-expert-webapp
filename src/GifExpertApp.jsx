import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
