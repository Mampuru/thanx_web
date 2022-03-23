//Returns the state that store the product list
export function  products (state) {
    return state.products
}

//Returns the state that store a specific product when user wants to product details
export function product (state) {
    return state.product
}

//Returns the state that stores the products in the cart
export function cart (state) {
    return state.cart
}