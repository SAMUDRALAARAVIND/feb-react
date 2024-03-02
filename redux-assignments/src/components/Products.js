import { useDispatch, useSelector } from "react-redux"
import { ActionTypes } from "../store/ActionTypes";

const Product = ({ product }) => {
    const cart = useSelector(state => state.cart);
    const count = cart[product.id];

    const dispatch = useDispatch();

    const updateCart = (count) => {
        dispatch({ type: ActionTypes.UPDATE_CART, payload: { id: product.id, count } })
    }

    return (
        <div className="product-item">
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