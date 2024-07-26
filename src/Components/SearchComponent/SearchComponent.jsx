import { useEffect, useState, useContext } from "react";
import algoliasearch from "algoliasearch/lite";
import axios from "axios";
import {
  InstantSearch,
  Hits,
  SearchBox
} from "react-instantsearch";
import CartContext from "../context/CartContext";
import HitComponent from "../HitComponent/HitComponent";
const searchClient = algoliasearch(
  "3S19LM5WL7",
  "e3ac0ed3cf3aa20484ba25c4d417d2c3"
);

const SearchComponent = () => {
  const {  setApiProducts } = useContext(CartContext);
  const [userInput, setUserInput] = useState("");


  useEffect(() => {
    axios
      .get("/utils/data.json") 
      .then((response) => {
        const allProducts = response.data;
        setApiProducts(allProducts);
        console.log("Fetched products:", allProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setApiProducts]);

  return (
    <InstantSearch searchClient={searchClient} indexName="data">
      <div className="header__search">
        <SearchBox 
         className="filter-search"
          onChange={(event) => setUserInput(event.currentTarget.value)}
          value={userInput}
          translations={{ placeholder: 'Search for products...' }}
        />
      </div>
        <Hits hitComponent={HitComponent} />
    </InstantSearch>
  );
};

export default SearchComponent;
