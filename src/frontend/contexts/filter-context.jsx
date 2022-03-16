import { createContext, useContext, useReducer } from "react";
import { filterAction } from "../reducer";

const filterContext = createContext(null);

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
	const filterReducer = (state, action) => {
		switch (action.type) {
			case filterAction.SORT_BY_PRICE:
				return { ...state, sortByPrice: action.payload };

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(filterReducer, {
		sortByPrice: null,
	});

	return (
		<filterContext.Provider value={{ state, dispatch }}>
			{children}
		</filterContext.Provider>
	);
};

export { FilterProvider, useFilter };
