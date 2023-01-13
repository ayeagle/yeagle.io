import axios from "node_modules/axios/index";

let testName = ''

export default function XMAS_CheckUser(xmas_group_name) {


    console.log("check XMAS user method invoked");

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_checkUser', {
        xmas_group_name:xmas_group_name
    })
        .then(response => {
            console.log(response.data)
            testName = response.data
            console.log("the XMAS user check request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("XMAS user check UNSUCCESSFUL REQUEST")
        })


}
