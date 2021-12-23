import React from "react";
import moment from 'moment'

const Profile = userData => {
    const dateOfBirth = moment(new Date(userData.birthDate)).format('DD MM YY');
    return (
        <>
            <div className="profile__name">
                {userData.firstName} {userData.lastName}
            </div>
            <div className="profile__birth">
                {`Was born ${dateOfBirth} in ${userData.birthPlace}`}
            </div>
        </>
    );
}
export default Profile;