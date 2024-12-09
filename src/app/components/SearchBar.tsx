import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
