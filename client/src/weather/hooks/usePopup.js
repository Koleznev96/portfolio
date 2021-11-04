import {useContext} from "react";
import {PopupContext} from "../context/PopupContext";

export const usePopup = () => useContext(PopupContext);
