import React from 'react';

import Header from './Header';
import UserInfo from './UserInfo';
import Actions from './Actions';
import ReposList from './ReposList';


const AppContent = ({ userinfo, repos, handleSearch, getRepos }) => (
    <div>
        <Header handleSearch={handleSearch} />
        <div className="container">
            <div className="jumbotron home-inner">

                {!!userinfo && <UserInfo userinfo={userinfo} />}
                {!!userinfo && <Actions getRepos={getRepos} />}

                <hr className="my-4" /> 

                {!!repos.length && 
                <ReposList 
                    title="Repositorys" 
                    repos={repos}
                />}

            </div>
        </div>
    </div>
)


export default AppContent;