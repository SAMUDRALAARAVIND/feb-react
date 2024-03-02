import { Cart } from "./components/Cart";
import { WishList } from "./components/WishList";
import { Products } from "./components/Products"
import { Provider } from "react-redux";
import { store } from "./store";
import "./styes/shopping.scss";

export const ShoppingApp = () => {
    return (
        <Provider store={store}>
            <div>
                <Products />
                <Cart />
                <WishList />
            </div>
        </Provider>
    );
}