import my from "./MyPosts.module.css";
import React from "react"
import Post from "./Post/Post";
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.post} likes={post.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={my.wall}>
            <h3>My posts</h3>
            <div className={my.add_post}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;