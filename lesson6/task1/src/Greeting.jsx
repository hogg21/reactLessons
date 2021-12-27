import React from "react";
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = props => {
    const {isLoggedIn} = props
    if (isLoggedIn) {
        return (
            <UserGreeting></UserGreeting>
        );
    };
    return (
        <GuestGreeting></GuestGreeting>
    );
}
export default Greeting;