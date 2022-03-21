const sortbyPriceFunction = (state, data) => {
	if (state.sortByPrice && state.sortByPrice === "LOW_TO_HIGH") {
		return [...data].sort((firstItem, secondItem) => {
			return firstItem.price - secondItem.price;
		});
	} else if (state.sortByPrice && state.sortByPrice === "HIGH_TO_LOW") {
		return [...data].sort((firstItem, secondItem) => {
			return secondItem.price - firstItem.price;
		});
	} else {
		return data;
	}
};

export { sortbyPriceFunction };
