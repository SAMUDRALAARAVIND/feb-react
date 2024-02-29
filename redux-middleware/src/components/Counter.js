import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../store/ActionType";
import "./index.css"
export const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => {
        // dispatch({ type: ActionTypes.INCREMENT });
        dispatch({ type: ActionTypes.INC_ASYNC })
    }

    const decrement = () => {
        dispatch({ type: ActionTypes.DECREMENT })
    }

    return (
        <div className="box">
            <button onClick={() => dispatch({ type: ActionTypes.FETCH_PINCODE, payload: 506163 })}>fetch pincode details</button>
            <button onClick={decrement}>-</button>
            <b>{count}</b>
            <button onClick={increment}>+</button>
        </div>
    );
}