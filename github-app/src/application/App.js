import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from '../components/AppContent';


class App extends Component{

    constructor(){
        super()
        this.state = {
            userinfo: null,
            repos: []
        }
    }

    handleSearch(e) {

        const value = e.target.value;
        const keyCode = e.which || e.keyCode;
        const ENTER = 13;

        if(keyCode === ENTER){
            ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
                this.setState({
                    userinfo:{
                        infoName: result.name,
                        infoCompany: result.company,
                        infoLocation: result.location,
                        infoLogin: result.login,
                        repos:result.public_repos,
                        imageAvatar:result.avatar_url,
                        followers: result.followers,
                        following:result.following
                    }
                });
            });
        }
    }

    getRepos(e) {
        return (e) => {
            ajax().get(`https://api.github.com/users/lucasvieira20/repos`)
                .then((result) => {
                    this.setState({
                       repos:[{
                           name: result[0].name,
                           link: result[0].html_url
                       }] 
                    });
                });
        }
    }

    render(){
        return(
            <div>
                <AppContent
                    userinfo={this.state.userinfo}
                    repos={this.state.repos}
                    handleSearch={(e) => this.handleSearch(e)}
                    getRepos={this.getRepos()}
                />
            </div>
        )
    }
}

export default App;
