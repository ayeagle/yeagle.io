import axios from "node_modules/axios/index";


export default function LogActivity(userId, activity) {

    let timestamp = new Date().toISOString()


    console.log("data being logged: ")

    // console.log("this is the req body sessionId --> " + req.body.sessionId);

        console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))


    axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/logActivity', {
        userId: userId,
        activity: activity,
        timestamp: timestamp
    })
        .then(response => {
            console.log(response.data);
            console.log("the request was successful")

        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL REQUEST")
            // console.log(error.response.data)

        });
}
