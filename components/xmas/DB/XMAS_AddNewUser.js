import axios from "node_modules/axios/index";


export default function XMAS_AddNewUser(username) {

    let timestamp = new Date().toISOString()

    let testName = ''

    console.log("Add New User -- client-side invoked");

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_addNewUser', {
        username: username,
        password: password,
        timestamp: timestamp
    })
        .then(response => {
            console.log(response.data)
            testName = response.data
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL xmas NEW USER CREATION REQUEST")
        })


}
