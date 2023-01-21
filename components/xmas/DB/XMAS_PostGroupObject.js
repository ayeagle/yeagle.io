import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from "./curr_group_data";

let testName = ''

export default function XMAS_GetGroupObject(name, participants, description) {

    let temp = getGroupObject();
    let timestamp = new Date().toISOString()

    console.log("Post Group Object -- client-side invoked");

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_postGroupObject', {
        name: name,
        participants: participants,
        description: description,
        timestamp: timestamp,
    })
        .then(response => {
            console.log("this is the response which we will set group_id to + " + response.data[0].id)
            localStorage.setItem('group_id', response.data[0].id)

            temp.group_id = response.data[0].id

            updateGroupObject(temp)

            return temp
        })
        .catch(error => {
            console.error(error);
            console.log("get group object  UNSUCCESSFUL REQUEST")
        })
}
