import React from "react";

const User = (props) => {
    const { name, age } = props;
    return (
        <>
            <li class="user">
                <span class="user__name">{name}</span>
                <span class="user__age">{age}</span>
            </li>
            <li class="user">
                <span class="user__name">{name}</span>
                <span class="user__age">{age}</span>
            </li>
        </>
    );
}
export default User;