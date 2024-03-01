import { CreatePost } from "./component/CreatePost";
import { PostsList } from "./component/PostsList";
import "./index.scss";

export const HomeScreen = () => {
    return (
        <div className="home-screen">
            <CreatePost />
            <PostsList />
        </div>
    );
}