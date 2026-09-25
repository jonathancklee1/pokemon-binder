import { createContext } from "react";

const PageNumberContext = createContext({
  currentPage: 0,
  setCurrentPage: (page: number) => {},
});

export default PageNumberContext;
