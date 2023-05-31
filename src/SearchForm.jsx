import { useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          ref={searchRef}
          className="form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
