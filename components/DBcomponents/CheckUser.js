import axios from "node_modules/axios/index";


export default function CheckUser(userName) {

    // let timestamp = new Date().toISOString()

    let testName = ''

    console.log("check user method invoked");

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/checkUser', {
        userName:userName
    })
        .then(response => {
            console.log(response.data)
            testName = response.data
            console.log("the request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL REQUEST")
        })


}
