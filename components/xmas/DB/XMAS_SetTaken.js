import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from './curr_group_data';



export default function XMAS_SetTaken(taken_value, gift_unique_id, giver_name) {

    let curr_group = getGroupObject()
    let testName = ''

    console.log("Set Taken -- client-side invoked");

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_setTaken', {
        taken_value: taken_value,
        gift_unique_id: gift_unique_id,
        giver_name: giver_name
    })
        .then(response => {
            console.log(response.data)
            testName = response.data
            let giftIndex = curr_group_data.gifts.findIndex(gift => gift.unique_id === gift_unique_id);

            if (giftIndex !== -1) {
                curr_group_data.gifts[giftIndex].taken = taken_value;
            }

            updateGroupObject(curr_group)

            console.log("the login request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL LOGIN REQUEST")
        })


}
