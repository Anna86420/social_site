import my from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
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
            <Post message='Hi, how are you?' likes='12' />
            <Post message='My first post!' likes='12' />
        </div>
    )
}
export default MyPosts;