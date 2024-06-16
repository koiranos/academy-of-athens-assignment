import { createContext } from "react";
import { pageContent } from "../../misc/data";

export const MenuContext = createContext({});
export const PublicationsContext = createContext({});
export const PageDataContext = createContext(pageContent);
