import { Form, Input, Button } from "antd";
import { login } from "../network/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../store/ActionTypes";
import { loginApiStatusSelector } from "./auth/selectors";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const apiStatus = useSelector(loginApiStatusSelector);

    const onFinish = (loginInfo) => {
        dispatch({ type: ActionTypes.LOGIN, payload: loginInfo });
    }

    useEffect(() => {
        apiStatus === "success" && navigate("/dashboard");
    }, [apiStatus])

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
            <Button loading={apiStatus === "pending"} type="primary" htmlType="submit" block style={{ fontWeight: "600" }}>Login</Button>
        </Form>
    );
}