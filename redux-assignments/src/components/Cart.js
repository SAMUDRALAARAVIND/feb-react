import { useSelector } from "react-redux"
import { Product } from "./Products";

export const Cart = () => {
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    // { productId: productCount }
    const productIds = Object.keys(cart);
    const cartProducts = products.filter(({ id }) => Boolean(cart[id]));

    return (
        <>
            <h2>Cart Items ({productIds.length})</h2>
            {
                cartProducts.map(product => {
                    return (
                        <Product key={product.id} product={product} />
                    );
                })
            }
        </>
    );
}