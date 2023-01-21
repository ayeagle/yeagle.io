import axios from "node_modules/axios/index";

export default function XMAS_ValidateLogin(userName, password) {

    // let timestamp = new Date().toISOString()

    let testName = ''

    console.log("Validate Login -- client-side invoked");

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_validateLogin', {
        userName:userName,
        password:password
    })
        .then(response => {
            console.log(response.data)
            testName = response.data

            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.upassword);
            localStorage.setItem('uid', response.data.uid);

            console.log("the login request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL LOGIN REQUEST")
        })


}
