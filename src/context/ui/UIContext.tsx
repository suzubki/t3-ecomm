import { createContext } from "react";
import type { UIState } from "./UIProvider";

// TODO: agregar props
interface UIContext extends UIState {
  toggleSidebar: () => void
}

export const UIContext = createContext({} as UIContext);
