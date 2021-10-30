import Axios from "axios";

const baseUrl = "https://covid-api0.herokuapp.com";

export async function getUsers(limit){
    return Axios.get(`${baseUrl}/users/severity/${limit}`).then(res => res.data["message"]);
}


export async function sleep(miliseconds){
    return new Promise(r => setTimeout(r, miliseconds));
}