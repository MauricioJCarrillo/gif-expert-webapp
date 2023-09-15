import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") return;

    onAddCategory(inputValue);
    setInputValue("");
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
