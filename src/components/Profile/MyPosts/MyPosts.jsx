import my from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    let posts = [
        {id: 1, post: 'Hi, how are you?', likesCount: 10},
        {id: 2, post: 'My first post!', likesCount: 20},
    ]
    let postsElements = posts.map(post => <Post message={post.post} likes={post.likesCount}/>)
    return (
        <div className={my.wall}>
            <h3>My posts</h3>
            <div className={my.add_post}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;