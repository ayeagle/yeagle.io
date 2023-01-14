import axios from "node_modules/axios/index";
import { getGroupObject, updateGroupObject } from "./curr_group_data";

let testName = ''

export default function XMAS_GetGroupObject(xmas_group_name, xmas_group_id) {

    let temp = getGroupObject();



    console.log("get group object method invoked");

    console.log("this is the temp/curr_group object before getting assigned")
    console.log(temp)

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_getGroupObject', {
        xmas_group_name:xmas_group_name,
        xmas_group_id:xmas_group_id
    })
        .then(response => {
            temp.group_id = response.data[0].group_id

            temp.group_members = response.data[0].participants

            response.data.map((element, i) => {
                // console.log("inside first loop")

                // console.log(element)
                // console.log(i)
                // console.log(element.length)

                temp.gifts.push({
                    gift_id: element.unique_id,
                    requester:element.requester_name,
                    giver: element.giver_name,
                    taken: element.taken,
                    details: element.details,
                    url: element.url,
                    year: element.year,
                });
              });

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
