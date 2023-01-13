let curr_group_data = [
    {
        group_id: '',
        group_members:[],
        gifts: [
        ]
    }

]


export const updateGroupObject = (new_data) => {
    curr_group_data = new_data
}

export const getGroupObject = () => {


    
    return curr_group_data;
}