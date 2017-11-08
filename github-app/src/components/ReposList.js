import React from 'react';

const ReposList = ({ title, repos }) => (
    <div className="repos-list">
        <h2>{title}</h2>
        <ul>
            {repos.map((repo, index) => (
                <li key={index}><a target="_blank" href={repo.link}>{repo.name}</a></li>
            ))}
        </ul>
    </div>
)

ReposList.defaultProps = {
    title: '',
    link: '#'
}

export default ReposList;