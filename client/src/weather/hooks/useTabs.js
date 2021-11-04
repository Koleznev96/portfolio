import {useContext} from "react";
import {TabsContext} from "../context/TabsContext";

export const useTabs = () => useContext(TabsContext);
