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

    console.log("Add Gift -- client-side invoked");

    return axios.post('https://ec2-44-210-111-39.compute-1.amazonaws.com:5432/xmas_addGift', {
        user: user,
        group_id: group_id,
        giftName: giftName,
        giftURL: giftURL,
        giftCost: giftCost,
        giftDetails: giftDetails
    })
        .then(response => {
            testName = response.data
            return response.data
        })
        .catch(error => {
            console.error(error);
            console.log("UNSUCCESSFUL  gift add  CREATION REQUEST")
        })


}
