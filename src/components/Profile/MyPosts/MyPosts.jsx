import my from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    let postsData = [
        {id: 1, post: 'Hi, how are you?', likesCount: 10},
        {id: 2, post: 'My first post!', likesCount: 20},
    ]
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
            <Post message={postsData[0].post} likes={postsData[0].likesCount}/>
            <Post message={postsData[1].post} likes={postsData[1].likesCount} />
        </div>
    )
}
export default MyPosts;