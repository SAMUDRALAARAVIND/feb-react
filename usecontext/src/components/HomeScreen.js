import { createContext, useContext, useEffect, useState } from "react";
import "./styles/home.scss";

import { Cart } from "./Cart";
import { AddressBook } from "./AddressBook";
import { EmailContext, LocationContext } from "./Context";
/**
 * 
 * For every context we create , we can set a default value which can be consumed by the components which are not under the Provider component.
 */

// { name: "aravind"} => default value LocationContext
// Context.Provider
const HomeScreen = () => {
    console.log("root render");
    const [location, setLocation] = useState(null);
    const [email, setEmail] = useState("amit@gmail.com");

    const data = { email, setEmail };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (data) => setLocation({ lat: data.coords.latitude, lng: data.coords.longitude }),
            (error) => {
                alert("Failed to load location");
                setLocation(error);
            }
        );
    }, []);

    return (
        <div className="home-screen">
            <EmailContext.Provider value={data}>
                <AddressBook />
                <LocationContext.Provider value={19}>
                    <LocationContext.Provider value={location}>
                        <>
                            <div className="cards">
                                <Cart />
                            </div>
                        </>
                    </LocationContext.Provider>
                </LocationContext.Provider>
            </EmailContext.Provider>
        </div>
    );
}

export default HomeScreen;