import axios from 'axios';

const api_key = "RGAPI-afd4e414-d4ac-421e-bfb0-2b231c47d511"

export default function API(url){
    axios.defaults.baseURL = `https://${url}`;
}
