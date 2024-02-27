import { useDispatch } from "react-redux";

const Product2 = () => {
    console.log("rendered product2");
    const dispatch = useDispatch();

    const decrement = () => {
        // while dispatching an action { type: mandatory, payload: optional }
        dispatch({ type: "decrement", payload: 3 })
    }

    return <button onClick={decrement}>Remove Product</button>
}

export default Product2;