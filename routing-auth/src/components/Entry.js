import { Tabs } from "antd";
import { Signup } from "./Signup";
import { Login } from "./Login";
import "./entry.scss";

const tabs = [
    {
        key: "login",
        label: "Login",
        children: <Login />
    },
    {
        key: "signup",
        label: "Signup",
        children: <Signup />
    }
]


export const Entry = () => {
    return (
        <div className="form-container">
            <div className="tabs-container">
                <Tabs items={tabs} />
            </div>
        </div>
    );
}