import { createContext } from "react";

const PageNumberContext = createContext<{
  currentPage: number;
  setCurrentPage: (page: number) => void;
}>({
  currentPage: 0,
  setCurrentPage: () => {},
});

export default PageNumberContext;
