import { createContext } from "react";

const ActiveTabContext = createContext({
  activeTab: "",
  setActiveTab: (tab: string | undefined) => {},
});

export default ActiveTabContext;
