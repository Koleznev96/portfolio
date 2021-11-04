import {useContext} from "react";
import {CityContext} from "../context/CityContext";

export const useCity = () => useContext(CityContext);
