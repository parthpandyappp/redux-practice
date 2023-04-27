const getVegOrNonVeg = (products, isVeg) => {
    return [...products].filter((product) => product.isVeg === isVeg)
}

const getSortedData = (products, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
        return [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === "LOW_TO_HIGH") {
        return [...products].sort((a, b) => a.price - b.price);
    } else {
        return products;
    }
};

const getFilteredByRatings = (products, ratings) => {
    if (ratings === "4_above") {
        return [...products].filter((item) => item.rating >= 4);
    } else if (ratings === "3_above") {
        return [...products].filter((item) => item.rating >= 3);
    } else if (ratings === "2_above") {
        return [...products].filter((item) => item.rating >= 2);
    } else if (ratings === "1_above") {
        return [...products].filter((item) => item.rating >= 1);
    } else {
        return products;
    }
};

export { getVegOrNonVeg, getSortedData, getFilteredByRatings }
