import axios from 'axios';


const GitHubUser = {
    getUserInfo: function(username){
        return axios.get('https://api.github.com/users/' + username);
    }
};

export default GitHubUser;w