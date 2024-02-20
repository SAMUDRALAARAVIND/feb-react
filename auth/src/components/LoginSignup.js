import { useRef, useState } from "react";
import "./form.scss";
import { Auth } from "../auth/auth-model";

export const LoginSignup = ({ setIsLoggedIn }) => {
    const [toggleForm, setToggleForm] = useState(true);
    // true => signup , false => login
    const authModel = useRef(new Auth());

    const login = (e) => {
        e.preventDefault();
        const loginInfo = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        (async function () {
            let { success } = await authModel.current.login(loginInfo);
            setIsLoggedIn(success);
        })();
    }

    const signup = (e) => {
        e.preventDefault();
        const signupInfo = {
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            password: e.target.password.value,
            role: e.target.role.value
        }
        authModel.current.signup(signupInfo);
    }

    return <div className="form-container">
        {
            !toggleForm ? (
                <form onSubmit={login} key="1">
                    <input type="email" name="email" required placeholder="Email" />
                    <input type="password" name="password" required placeholder="Password" />
                    <button>Login</button>
                </form>
            ) :
                (
                    <form onSubmit={signup} key="2">
                        <input name="firstName" placeholder="First Name" required />
                        <input name="lastName" placeholder="Last Name" />
                        <input type="email" name="email" required placeholder="Email" />
                        <input type="password" name="password" required placeholder="Password" />
                        <select name="role">
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <button>Signup</button>
                    </form>
                )
        }
        <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Login" : "Signup"}</button>
    </div>
};
