import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola");

  const handleInputValue = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe la categoria"
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
};
