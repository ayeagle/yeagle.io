import axios from "node_modules/axios/index";


export default function XMAS_ValidateLogin(userName, password) {

    // let timestamp = new Date().toISOString()

    let testName = ''

    console.log("user login method invoked");

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_validateLogin', {
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
