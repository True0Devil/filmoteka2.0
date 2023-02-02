import { useState } from "react";
import { Form, Input, SearchIcon, SubmitBtn } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.elements.search;
    onSubmit(value);

    setValue("");
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <Input
          name="search"
          type="text"
          placeholder="Movie search"
          value={value}
          onChange={handleInputChange}
        />
      </label>

      <SubmitBtn type="submit">
        <SearchIcon />
      </SubmitBtn>
    </Form>
  );
};
