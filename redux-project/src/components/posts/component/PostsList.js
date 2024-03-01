import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActionTypes } from "../ActionTypes";
import { fetchPostsApiStatusSelector, getPostsListSelector } from "../selectors";

export const PostsList = () => {
    const dispatch = useDispatch();
    const apiStatus = useSelector(fetchPostsApiStatusSelector);
    const postsList = useSelector(getPostsListSelector);

    useEffect(() => {
        dispatch({ type: postActionTypes.FETCH_POSTS });
    }, []);

    return (
        <div className="posts">
            {
                postsList.map((post) => {
                    const title = post.author.gender === "MALE" ? "He/Him" : "She/Her";
                    return (<div key={post._id} className="post-card">
                        <div className="author">
                            <b>{`${post.author.name}  (${title})`}</b>
                            <p>{post.author.email}</p>
                        </div>
                        <div className="post-box">
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>

                    </div>);
                })
            }
        </div>
    );
}