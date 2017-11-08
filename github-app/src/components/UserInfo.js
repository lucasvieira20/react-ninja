import React from 'react';

const UserInfo = ( { userinfo } ) => (
    <div className="user-info">

        <div className="avatar col-md-3">
            <img src={userinfo.imageAvatar} />
        </div>

        <div className="meta col-md-8">

            <h2 className="user-info--name">
                <a href={`https://api.github.com/users/${userinfo.infoLogin}`}>
                    {userinfo.infoName}
                </a>
            </h2>
            
            <span className="user-info-login">{userinfo.infoLogin}</span>
            <h3 className="user-info-company">{userinfo.infoCompany}</h3>
            <p className="user-info-location">{userinfo.infoLocation}</p>

            <ul className="repos-info">
                <li><strong>Repositorys</strong> - <span>{userinfo.repos}</span></li>
                <li><strong>Followers</strong> - <span>{userinfo.followers}</span></li>
                <li><strong>Following</strong> - <span>{userinfo.following}</span></li>
            </ul>

        </div>

        <hr className="my-4" />

    </div>
)

export default UserInfo;