import { Form, Button, Input, Radio } from "antd";

// MALE, FEMALE, OTHER

export const Signup = () => {

    const onFinish = (data) => {
        console.log(data);
    }

    return (
        <Form className="form" layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { type: "email", message: "Invalid Email" },
                    { required: true, message: "Email is required" }
                ]}
                className="form-item"
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    { required: true, message: "Name is required" }
                ]}
                className="form-item"
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: "password is required" }
                ]}
                className="form-item"
            >
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
                label="City"
                name="city"
                rules={[
                    { required: true, message: "City is required" }
                ]}
                className="form-item"
            >
                <Input placeholder="Enter city name" />
            </Form.Item>
            <Form.Item
                label="Gender"
                name="gender"
                rules={[
                    { required: true, message: "Please enter your gender" }
                ]}
                className="form-item"
            >
                <Radio.Group>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                    <Radio value="OTHER">Others</Radio>
                </Radio.Group>
            </Form.Item>
            <Button type="primary" htmlType="submit" block>Signup</Button>
        </Form>
    );
}