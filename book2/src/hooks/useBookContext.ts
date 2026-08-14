import { useContext } from "react";
import BookContext from "../contexts/books";

export function useBookContext () {
  return useContext(BookContext)
}