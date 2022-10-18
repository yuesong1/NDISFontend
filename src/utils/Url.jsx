export const backendURL="http://localhost:500"
export const createNewBsp="/bsp"
export const canvasURL="http://192.168.1.249"
var bearerToken='Bearer vCb6CgirWrVy94LXz2xbcFJRWDkxUOCtWY6SGLascYb4lRPCgksmXCs2xFyUk2xU'
var token='vCb6CgirWrVy94LXz2xbcFJRWDkxUOCtWY6SGLascYb4lRPCgksmXCs2xFyUk2xU'

//Backend API
export function getURLCreateNewBsp(){
    return backendURL+"/bsp"+"/create";
}
export function getURLCreateBSPPage1(){
    return backendURL+"/BSP_1"
}
export function getURLCreateBSPPage2(){
    return backendURL+"/BSP_2"
}
export function getURLCreateBSPPage3(){
    return backendURL+"/BSP_3"
}
export function getURLCreateBSPPage4(){
    return backendURL+"/BSP_4"
}
export function getURLCreateBSPPage5(){
    return backendURL+"/BSP_5"
}
export function getURLCreateBSPPage6(){
    return backendURL+"/BSP_6"
}
export function getURLBSPWithFeedback(id){
    return backendURL+"/feedback/"+id
}
export function getAllPatient(id){
    return backendURL+"/patients/"+id
}
export function getBSPById(id){
    return backendURL+"/bsp/get/"+id
}
export function deletePatientById(pracId,patientId){
    return backendURL+"/patients/"+pracId+"/"+patientId
}
//Canvas API
export function getCanvasUserId(){
    return canvasURL+"/api/v1/users/self"+'?access_token='+token
}
