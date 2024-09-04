import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      name="filter"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
