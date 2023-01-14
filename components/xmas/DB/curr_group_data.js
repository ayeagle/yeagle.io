let curr_group_data = 
    {
        group_name: '',
        group_id: '',
        group_members: [],
        num_users: 0,
        gifts: [
            {
                unique_id: '',
                requester_name: '',
                giver_name: '',
                taken: true,
                details: '',
                url: '',
                year: '',
                group_id: 0,
            }

        ]
    }



export function updateGroupObject(new_data) {
    console.log(":::::::: Updating group object from this :::::::: ")
    console.log(curr_group_data)

    console.log(":::::::: Updating group object to this :::::::: ")
    console.log(new_data)
    // console.log("this file gets run in functions")


    curr_group_data = new_data
}

export function getGroupObject() {
    console.log("as requested, here is the group object:::::::: ")
    console.log(curr_group_data)

    return curr_group_data;
}