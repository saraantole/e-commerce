export const addItemToCart = (cartItems, cartItemToAdd) => {
    
    const alreadyExistingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (alreadyExistingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}