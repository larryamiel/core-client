import axios from "axios"

class Auth {
    user = () => {
        return axios.post('http://localhost:5000/user', {},
            {withCredentials: true})
            .then(data => data.data)
            .catch(err => console.log(err));
    }

    logout = () => {
        return axios.post('http://localhost:5000/user/logout', {},
            {withCredentials: true})
            .then(data => data.data)
            .catch(err => console.log(err));
    }
}

export default new Auth();