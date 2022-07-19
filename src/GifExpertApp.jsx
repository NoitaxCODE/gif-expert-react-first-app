import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([ 'Simpsons' ]);

  const onAddCategory = (inputText)=>{

    let validateInput = true

    categories.map( cat=>{
      if (cat.toLowerCase() === inputText.toLowerCase()) validateInput = false;
    })

    if (!validateInput) return;

    setCategories([ inputText, ...categories]);

  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onAddCategory={onAddCategory}
      />     

      {categories.map((category) => 
        <GifGrid category={category} key={category}/> 
      )}

    </>
  )
}
