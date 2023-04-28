const alreadyAddedToCart = (cart, dish) => {
    return cart.some((c) => c.id === dish.id)
}

const getQtyOfDishes = (cart, dish) => {
    return cart.find(c => c.id === dish.id)?.qty
}

const getNoOfItems = (cart) => {
    return cart.reduce((prev, curr) => prev + curr.qty, 0)
}

const getTotalAmount = (cart) => {
    return cart.reduce((prev, curr) => prev + (curr.price * curr.qty), 0)
}

export { alreadyAddedToCart, getQtyOfDishes, getNoOfItems, getTotalAmount }