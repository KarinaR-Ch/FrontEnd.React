import Input from "../../../../common/Input/Input";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Input 
        placeholder="Search..." 
        value="" 
        onChange={() => {}} 
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;