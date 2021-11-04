import {useContext} from "react";
import {PopupAuthContext} from "../context/PopupAuthContext";

export const usePopupAuth = () => useContext(PopupAuthContext);
