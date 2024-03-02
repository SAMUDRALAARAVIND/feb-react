import { ActionTypes } from "./ActionTypes";


const products = [
    {
        id: 3893,
        name: "Bullmer",
        price: 389,
        description: "Oversized cotton T shirt",
        size: "M",
        color: "black",
        imageUrl: "images/product1.webp",
    },
    {
        id: 4564,
        name: "Stormborn",
        price: 539,
        description: "Pure cotton , Oversized T shirt",
        size: "L",
        color: "orange",
        imageUrl: "images/product2.webp",
    },
    {
        id: 3728,
        name: "Roadster",
        price: 449,
        description: "T Shirt with elbow patch",
        size: "S",
        color: "blue",
        imageUrl: "images/product3.webp",
    }
]

const intialState = {
    products,
    cart: {},
    wishList: {},
}

const reducer = (state = intialState, action) => {
    if (action.type === ActionTypes.UPDATE_CART) {
        // update the cart count 
        const productId = action.payload.id, count = action.payload.count;
        const cart = state.cart;
        // productId = 839
        if (!cart[productId]) {
            return { ...state, cart: { ...cart, [productId]: 1 } };
        }

        const currentCount = cart[productId];
        if (currentCount === 1 && count === -1) {
            delete cart[productId];
            // cart = #400 { 100: 1, 322: 3}
            // cart = #500 = {...cart}
            return { ...state, cart: { ...cart } }
        }
        return { ...state, cart: { ...cart, [productId]: currentCount + count } };
    }
    if (action.type === ActionTypes.UPDATE_WISHLIST) {
        const productId = action.payload;
        const wishList = state.wishList;
        wishList[productId] ? (delete wishList[productId]) : (wishList[productId] = true);
        return { ...state, wishList: { ...wishList } }
    }
    return state;
}

export default reducer