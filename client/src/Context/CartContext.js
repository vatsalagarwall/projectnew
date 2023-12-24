import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();


const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem = action.payload;
            const existingItem = state.find(item => item.name === newItem.name);

            if (existingItem) {
                // If the item with the same name exists, update its quantity
                return state.map(item =>
                    item.name === newItem.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                return [...state, { ...newItem, quantity: 1 }];
            }

        case "REMOVE_ITEM":
            console.log(state.filter((item, index) => index !== action.payload))
            return state.filter((item, index) => index !== action.payload);

        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};



export const CartProvider = ({ children }) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    const [cart, dispatch] = useReducer(cartReducer, cartItems ? cartItems : []);
    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

