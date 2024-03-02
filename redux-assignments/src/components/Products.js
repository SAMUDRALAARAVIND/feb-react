import { useDispatch, useSelector } from "react-redux"
import { ActionTypes } from "../store/ActionTypes";

export const Product = ({ product }) => {
    const cart = useSelector(state => state.cart);
    const count = cart[product.id];
    const wishList = useSelector(state => state.wishList);
    const wishListed = Boolean(wishList[product.id]);

    const dispatch = useDispatch();

    const updateCart = (count) => {
        dispatch({ type: ActionTypes.UPDATE_CART, payload: { id: product.id, count } })
    }

    const updateWishList = () => {
        dispatch({ type: ActionTypes.UPDATE_WISHLIST, payload: product.id })
    }

    return (
        <div className="product-item">
            <span className="material-icons" onClick={updateWishList} style={{ color: wishListed ? "red" : "black" }}>
                favorite
            </span>
            <img src={product.imageUrl} alt="product" />
            <b>{product.name}</b>
            <p>{product.description}</p>
            <span>${product.price}</span>
            {Boolean(count) ? (
                <div>
                    <button onClick={() => updateCart(-1)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => updateCart(1)}>+</button>
                </div>
            ) :
                <button onClick={() => updateCart(1)}>Add To cart</button>
            }
        </div >
    );
}

export const Products = () => {
    const products = useSelector(state => state.products);

    return <div className="products-list">
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
    </div>
}