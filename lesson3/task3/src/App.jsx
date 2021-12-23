import React from "react";
import Comment from "./Comment";

const userInfo = {
    name: 'Denis',
    avatarUrl: 'https://www.primecrime.ru/cache/257-346-100/public/files/gallery/b6f3ed5bc2b9695aabc4662bb1905b55.jpg'
}

const App = () => {
    return (
        <Comment
            user={userInfo} text='Good job'
            date={new Date('2021-12-23T11:32:40.566z')}>
        </Comment>
    );
};

export default App;