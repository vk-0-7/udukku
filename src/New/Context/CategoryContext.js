import { createContext, useContext, useReducer, useState } from "react";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryF, setCategoryF] = useState("");
  return (
    <categoryContext.Provider value={{ categoryF, setCategoryF }}>
      {children}
    </categoryContext.Provider>
  );
};
const useCategoryContext = () => useContext(categoryContext);
export { useCategoryContext, CategoryProvider };
