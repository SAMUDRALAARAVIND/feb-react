import { useContext } from "react";
import { EmailContext, LocationContext } from "./Context";

export const Cart = () => {
    const location = useContext(LocationContext);
    const { email, setEmail } = useContext(EmailContext);
    console.log("cart render");
    const changeEmail = () => {
        setEmail("akshay@gmail.com");
    }

    return (
        <div className="card">
            Cart component: {email}
            {!location ? <p>Loading...</p> : <p>{`Latitude: ${location.lat} , Longitude: ${location.lng}`}</p>}
            <button onClick={changeEmail}>Change Email</button>
        </div>
    );
}
