import { useReducer } from "react";
import { UIContext, UIReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  isSidebarOpen: boolean;
}

export const INITIAL_STATE: UIState = {
  isSidebarOpen: false,
}

export type InitialStateType = typeof INITIAL_STATE

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state , dispatch] = useReducer(UIReducer, INITIAL_STATE)
  
  const toggleSidebar = () => {
    dispatch({ type: '[UI] - TOGGLE_SIDEBAR' });
  } 

    
  return <UIContext.Provider value={{ toggleSidebar, ...state }}>{children}</UIContext.Provider>;
};
