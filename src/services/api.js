import Axios from "axios";
import http from "http";
import https from "https";

const baseUrl = process.env.REACT_APP_API_URL;
const bindIp = process.env.BIND_IP;

// Criar agents HTTP/HTTPS com endereço de bind se especificado
const httpAgent = bindIp
    ? new http.Agent({ localAddress: bindIp })
    : undefined;

const httpsAgent = bindIp
    ? new https.Agent({ localAddress: bindIp })
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

