import { useSelector } from "react-redux";

const Cart = () => {
    console.log("cart rendered");
    const count = useSelector(function (state) {
        return state.count;
    })

    return <h1>{count}</h1>
}

export default Cart