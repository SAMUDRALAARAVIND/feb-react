import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { postActionTypes } from "../ActionTypes";
import { createPostSelector } from "../selectors";

export const CreatePost = () => {
    const dispatch = useDispatch();
    const apiStatus = useSelector(createPostSelector)

    const createNewPost = (postData) => {
        dispatch({ type: postActionTypes.CREATE_POST, payload: postData });
    };

    return (
        <div className="create-post-form">
            <Form onFinish={createNewPost}>
                <Form.Item name="title" rules={[{ required: true, message: "Title is required" }]}>
                    <Input placeholder="title of the post" />
                </Form.Item>
                <Form.Item name="content" rules={[{ required: true, message: "Post description is required" }]}>
                    <Input.TextArea placeholder="Enter post description" />
                </Form.Item>
                <Button type="primary" block loading={apiStatus === "pending"} htmlType="submit">Create Post</Button>
            </Form>
        </div>
    );
}