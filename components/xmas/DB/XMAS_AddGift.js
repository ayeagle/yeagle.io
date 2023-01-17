import axios from "node_modules/axios/index";


export default function XMAS_AddGift(
    user,
    group_id,
    giftName,
    giftURL,
    giftCost,
    giftDetails) {

    let timestamp = new Date().toISOString()

    let testName = ''

    console.log("check xmas user method invoked");

    // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
    // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
    // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))

    return axios.post('http://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_addGift', {
        user:       user,
        group_id:   group_id,
        giftName:   giftName,
        giftURL:    giftURL,
        giftCost:   giftCost,
        giftDetails: giftDetails
    })
        .then(response => {
            console.log(response.data)
            testName = response.data
            console.log("the gift add request was successful")
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL  gift add  CREATION REQUEST")
        })


}
