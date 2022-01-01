import React, { Component } from "react";

class UserProfile extends Component {
    render() {
        if (!this.props.userData) {
            return null
        }
        const { name, avatar_url, location } = this.props.userData;
        return (
            <div className="users">
                <img alt="Avatar" src={avatar_url} className="users__avatar"></img>
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        )
    }
}
export default UserProfile;