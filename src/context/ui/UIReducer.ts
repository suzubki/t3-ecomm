import { UIState } from "./";

interface Payload {
  type: '[UI] - TOGGLE_SIDEBAR';
}

export const UIReducer = (state: UIState, payload: Payload): UIState => {
  switch (payload.type) {
    case '[UI] - TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      } 

    default:
      return {...state};
  }
}