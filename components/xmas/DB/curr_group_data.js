let curr_group_data = [
    {
        group_name: '',
        group_id: '',
        group_members:[],
        num_users: 0,
        gifts: [
        ]
    }

]


export const updateGroupObject = (new_data) => {
    console.log("Updating group object from this :::::::: ")
    console.log(curr_group_data)

    console.log("Updating group object to this :::::::: ")
    console.log(new_data)

    curr_group_data = new_data
}

export const getGroupObject = () => {
    console.log("as requested, here is the group object:::::::: ")
    console.log(curr_group_data)
    
    return curr_group_data;
}