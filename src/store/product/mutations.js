//Assign product list to state products
export function setProducts(state, val) {
    state.products = val
}

//Assign an object with a specific product to the product state
export function setProduct(state, val) {
    state.product = val
}

//
export function setLoad(state, val) {
    state.uploadingData = val
}

//Assigns a list of added products in the cart to cart state
export function setCart(state, val) {
    state.cart = val
}