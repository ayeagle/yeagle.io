import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from "./curr_group_data";

let testName = ''

export default function XMAS_GetGroupObject(xmas_group_name, xmas_group_id) {

    let temp = getGroupObject();

    console.log("Get Group Object -- client-side invoked");

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_getGroupObject', {
        xmas_group_name: xmas_group_name,
        xmas_group_id: xmas_group_id
    })
        .then(response => {
            if (response.data.length != 0) {

                temp.group_id = response.data[0].id

                temp.group_members = response.data[0].participants
                temp.year = response.data[0].year
                temp.description = response.data[0].description
                temp.group_name = response.data[0].name

                temp.gifts = []

                response.data.map((element, i) => {

                    temp.gifts.push({
                        gift_id: element.unique_id,
                        requester: element.requester_name,
                        giver: element.giver_name,
                        gift_name: element.gift_name,
                        taken: element.taken,
                        details: element.details,
                        url: element.url,
                        year: element.year,
                    });
                });
            }
            updateGroupObject(temp)

            return temp
        })
        .catch(error => {
            console.error(error);
            console.log("get group object  UNSUCCESSFUL REQUEST")
            // console.log(temp)
        })
}

