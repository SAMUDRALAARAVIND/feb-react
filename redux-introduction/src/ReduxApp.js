import { Provider } from "react-redux";
import store from "./store";
import Product2 from "./components/product2";
import Product1 from "./components/product1";
import Cart from "./components/cart";

const ReduxApp = () => {
    return (
        <>
            <Provider store={store}>
                <Product1 />
                <Product2 />
                <Cart />
            </Provider>
        </>
    );
}

export default ReduxApp;