import axios from 'axios';

const api_key = "RGAPI-fa299fdf-ab1b-485f-af65-c1ac27a8ad8f"
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});
