import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
let store = {
    _state: {
        profilePage:
        {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 10 },
                { id: 2, post: 'My first post!', likesCount: 20 },
            ],
            newPostText: "go away!"
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Anna' },
                { id: 2, name: 'Julia' },
                { id: 3, name: 'Fedor' },
                { id: 4, name: 'Sophiko' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How r u' },
                { id: 3, message: 'Hello' },
                { id: 4, message: 'Yo' },
            ],
            newMessageBody: ""
        },
    },
    _callSubscriber() {
        console.log('');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;