import { useDispatch } from "react-redux";

const Product1 = () => {
    console.log("rendered product1");

    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "increment" })
    }

    return <button onClick={increment}>Add Product</button>
}

export default Product1