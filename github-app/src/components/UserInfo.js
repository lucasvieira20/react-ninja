import React from 'react';

const UserInfo = () => (
    <div className="user-info">

        <div className="avatar col-md-3">
            <img src="https://avatars0.githubusercontent.com/u/4265703?v=4" />
        </div>

        <div className="meta col-md-8">

            <h2 className="user-info--name">Lucas Vieira</h2>
            <h3 className="user-info-company">Sirius Interativa</h3>
            <p className="user-info-location">Rio de Janeiro</p>

            <ul className="repos-info">
                <li><strong>Repositorys</strong> - <span>100</span></li>
                <li><strong>Followers</strong> - <span>100</span></li>
                <li><strong>Following</strong> - <span>100</span></li>
            </ul>

        </div>

        <hr className="my-4" />

    </div>
)

export default UserInfo;