let curr_group_data =
{
    group_name: '',
    group_id: '',
    description: '',
    group_members: [],
    num_users: 0,
    year: 0,
    gifts: [
        // {
        //     gift_id: '',
        //     requester: '',
        //     giver: '',
        //     taken: true,
        //     gift_name: '',
        //     details: '',
        //     url: '',
        //     year: 0,
        //     group_id: 0,
        // }
    ]
}

export function updateGroupObject(new_data) {
    curr_group_data = new_data
}

export function getGroupObject() {
    return curr_group_data;
}