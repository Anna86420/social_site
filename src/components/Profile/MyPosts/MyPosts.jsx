import my from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    return(
        <div className={my.wall}>
            <div className={my.add_post}>
                Add Post<textarea></textarea>
            </div>
            <Post />
        </div>
    )
}
export default MyPosts;