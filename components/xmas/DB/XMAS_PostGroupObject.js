import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from "./curr_group_data";

let testName = ''

export default function XMAS_GetGroupObject(name, participants, description) {

    let temp = getGroupObject();

    let timestamp = new Date().toISOString()


    console.log("POST group object method invoked");

    console.log("this is the temp/curr_group object before getting assigned")
    console.log(temp)

    // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
    // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
    // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_postGroupObject', {
        name: name,
        participants: participants,
        description: description,
        timestamp: timestamp,
    })
        .then(response => {
            console.log("start of the experiment")
            console.log(response)
            console.log(response.data)
            console.log(response.data.id)
            console.log("end of the experiment")

            console.log("this is the id returned yay " + response.data[0].id)

            localStorage.setItem('group_id', response.data[0].id)

            temp.group_id = response.data[0].id

            console.log("************ this is the value of temp before it is deployed to update the group object")
            console.log(temp)
            updateGroupObject(temp)


            //   console.log(temp)

            return temp
        })
        .catch(error => {
            console.error(error);
            console.log("get group object  UNSUCCESSFUL REQUEST")
        })
}





            // console.log(response.data.map())
            // temp.gifts = response.data.map()
            // testName = response.data
            // console.log("the get group object request was successful")
            // console.log(temp)
            // // console.log(temp.gifts)
