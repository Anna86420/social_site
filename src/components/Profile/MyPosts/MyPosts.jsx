import my from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    return(
        <div className={my.wall}>
            <div className={my.add_post}>
                Add Post<textarea></textarea>
            </div>
            <Post message='Hi, how are you?' likes='12' />
            <Post message='My first post!' likes='12' />
        </div>
    )
}
export default MyPosts;