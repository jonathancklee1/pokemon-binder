import { createContext } from "react";

const ActiveTabContext = createContext<{
  activeTab: string;
  setActiveTab: (tab: string | undefined) => void;
}>({
  activeTab: "",
  setActiveTab: () => {},
});

export default ActiveTabContext;
