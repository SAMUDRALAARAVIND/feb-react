import { LoginSignup } from "../components/LoginSignup";
import { HomeScreen } from "../components/Home";
import { useState } from "react";
import { checkIsUserLoggedIn } from "./auth-model";

export const AuthApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIsUserLoggedIn);

    return (
        <div>
            {
                isLoggedIn ? <HomeScreen /> : <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            }
        </div>
    );
}