let rerenderEntireTree = () => {
    console.log('');
}
let state = {
    profilePage:
    {
        posts: [
            { id: 1, post: 'Hi, how are you?', likesCount: 10 },
            { id: 2, post: 'My first post!', likesCount: 20 },
        ],
        newPostText: "go away!"
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Anna' },
            { id: 2, name: 'Julia' },
            { id: 3, name: 'Fedor' },
            { id: 4, name: 'Sophiko' },
        ],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How r u' },
            { id: 3, message: 'Hello' },
            { id: 4, message: 'Yo' },
        ]
    },
}
export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;