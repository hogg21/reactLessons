import React from "react";
import UserForm from "./UserForm.jsx";


const Profile = ({userData, handleChange}) => {
    return (
        <>
            <div className="column"></div>
            <UserForm userData={userData} handleChange={handleChange}></UserForm>
        </>
    );
}
export default Profile;