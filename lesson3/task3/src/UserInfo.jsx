import React from "react";
import Avatar from "./Avatar.jsx";

const UserInfo = ( props ) => {
    console.log(props);
    return (
        <div className="user-info">
            <Avatar
                avatarUrl={props.avatarUrl}
                user={props.user}>
            </Avatar>
            <div className="user-info__name">{ props.name}</div>
        </div>
    );
}

export default UserInfo;