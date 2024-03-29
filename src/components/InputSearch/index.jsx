import { Input } from "../Input";
import { Container, SearchResult } from "./style";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function InputSearch({plates}){
  const selectRef = useRef(null);
  const navigate = useNavigate();

  const [ isOpen, setIsOpen ] = useState(false);
  const [ allPlates, setAllPlates ] = useState([]);
  const [ inputSearch, setInputSearch ] = useState("");
  const [ platesAndIngredients, setPlateAndIngredients ] = useState([]);

  function allPlatesResult(){
    setAllPlates(plates())
    setIsOpen(true)
  }

  function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if(inputSearch.length < 1){
      return
    }

    const filteredPlatesBySearch = allPlates.filter(plate => plate.name.includes(inputSearch))

    const filteredPlatesByIngredients = allPlates.filter(plate => {
        return plate.ingredients.some(ingredient => {
          return ingredient.name.includes(inputSearch)
      })
    })

    const teste = [...filteredPlatesBySearch, ...filteredPlatesByIngredients]
    const teste2 = [...new Set(teste)];
    console.log(teste2)

    setPlateAndIngredients(teste2)
  }, [inputSearch])

  return (
    <Container onClick={allPlatesResult} ref={selectRef}>
      <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value) }
          placeholder={"Busque por pratos ou ingredients"}
          icon={IoSearchOutline}
        />

      <SearchResult $isOpen={isOpen} >
        {platesAndIngredients && 
          platesAndIngredients.map(item => (
            <p onClick={() => navigate(`/plateview/${item.id}`)} key={item.id}>{item.name}</p>
        ))}
      </SearchResult>
    </Container>
  )
}