
export function getAllBK(bk)
{
    return {type:"GET_ALL_BK",payload:bk}
}
export function getAllUSER(bk)
{
    return {type:"GET_ALL_USER",payload:bk}
}
export function getUserById(id)
{
    return {type:"GET_USER_BY_ID",payload:id}
}
export function deleteBK(id)
{
    return {type:"DELETE_BK",payload:id}
}
export function upDate(BK)
{
    return {type:"UPDATE_BK",payload:BK}
}
export function addUser(u)
{
    return {type:"ADD_USER",payload:u}
}
// export function deleteUser(id)
// {
//     return {type:"DELETE_USER",payload:id}
// }