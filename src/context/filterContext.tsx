import React, { useReducer, useContext, createContext, ReactNode } from "react";

interface Filter {
  [key: string]: string[];
}

interface State {
  filters: Filter;
}

const initialFilterState: State = {
  filters: {},
};

const FilterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialFilterState,
  dispatch: () => null,
});

interface Action {
  type: string;
  payload: any;
}

interface FilterProviderProps {
  children: ReactNode;
}

const filterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: [
            ...(state.filters[action.payload.name] || []),
            action.payload.option,
          ],
        },
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: state.filters[action.payload.name].filter(
            (filter) => filter !== action.payload.option,
          ),
        },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {},
      };
    default:
      return state;
  }
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
