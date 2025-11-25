import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css"
const Profile = () => {
    return (
        <div className='content'>
            <img className={p.profile_pic} src='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg' />
            <div className="info">
                <ul className={p.info_list}>
                    <li>Date of birth: 13.11.1996</li>
                    <li>City: Tbilisi</li>
                    <li>Friends: 100</li>
                    <li>Hobbies: listening to music, sport</li>
                    <li>Favorite books: Lord of the rings</li>
                </ul>
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;