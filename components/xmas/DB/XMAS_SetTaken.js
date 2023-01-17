import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from './curr_group_data';
 


export default function XMAS_SetTaken(taken_value, gift_unique_id, giver_name) {

    // let timestamp = new Date().toISOString()
    let curr_group = getGroupObject()


    let testName = ''

    console.log("user Set Taken method invoked");

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_setTaken', {
        taken_value:taken_value,
        gift_unique_id:gift_unique_id,
        giver_name: giver_name
    })
        .then(response => {
            console.log(response.data)
            testName = response.data

            // curr_group.gifts.find(gift => gift.gift_id === gift_unique_id)
//still need to set the curr_group id to taken

            // curr_group.gifts.unique_id

            let giftIndex = curr_group_data.gifts.findIndex(gift => gift.unique_id === gift_unique_id);
            
            if (giftIndex !== -1) {
                curr_group_data.gifts[giftIndex].taken = taken_value;
            }

            updateGroupObject(curr_group)



            // localStorage.setItem('username', response.data.username);
            // localStorage.setItem('password', response.data.upassword);
            // localStorage.setItem('uid', response.data.uid);

            console.log("the login request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL LOGIN REQUEST")
        })


}
