import Axios from "axios";
import http from "http";
import https from "https";

const baseUrl = process.env.REACT_APP_API_URL;
const localAddress = process.env.REACT_APP_LOCAL_ADDRESS;

// Criar agents HTTP/HTTPS com localAddress se especificado
const httpAgent = localAddress 
    ? new http.Agent({ localAddress }) 
    : undefined;

const httpsAgent = localAddress 
    ? new https.Agent({ localAddress }) 
    : undefined;

// Criar instância Axios configurada
const axiosInstance = Axios.create({
    baseURL: baseUrl,
    httpAgent: httpAgent,
    httpsAgent: httpsAgent,
});

export async function getUsers(limit){
    return axiosInstance.get(`/users/sickest/${limit}`).then(res => res.data["data"]);
}

export async function sleep(miliseconds){
    return new Promise(r => setTimeout(r, miliseconds));
}

