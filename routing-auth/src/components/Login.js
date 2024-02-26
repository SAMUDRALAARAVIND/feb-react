import { Form, Input, Button } from "antd";
import { login } from "../network/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = (loginInfo) => {
        setIsLoading(true);
        login(loginInfo, ({ success }) => {
            setIsLoading(false);
            if (success) {
                // if loging is success
                navigate("/dashboard");
            }
            else {
                alert("Login failed try again...")
            }
        })
    }

    return (
        <Form onFinish={onFinish} className="form" layout="vertical">
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { type: "email", message: "Invalid email" },
                    { required: true, message: "Email is required" }
                ]}
                className="form-item"
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: "Password is required feild" },
                ]}
                className="form-item"
            >
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit" block style={{ fontWeight: "600" }}>Login</Button>
        </Form>
    );
}