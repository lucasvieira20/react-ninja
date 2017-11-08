import React, { Component } from 'react';

import AppContent from '../components/AppContent';


class App extends Component{
    constructor(){
        super()
        this.state = {
            
            userinfo: {
                username: 'Lucas Vieira'
            },

            repos: [
                {
                    name: 'Repo',
                    link : '#'
                },
                {
                    name: 'Repo II',
                    link : '#'
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <AppContent 
                    userInfo={this.state.userinfo}
                    repos={this.state.repos}
                />
            </div>
        )
    }
}

export default App;
