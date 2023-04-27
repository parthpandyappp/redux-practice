const alreadyAddedToCart = (cart, dish) => {
    return cart.some((c) => c.id === dish.id)
}

const getQtyOfDishes = (cart, dish) => {
    return cart.find(c => c.id === dish.id)?.qty
}

export { alreadyAddedToCart, getQtyOfDishes }